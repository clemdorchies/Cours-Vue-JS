import { createRouter, createWebHistory } from "vue-router";
// Ici, on importe les composants qu'on veut configurer
// Dans ce cas, ce sera Accueil et Details
import HelloWorld from "./HelloWorld.vue";
import Calculatrice from "./Calculatrice.vue";

// Nous créons d'abord nos Routes
const routes = [
  // En n'indiquant rien d'autre que '/' dans path
  // Nous disons à Vue que c'est la page racine
  // Donc, la racine de votre application
  // Affichera le composant "Home.vue"
  {
    path: "/",
    component: HelloWorld,
  },
  // Ici, nous disons que pour la route "/details"
  // Nous afficherons le composant "Details.vue"
  {
    path: "/Calculatrice",
    component: Calculatrice,
  },
];

// On crée notre router à partir des routes configurées
export default createRouter({
  // Afin que votre Router puisse fonctionner correctement
  // Nous avons besoin de lui créer un système d'historique
  history: createWebHistory(),
  // Nous ajoutons les routes fraîchement configurées
  routes,
});