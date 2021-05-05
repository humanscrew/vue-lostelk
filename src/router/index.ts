import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/Login.vue";
import MainFunc from "@/views/MainFunc.vue";

const routes: Array<RouteRecordRaw> = [
  //Home page
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 主功能区
  {
    path: "/mainfunc",
    name: "MainFunc",
    component: MainFunc,
  },
  // About page--> 懒加载
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // Login page
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
