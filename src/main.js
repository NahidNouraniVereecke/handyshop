import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router/index'

import BootstrapVueNext from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


const piniaStore = createPinia();

createApp(App).use(router).use(piniaStore).use(BootstrapVueNext).mount('#app')
