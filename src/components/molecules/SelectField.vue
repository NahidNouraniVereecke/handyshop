<template>
  <div class="select-field">
    <LabelAtom :htmlFor="id">{{ label }}</LabelAtom>
    <SelectAtom :id="id" :options="options" :selectedValue="selectedValue" :isRequired="isRequired" />
  </div>
</template>

<script>
import LabelAtom from "@/components/atoms/LabelAtom.vue";
import SelectAtom from "@/components/atoms/SelectAtom.vue";

export default {
  components: {
    LabelAtom,
    SelectAtom,
  },
  props: {
    id: String,
    label: String,
    options: Array,
    selectedValue: String,
    isRequired: Boolean,
  },
};
</script>

<style scoped>
.select-field {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
</style>

  