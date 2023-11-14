<template>
  <div class="navbar-container">
    <div class="centered-elements">
      <LinkAtom :url="'/'">Home</LinkAtom>
      <LinkAtom :url="'/about'">About</LinkAtom>
      <LinkAtom :url="'/help'">Help Page</LinkAtom>
      <LinkAtom :url="'/impressum'">Imprint</LinkAtom>
      <LinkAtom :url="'/products'">Produkte</LinkAtom>
      <InputAtom id="input" />
    </div>

    <div class="right-elements">
      <LinkAtom :url="'/login'">Login</LinkAtom>
      <LinkAtom :url="'/register'">Register</LinkAtom>
    </div>
  </div>
</template>

<script>
import InputAtom from "@/components/atoms/InputAtom.vue";
import LinkAtom from "@/components/atoms/LinkAtom.vue";

export default {
  components: {
    InputAtom,
    LinkAtom,
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
