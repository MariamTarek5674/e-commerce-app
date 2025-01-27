import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home/index.vue'
import ProductDetails from '../pages/ProductDetails/index.vue'

let store, router;
beforeAll(() => {
    store = createStore({
      modules: {
        auth: {
          namespaced: true,
          actions:{
            login: vi.fn(() => Promise.resolve()), //mock successful login action
            logout: vi.fn(()=>Promise.resolve()) //mock successful logout action
          }
        },
        home: {
            namespaced: true,
            actions: {
              fetchProductDetails: vi.fn(() => {
                return Promise.resolve({ data: { title: "Test Product", price: 100, image: "test-image.jpg" } });
              }),
            },
            getters:{
                getProductById: vi.fn((state)=>(productId)=>{
                    return { title: "Test Product", price: 100, image: "test-image.jpg"}
                  })
            }
          },
          cart: {
            namespaced: true,
            state:{
                isCartOpen:false,
                fetchCartLoading:false,
                userCarts:[],
                cartItemsLength:0,
            },
            actions: {
              updateProductQuantity: vi.fn(() => Promise.resolve()),
              fetchUserCarts: vi.fn(async ({ commit }) => {
                const response = {
                  data: [
                    {
                      id: 1,
                      products: [
                        { id: 1, productId: 1, quantity: 2 },
                        { id: 2, productId: 2, quantity: 1 },
                      ],
                    },
                  ],
                };
                commit('setFetchCartLoading', true); // Start loading
                commit('setUserCarts', [response.data[0]]);
                
                let length = 0;
                response.data.forEach((cart) => {
                  length += cart?.products?.length;
                });
    
                //commit('setCartItemsLength', length); // Set cart items length
                commit('setFetchCartLoading', false); // Stop loading
              }),
              clearCart:({state}) => state.userCarts=[]
            },
            getters: {
              cartItemsLength: ()=> 4,
              userCarts:(state)=> state.userCarts,
              fetchCartLoading:(state)=> state.fetchCartLoading,
              cartId:()=>1
            },
            mutations:{
                toggleCartStatus: (state)=> state.isCartOpen = !state.isCartOpen,
                setUserCarts :(state,items)=>  state.userCarts=items,
                setFetchCartLoading:(state,status)=> state.fetchCartLoading=status,
            }   
          },
}
})
    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/', name: 'Home', component: Home, children:[{path:'product/:id',name:'productDetails',component:ProductDetails}] }],
    });

globalThis.store= store;
globalThis.router= router;
})