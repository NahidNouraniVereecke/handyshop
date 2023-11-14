<template>
  <h2 class="title">{{ text }}</h2>
</template>

<script>
export default {
  name: 'TitleAtom',
  props: {
    text: String,
  },
};
</script>

<style scoped>
.title {
  font-size: 1.5em;
  margin-bottom: 15px;
  text-align: center;
}
</style>
