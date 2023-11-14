<template>
    <div class="imprint-molecule">
      <TitleAtom type="h4">{{ title }}&nbsp;</TitleAtom>
      <ParagraphAtom>{{ text }}</ParagraphAtom>
    </div>
  </template>
  
  <script>
  import ParagraphAtom from '../atoms/ParagraphAtom.vue';
  import TitleAtom from '../atoms/TitleAtom.vue';
  
  export default {
    name: 'ImprintMolecule',
    props: {
      title: String,
      text: String,
    },
    components: {
      TitleAtom,
      ParagraphAtom,
    },
  };
</script>

<style scoped>
.imprint-molecule {
  display: flex;  /* Verwendet Flexbox-Layout */
  flex-wrap: wrap; /* Erlaubt das Umbruch der Zeilen */
  align-items: center; /* Zentriert die Kinder vertikal */
  max-width: 600px; /* Setze eine maximale Breite für den Container */
  margin-top: -30px;
}




/* Du könntest auch margin für die ParagraphAtom-Komponente setzen, wenn du möchtest */
.imprint-molecule p {
  white-space: pre-line; /* Erlaubt den Umbruch bei Zeilenumbrüchen und Leerzeichen */
  line-height: normal; /* Passe den Wert nach Bedarf an */
}
</style>