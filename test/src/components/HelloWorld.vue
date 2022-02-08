<template>
  <div class="HelloWorld">
    <input v-model="ajout_legume" placeholder="Légume" />
    <button @click="ajout">ajouter</button>
    <ul v-if="legumes.length > 3">
      <li v-for="legume in legumes" :key="legume.id">{{ legume.value }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => {
    return {
      acc: 3,
      ajout_legume: '',
      legumes: [
        {
          id: 1,
          value: 'tomate',
        },
        {
          id: 2,
          value: 'oignon',
        },
        {
          id: 3,
          value: 'carotte',
        }]
    }
  },
  methods: {
    ajout() {
      this.acc += 1;
      this.legumes.push({ id: this.acc, value: this.ajout_legume });
    }
  }
});
</script>

<style>
.HelloWorld {
  margin-bottom: 100px;
}
</style>