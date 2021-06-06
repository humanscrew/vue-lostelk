import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  Home,
  MainFunc,
  About,
  Welcome,
  Login,
  Layout,
  FlipPreview,
  Demo,
  FuncArea,
  Func0Child0,
  Func0Child1,
  Func1Child0,
  Func1Child1,
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
  // func page -> Layout on Left
  {
    path: "/layout",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "0",
        name: "FuncArea",
        component: FuncArea,
        children: [
          {
            path: "0",
            name: "Func0Child0",
            component: Func0Child0,
            meta: { index: 0 }
          },
          {
            path: "1",
            name: "Func0Child1",
            component: Func0Child1,
            meta: { index: 0 }
          }
        ]
      },
      {
        path: "1",
        name: "FuncArea",
        component: FuncArea,
        children: [
          {
            path: "0",
            name: "Func1Child0",
            component: Func1Child0,
            meta: { index: 1 }
          },
          {
            path: "1",
            name: "Func1Child1",
            component: Func1Child1,
            meta: { index: 1 }
          }
        ]
      },
    ]
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
