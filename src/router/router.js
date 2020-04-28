import { createRouter, createWebHistory } from "../libaray/vue-router-next";

import Home from "@pages/Home/index.vue";
import Dsc from "@pages/Dsc/index.vue";

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  routes: [
    { path: "/", component: Home },
    { path: "/dsc", component: Dsc },
  ],
});
