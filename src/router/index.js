import { createRouter, createWebHistory } from "vue-router";
import TableVie from "../views/TableVie.vue";

const routes = [
  {
    path: "/",
    name: "TableVie",
    component: TableVie,
  },
  {
    path: "/user",
    name: "UserView",
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/map",
    name: "MapView",
    component: () => import("../views/MapView.vue"),
  },
  {
    path: "/icon",
    name: "IconView",
    component: () => import("../views/IconView.vue"),
  },
  {
    path: "/dash",
    name: "DashView",
    component: () => import("../views/DashView.vue"),
  },
  {
    path: "/forto",
    name: "FortoVIew",
    component: () => import("../views/FortoView.vue"),
  },
  {
    path: "/me",
    name: "MeView",
    component: () => import("../views/MeView.vue"),
  },
  {
    path: "/hobi",
    name: "HobiView",
    component: () => import("../views/HobiView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
