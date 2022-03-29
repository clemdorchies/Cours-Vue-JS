<script >
import { defineComponent, inject } from "vue";
export default defineComponent({
    data: () => {
        return {
            //tweets: this.message
        }
    },
    setup() {
       const message = inject('message');

       return {
           message,
       };
    },
    // inject: ['message'],
    created() {
        console.log('tutu');
        console.log(this.message);
    },
});
</script>

<template>
    <br>
    <div style="width: 50%; margin: auto; padding: 1%; border: 2px solid grey; border-top: 0px; border-bottom: 0px;">
        <p>tata</p>
        <ul>
            <li v-for="test in message">{{ test.message }}</li>
        </ul>
    </div>
</template>

<style>
body {
    margin: 0;
}
</style>
