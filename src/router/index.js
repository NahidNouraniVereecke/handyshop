import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const userRole = localStorage.getItem('role');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import( '../views/ProductView.vue')
  },
  {
    path: '/help',
    name: 'help',
   
    component: () => import('../views/HelpView.vue')
  },
  {
    path: '/access-denied',
    name: 'access-denied',
    component: () => import( '../views/AccessDenied.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import( '../views/EditProfile.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import( '../views/LogoutView.vue'),
  },
  {
    path: '/productMang',
    name: 'productMang',
    component: () => import( '../views/ProductManagement.vue'),
    beforeEnter: (to, from, next) => {
       if (userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import( '../views/ShoppingCartView.vue'),
    beforeEnter: (to, from, next) => {
       if (userRole === "ROLE_user")  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/userMang',
    name: 'userMang',
    component: () => import( '../views/UserManagement.vue'),
    beforeEnter: (to, from, next) => {
       if (userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import( '../views/ImpressumView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router