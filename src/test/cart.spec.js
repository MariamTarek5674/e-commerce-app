import { mount } from "@vue/test-utils";
import { describe, expect } from "vitest";
import Cart from "../components/Cart/index.vue";
import LineItemCard from "../components/Cart/components/lineItemCard.vue";
describe('Cart.vue',()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = mount(Cart,{
            global:{
                plugins: [globalThis.store, globalThis.router],
            }
        })
    })

    it('displays "Empty Cart" if there are no carts',  () => {  //intially when userCarts is []
        const emptyCartMessage = wrapper.find('.empty-cart');
        expect(emptyCartMessage.text()).toBe('Empty Cart');
    });

    it('after fetch userCarts it displays user carts correctly when there are items',async()=>{
        const spyOnDispatch=vi.spyOn(store,"dispatch")
        await globalThis.store.dispatch('cart/fetchUserCarts')

        expect(spyOnDispatch).toBeCalledWith('cart/fetchUserCarts')

        expect(wrapper.findComponent(LineItemCard).exists()).toBe(true);

        const TheOnlyh1IsHeader = wrapper.find('h1');
        expect(TheOnlyh1IsHeader.text()).toBe('My Carts'); //there is no h1 with Empty Cart
    })

    it('calculates the total price for a cart correctly',async()=>{
        const cart = globalThis.store.getters['cart/userCarts'][0]; //after the userCarts has been set in the previous testcase        
        const total = wrapper.vm.calculateCartTotal(cart)
        expect(total).toBe('300.00'); // 1 * 100 + 2* 100 because getProductById always return a product with price 100
    })


  it('calls clearCart method when Clear button is clicked', async () => {
    const clearButton = wrapper.find('button');
    await clearButton.trigger('click');
    expect(globalThis.store.dispatch).toHaveBeenCalledWith('cart/clearCart', 1);
  });

  it('closes the cart and toggles the cart status when the closeCart method is called', async () => {
    const spyOnCommit= vi.spyOn(store,"commit")
    wrapper.vm.closeCart();
    expect(wrapper.vm.isDisappearing).toBe(true);

    // Simulate the timeout and check if the commit is called after animation
    await new Promise((resolve) => setTimeout(resolve, 500));
    expect(spyOnCommit).toHaveBeenCalledWith('cart/toggleCartStatus');
  });

  it('closes the cart when clicking on x icon', async () => {
    const closeButton = wrapper.find('.text-2xl.font-extrabold.cursor-pointer');
    await closeButton.trigger('click');
    expect(wrapper.vm.isDisappearing).toBe(true);
  });

  

    
})