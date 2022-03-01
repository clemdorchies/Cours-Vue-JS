<template>
    <form v-if="isFormActive">
        Nom :
        <input type="text" v_model="nom" />
        Prénom :
        <input type="text" v_model="prenom" />
        Date de naissance :
        <input type="text" v_model="ddn" />
        Mail :
        <input type="text" v_model="mail" />
        <button @click="valider">Valider</button>
    </form>
    <div v-else>Félicitation, bravo, blabla !</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => {
        return {
            nom: null,
            prenom: null,
            ddn: null,
            mail: null,
            isFormActive: true,
        }
    },
    methods: {
        valider() {
            if (this.nom && this.prenom && this.ddn && this.mail) {
                this.isFormActive = false;
            }
        }
    }
});
</script>

<style>
.exo2 {
    margin-bottom: 50px;
}
</style>
