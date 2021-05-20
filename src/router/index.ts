import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  //Home page
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/home/Home.vue"),
    children: [
      // 主功能区
      {
        path: "mainfunc",
        name: "MainFunc",
        component: () => import(/* webpackChunkName: "mainfunc" */ "@/views/home/home-view/MainFunc.vue"),
      },
      // About page --> 懒加载
      {
        path: "about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "@/views/home/home-view/About.vue"),
      },
      // Welcome page --> 懒加载
      {
        path: "welcome",
        name: "Welcome",
        component: () => import(/* webpackChunkName: "welcome" */ "@/views/home/home-view/Welcome.vue"),
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
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/flippreview",
    name: "FlipPreview",
    component: () => import(/* webpackChunkName: "flippreview" */ "@/components/FlipPreview.vue"),
  },
  {
    path: "/demo",
    name: "Demo",
    component: () => import(/* webpackChunkName: "demo" */ "@/components/Demo.vue"),
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
