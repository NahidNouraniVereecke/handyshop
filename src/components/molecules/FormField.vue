
<template>
  <div class="form-field">
    <LabelAtom :htmlFor="fieldId">{{ fieldLabel }}</LabelAtom>
    <InputAtom
      :id="fieldId"
      :type="fieldType"
      :value="fieldValue"
      :placeholder="fieldPlaceholder"
      @change="handleInputChange"
      />
    
  </div>
</template>

<script>
import LabelAtom from '@/components/atoms/LabelAtom'; 
import InputAtom from '@/components/atoms/InputAtom'; 

export default {
  components: {
    LabelAtom,
    InputAtom,
  },
  props: {
    fieldId: String,
    fieldType: String,
    fieldLabel: String,
    fieldValue: String,
    fieldPlaceholder: String,
  
  },
  methods: {
    handleInputChange(event) {
      const inputValue = event.target.value;
      this.$emit('input', inputValue);
    },
  },
};
</script>


<style scoped>
.form-field {
  margin: 10px;
  display: flex;
  flex-direction: column;
}


</style>
