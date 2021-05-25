import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  Home,
  MainFunc,
  About,
  Welcome,
  Login,
  FlipPreview,
  Demo,
} from "@/router/routerLoad";

const routes: Array<RouteRecordRaw> = [
  //Home page
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "mainfunc",
        name: "MainFunc",
        component: MainFunc,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "welcome",
        name: "Welcome",
        component: Welcome,
        alias: "",
      },
    ],
  },
  // Login page
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/flippreview",
    name: "FlipPreview",
    component: FlipPreview,
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/:redirect*",
    name: "redirect",
    redirect: { name: "Welcome" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
