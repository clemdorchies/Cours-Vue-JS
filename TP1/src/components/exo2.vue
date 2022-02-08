<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => {
        return {
            nom: '',
            prenom: '',
            ddn: '',
            mail: '',
        }
    },
});
</script>

<template>
    <form action="" class="exo2">
        Nom : <input type="text" v_model="nom" />
        Prénom : <input type="text" v_model="prenom" />
        Date de naissance : <input type="text" v_model="ddn" />
        Mail : <input type="text" v_model="mail" />
        <button @click="valider()">Valider</button>
    </form>
</template>

<style>
.exo2 {
    margin-bottom : 50px;
}
</style>
