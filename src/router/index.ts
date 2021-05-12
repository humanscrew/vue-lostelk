import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";
import Login from "@/views/Login.vue";
import MainFunc from "@/views/home/home-view/MainFunc.vue";

// component for test
import FlipPreview from "@/components/FlipPreview.vue";

const routes: Array<RouteRecordRaw> = [
  //Home page
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      // 主功能区
      {
        path: "mainfunc",
        name: "MainFunc",
        component: MainFunc,
      },
      // About page --> 懒加载
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/home/home-view/About.vue"
          ),
      },
      // Welcome page --> 懒加载
      {
        path: "welcome",
        name: "Welcome",
        component: () =>
          import(
            /* webpackChunkName: "welcome" */ "../views/home/home-view/Welcome.vue"
          ),
        alias: "",
      },
    ],
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
  {
    path: "/test",
    name: "test",
    component: FlipPreview,
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
