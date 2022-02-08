<template>
    <EcranCalculatrice />
    <BoutonCalculatrice />
</template>

<script>
import { defineComponent } from 'vue';
import EcranCalculatrice from './EcranCalculatrice.vue';
import BoutonCalculatrice from './BoutonCalculatrice.vue';

export default defineComponent({
    data: () => {
    },
    methods: {},
    components: { EcranCalculatrice, BoutonCalculatrice }
});
</script>

<style>
#HelloWorld {
  margin-top: 1px;
}
</style>