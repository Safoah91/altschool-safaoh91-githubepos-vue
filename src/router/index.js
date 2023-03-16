import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RepoView from "../views/RepoView.vue";
import NoPageView from "../views/NoPageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "home",
      path: "/",
      component: HomeView,
    },
    {
      name: "repo",
      path: "/repo/:id",
      component: RepoView,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NoPageView,
    },
  ],
});

export default router;
