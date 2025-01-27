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
          },
          cart: {
            namespaced: true,
            state:{
                isCartOpen:false
            },
            actions: {
              updateProductQuantity: vi.fn(() => Promise.resolve()),
            },
            getters: {
              userCarts: () => [{ id: 1 }],
              cartItemsLength: ()=> 4
            },
            mutations:{
                toggleCartStatus: (state)=> state.isCartOpen = !state.isCartOpen
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