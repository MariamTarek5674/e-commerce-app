import { createStore } from 'vuex';
import { createRouter, createWebHistory } from 'vue-router';

let store, router;
beforeAll(() => {
    store = createStore({
      modules: {
        auth: {
          namespaced: true,
          actions:{
            login: vi.fn(() => Promise.resolve()) //mock successful login action
          }
        },
      },
    });
    store.dispatch = vi.fn(); // mock the dispatch function itself not only the login action so i can spy on login function (because the actions is wrapped with another BoundDispatch)
    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: '/', name: 'Home', component: { template: '<div>Home</div>' } }],
    });

globalThis.store= store;
globalThis.router= router;
})