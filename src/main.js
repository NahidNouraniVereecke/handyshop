import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router/index';
import { useUserStore } from '@/store/user.js';

import BootstrapVueNext from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);

// Create and use Pinia instance
const piniaStore = createPinia();
app.use(piniaStore);

// Create and use stores
const userStore = useUserStore();

app.use(router).use(BootstrapVueNext);

router.beforeEach((to, from, next) => {
    
  if (!localStorage.getItem('username')) {
    console.log("not featched");
    console.log(localStorage.getItem('username'));
    
  }else{
    console.log('Main.js');
    const backendUrl2 = 'http://localhost:8081/users/username/';
    const username = localStorage.getItem('username');
    userStore.fetchData(`${backendUrl2}${username}`);
  }
  next();
});

app.mount('#app');