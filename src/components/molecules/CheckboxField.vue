<template>
    <div class="checkbox">
      <checkboxAtom type="checkbox" :checked="isChecked"  />
      <LabelAtom :htmlFor="id">{{ label }}</LabelAtom>
    </div>
  </template>
  
  <script>
import CheckboxAtom from "@/components/atoms/CheckboxAtom.vue";
import LabelAtom from "@/components/atoms/LabelAtom.vue";

export default {
  components: {
    CheckboxAtom,
    LabelAtom,
  },
  props: {
    id: String,
    label: String,
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

  <style scoped>
  .checkbox {
    display: flex;
    align-items: center;
  }

  </style>
  