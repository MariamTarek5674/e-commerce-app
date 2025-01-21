import { createStore } from 'vuex';
import auth from './auth';
import home from './home';

const store = createStore({
  modules:{
    auth,
    home
  }
});

export default store;