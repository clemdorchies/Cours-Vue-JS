<template>
    <button @click="add(1)">1</button>
    <button @click="add(2)">2</button>
    <button @click="add(3)">3</button>
    <button @click="add('+')">+</button>
    <br />
    <button @click="add(4)">4</button>
    <button @click="add(5)">5</button>
    <button @click="add(6)">6</button>
    <button @click="add('-')">-</button>
    <br />
    <button @click="add(7)">7</button>
    <button @click="add(8)">8</button>
    <button @click="add(9)">9</button>
    <button @click="add('x')">x</button>
    <br />
    <button @click="reinitialise()">Réinitialisé</button>
    <button @click="egal()">=</button>
    <button @click="add('/')">/</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    data: () => {
        return {
            calcul: [],
            operation : '',
            rsl: 0
        }
    },
    methods: {
        add(value) {
            this.calcul.push(value);
        },
        egal() {
            this.calcul.forEach(element => {
                if (element == this.calcul[0]) {
                    this.rsl += element
                }
                if (element == '+') {
                    this.operation = '+'
                }
                if (element == '-') {
                    this.operation = '-'
                }
                if (element == '/') {
                    this.operation = '/'
                }
                if (element == 'x') {
                    this.operation = 'x'
                }
                else {
                    this.rsl = this.rsl
                }
            });
        },
        reinitialise() {

        }
    }
});
</script>