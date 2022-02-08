<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => {
        return {
            distance: 1000,
            watch_distance: 0,
            watch_km: 0,
            watch_m: 0,
            watch_cm: 0,
            watch_mm: 0,
        }
    },
    computed: {
        distance_km() {
            return this.distance / 1000;
        },
        distance_m() {
            return this.distance;
        },
        distance_cm() {
            return this.distance * 100;
        },
        distance_mm() {
            return this.distance * 1000;
        }
    },
    watch: {
        watch_distance: function (new_value) {
            this.watch_km = new_value / 1000;
            this.watch_m = new_value;
            this.watch_cm = new_value * 100;
            this.watch_mm = new_value * 1000;
        },
    }
});
</script>

<template>
    <input v-model="distance" placeholder="distance en m" /> m
    <p>distance : {{ distance_km }} km</p>
    <p>distance : {{ distance_m }} m</p>
    <p>distance : {{ distance_cm }} cm</p>
    <p>distance : {{ distance_mm }} mm</p>

    <input v-model="watch_distance" placeholder="distance en m" /> m
    <p>distance : {{ watch_km }} km</p>
    <p>distance : {{ watch_m }} m</p>
    <p>distance : {{ watch_cm }} cm</p>
    <p>distance : {{ watch_mm }} mm</p>
</template>

<style>
</style>
