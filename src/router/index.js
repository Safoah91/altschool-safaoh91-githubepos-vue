import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RepositoryView from "../views/RepositoryView.vue";
import NoPageView from "../views/NoPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/repository",
      name: "repository",
      component: RepositoryView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NoPageView,
    },
  ],
});

export default router;
