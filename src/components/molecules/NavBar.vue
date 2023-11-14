<template>
  <div class="navbar-container">
    <div class="centered-elements">
      <RouterLinkAtom :url="'/'">Home</RouterLinkAtom>
      <RouterLinkAtom :url="'/about'">About</RouterLinkAtom>
      <RouterLinkAtom :url="'/help'">Help Page</RouterLinkAtom>
      <RouterLinkAtom :url="'/impressum'">Imprint</RouterLinkAtom>
      <RouterLinkAtom :url="'/products'">Produkte</RouterLinkAtom>
      <InputAtom id="input" />
    </div>

    <div class="right-elements">
      <RouterLinkAtom :url="'/login'">Login</RouterLinkAtom>
      <RouterLinkAtom :url="'/register'">Register</RouterLinkAtom>
    </div>
  </div>
</template>

<script>
import InputAtom from "@/components/atoms/InputAtom.vue";
import RouterLinkAtom from "@/components/atoms/RouterLinkAtom.vue";

export default {
  components: {
    InputAtom,
    RouterLinkAtom,
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
#input{
  margin-left: 20px;
}
</style>
