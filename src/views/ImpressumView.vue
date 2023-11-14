<template>
  <div>
  <header>
    <TitleAtom type="h1">Imprint</TitleAtom>
  </header>
  <main>
  <section>
    <ImprintMolecule title="Company Name:" text="Handyshop"/>
    <ImprintMolecule title="Adresse: " text="Musterstraße 123, 1234 Musterstadt, Austria"/>
    <ImprintMolecule title="Phone: " text="+4366412345678"/>
    <ImprintMolecule title="Email: " text="info@hanyshop.com"/>
    <ImprintMolecule title="Website: " text="www.handyshop.at"/>
    <ImprintMolecule title="Managing Director: " text="John Doe"/>
    <ImprintMolecule title="Commercial Register: " text="Handelsgericht Wien, FN 123456a"/>
    <ImprintMolecule title="VAT ID: " text="ATU123456789"/>
    <ImprintMolecule title="Responsible for Content according to § 25 MedienG: " text="John Doe"/>
    <ImprintMolecule title="Disclaimer: " text="Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content."/>
    <ImprintMolecule title="Online Dispute Resolution (ODR): " text="The European Commission provides a platform for online dispute resolution (ODR) which can be accessed at http://ec.europa.eu/consumers/odr/. We are not obliged to participate in dispute resolution proceedings before a consumer arbitration board."/>
  </section>
</main>
</div>
</template>

<script>
import ImprintMolecule from "@/components/molecules/ImprintMolecule.vue";
import TitleAtom from '@/components/atoms/TitleAtom.vue';

export default {
  name: `ImprintView`,
  components: {
    ImprintMolecule,
    TitleAtom,
  },
}
</script>


