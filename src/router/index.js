import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import routes from './routes.js'
const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if(store.getters['auth/isAuthenticated']){
      next()
    }else{
      if (to.path === '/login') {
        next();
      } else {
        next({ path: '/login' });
      }
    }
 })

export default router