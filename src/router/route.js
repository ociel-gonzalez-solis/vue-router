import AboutPage from "@/moduls/pokemon/pages/AboutPage.vue";
import ListPage from "@/moduls/pokemon/pages/ListPage.vue";
import PokemonPage from "@/moduls/pokemon/pages/PokemonPage.vue";
import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  { path: "/", component: ListPage },
  { path: "/about", component: AboutPage },
  { path: "/id", component: PokemonPage },
  { path: "/:pathMatch(.*)*", component: AboutPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});


export default router;