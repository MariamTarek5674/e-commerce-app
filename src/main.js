import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css';
import store from './store'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

library.add(faEye, faEyeSlash)

const app=createApp(App)
app.use(store)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
