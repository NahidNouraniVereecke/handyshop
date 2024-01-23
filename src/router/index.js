import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


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
    component: () => import('../views/RegisterOhneAtomView.vue')
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import( '../views/EditProfile.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_user" || userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
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
      const userRole = localStorage.getItem('role');

       if ( userRole === "ROLE_admin" )  {
       
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
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_user" || userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/AddProduct',
    name: 'Addproduct',
    component: () => import( '../views/AddProductView.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/EditProduct/:id',
    name: 'EditProduct',
    component: () => import( '../views/EditProductView.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if ( userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  
  {
    path: '/EditUserAdmin/:id',
    name: 'EditUserAdmin',
    component: () => import( '../views/EditUserAdminView.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/EditProfile',
    name: 'EditProfile',
    component: () => import( '../views/EditProfile.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_user" || userRole === "ROLE_admin" )  {
       
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
    const userRole = localStorage.getItem('role');
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
    component: () => import( '../views/ImpressumView.vue'),
  },
  {
    path: '/brandManagement',
    name: 'brandManagement',
    component: ()=> import('../views/BrandManagement.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if ( userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/orderManagement',
    name: 'orderManagement',
    component: () => import('../views/OrderManagement.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/orderView',
    name: 'orderView',
    component: () => import('../views/OrderView.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_user" || userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/editOrder',
    name: 'editOrder',
    component: () => import('../views/editOrderView.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if (userRole === "ROLE_user" || userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
  {
    path: '/editOrderAdmin',
    name: 'editOrderAdmin',
    component: () => import('../views/editOrderAdmin.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if ( userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },{
    path: '/addProduct',
    name: 'addproduct',
    component: () => import( '../views/AddProductView.vue'),
    beforeEnter: (to, from, next) => {
      const userRole = localStorage.getItem('role');

       if ( userRole === "ROLE_admin" )  {
       
        next();
      } else {
         next('/access-denied');  
      }
    }
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router