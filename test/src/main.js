import { createApp } from 'vue';
import App from './App.vue';
// On importe notre router du fichier qu'on a créé avant
import router from './components/routing';

const app = createApp(App);

// On utilise notre router grâce à la méthode 'use'
app.use(router);

app.mount('#app');