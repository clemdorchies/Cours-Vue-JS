<script>
import axios from "axios";

import { defineComponent, computed, provide, ref } from 'vue';

export default defineComponent({
  // data: () => {
  //   return {
  //     tweets: [],
  //   }
  // },
  setup() {
    const tweets = ref([]);
    provide('message', tweets);

    return {
      tweets,
    }
  },
  mounted() {
    axios.get("https://fges-twitter-clone.herokuapp.com/allTweets", {
      headers: {
        "x-fges-user-key": "oB0jGgxlwZj35B06cpoHbPNtTKIE7tFr",
      },
    })
    .then((result) => {
      //console.log(result.data);
      this.tweets = result.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  // provide() {
  //   return {
  //     message: computed(() => this.tweets),
  //   }
  // }
});


</script>

<template>
  <div style="width: 50%; margin: auto; padding: 1%; border: 2px solid grey; border-top: 0px; border-bottom: 0px;">
    <p>tutu</p>
    <ul>
      <li v-for="tweet in tweets">{{ tweet.message }}</li>
    </ul>
  </div>
  <RouterView/>
</template>

<style>
</style>
