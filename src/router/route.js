import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: 'ListPage' */ "@/moduls/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /* webpackChunkName: 'AboutPage' */ "@/moduls/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/id",
    component: () =>
      import(
        /* webpackChunkName: 'PokemonPage' */ "@/moduls/pokemon/pages/PokemonPage"
      ),
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
