import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';




createApp(App).use(router).mount('#app')
