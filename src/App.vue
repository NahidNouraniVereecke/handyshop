<template>
  <div id="app">
    <p></p>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/molecules/NavBar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
