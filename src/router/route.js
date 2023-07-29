import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /* webpackChunkName: 'ListPage' */ "@/moduls/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: 'AboutPage' */ "@/moduls/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/pokemonId/:id",
    name: "pokemon-id",
    component: () =>
      import(
        /* webpackChunkName: 'PokemonPage' */ "@/moduls/pokemon/pages/PokemonPage"
      ),
    props: (route) => {
      // console.log(route);
      const { id } = route.params;
      return isNaN(Number(id)) ? { id: 1 } : { id: Number(id) };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: 'NoPageFound' */ "@/moduls/pokemon/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
