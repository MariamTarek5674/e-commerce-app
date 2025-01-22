import { createStore } from 'vuex';
import auth from './auth';
import home from './home';
import cart from './cart';

const store = createStore({
  modules:{
    auth,
    home,
    cart
  }
});

export default store;