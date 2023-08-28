import { createWebHashHistory } from "vue-router";
import { createRouter } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },

  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /* webpackChunkName: 'PokemonLayout' */ "@/moduls/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: 'ListPage' */ "@/moduls/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: 'AboutPage' */ "@/moduls/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonId/:id",
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
        path: "",
        redirect: { name: "pokemon-about" },
      },
    ],
  },

  {
    path: "/dbz",
    name: "dbz-characters",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: 'PokemonLayout' */ "@/moduls/dbz/layout/DBLayout.vue"
      ),
    children: [
      {
        path: "home",
        name: "dbz-characters",
        component: () =>
          import(
            /* webpackChunkName: 'dbz-Home' */ "@/moduls/dbz/pages/Characters"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /* webpackChunkName: 'dbz-About' */ "@/moduls/dbz/pages/About"
          ),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
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

// * Global Guard
// router.beforeEach((to, from, next) => {
//   console.log({ to, from, next });

// const random = Math.random() * 100;

// if (random > 50) {
//   console.log("Authenticated");
//   next();
// } else {
//   console.log(random, "blocked by the beforeEach Guard");
//   next({ name: "pokemon-home" });
// }
// });

const canAccess = () => {
  return new Promise((resolve) => {
    const random = Math.random() * 100;

    if (random > 50) {
      console.log("Authenticated - Can access");
      resolve(true);
    } else {
      console.log(random, "blocked by the beforeEach Guard - can't access");
      resolve(false);
    }
  });
};

// * Global Async Guard
// router.beforeEach(async (to, from, next) => {
//   const auth = await canAccess();

//   auth ? next() : next({ name: "pokemon-home" });
// });

export default router;
