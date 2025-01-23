import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import store from './store'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash,faShoppingCart,faTimes,faTrash} from '@fortawesome/free-solid-svg-icons'
import { createToaster } from '@bastien-j/vue-toaster'
import '@bastien-j/vue-toaster/style.css' 

library.add(faEye, faEyeSlash,faShoppingCart,faTimes,faTrash)
const toaster = createToaster()

const app=createApp(App)
app.use(store)
app.use(router)
app.use(toaster)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
