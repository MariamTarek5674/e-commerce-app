import { mount } from '@vue/test-utils';
import { beforeEach, describe } from "vitest";
import NavigationBar from '../components/NavigationBar/index.vue'
describe('NavigationBar.vue',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = mount(NavigationBar,{
            global: {
                plugins: [globalThis.router, globalThis.store],
              },
        })
    })

    it('displays the correct cart items count', () => {
        const cartCount = wrapper.find('span');
        expect(cartCount.text()).toBe('4');
      });

    it('calls changeCartStatus when the cart icon is clicked', async () => {
        const spyOnStoreCommit= vi.spyOn(store,"commit")
        const cartIcon = wrapper.find('i');
        await cartIcon.trigger('click');
    
        // Check if the mutation was committed
        expect(spyOnStoreCommit).toHaveBeenCalledWith('cart/toggleCartStatus');
    });  
    it('calls handleLogout and redirects to login when logout button is clicked', async () => {
        const spyOnDispatch = vi.spyOn(store,"dispatch")
        const spyOnRouter = vi.spyOn(router,"push")
        const logoutButton = wrapper.find('button');
        await logoutButton.trigger('click');
    
        // Check if the logout action was dispatched
        expect(spyOnDispatch).toHaveBeenCalledWith('auth/logout');
    
        // Check if the router was pushed to the login page
        expect(spyOnRouter).toHaveBeenCalledWith('/login');
    })
    
})