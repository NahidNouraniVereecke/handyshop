<template>
    <div class="navbar-container">
       <div class="centered-elements">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
       
        <router-link to="/help">Help Page</router-link>|
        <router-link to="/impressum">Imprint</router-link>|
        <InputAtom   />
       </div>
  
       <div class="right-elements">
       
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link> |
      </div>
    </div>
  </template>
  <script>
    import InputAtom from "@/components/atoms/InputAtom.vue";  
    
    export default {
      components: {
        InputAtom,
      },
    };
    </script>
<style scoped>
    .navbar-container {
      display: flex;
      justify-content: space-between;
      background-color: green;  
      padding: 10px;  
    }
    
    .centered-elements {
      display: flex;
      align-items: center;
    }
    
    .right-elements {
      display: flex;
      align-items: center;
    }
    
    .router-link {
      margin: 0 10px; 
      color: white; 
      text-decoration: none;  
    }
    </style>
