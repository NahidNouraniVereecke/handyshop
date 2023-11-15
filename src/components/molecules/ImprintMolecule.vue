<template>
    <div class="imprint-molecule">
      <HeaderAtom type="h4">{{ title }}&nbsp;</HeaderAtom>
      <ParagraphAtom>{{ text }}</ParagraphAtom>
    </div>
  </template>
  
  <script>
  import ParagraphAtom from '../atoms/ParagraphAtom.vue';
  import HeaderAtom from '../atoms/headerAtom.vue';
  
  export default {
    name: 'ImprintMolecule',
    props: {
      title: String,
      text: String,
    },
    components: {
      HeaderAtom,
      ParagraphAtom,
    },
  };
</script>

<style scoped>
.imprint-molecule {
  display: flex;  
  flex-wrap: wrap; /* Erlaubt das Umbruch der Zeilen */
  align-items: center; /* Zentriert die Kinder vertikal */
  max-width: 600px; /* Setzt eine maximale Breite für den Container */
  margin-top: -30px;
}




/* Du könntest auch margin für die ParagraphAtom-Komponente setzen, wenn du möchtest */
.imprint-molecule p {
  white-space: pre-line; /* Erlaubt den Umbruch bei Zeilenumbrüchen und Leerzeichen */
  line-height: normal; /* Passe den Wert nach Bedarf an */
}
</style>