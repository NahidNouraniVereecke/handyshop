import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
  .use(router)
  .use(BootstrapVueNext)
 
  .mount('#app')
