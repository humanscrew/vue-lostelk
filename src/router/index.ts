import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  Home,
  MainFunc,
  About,
  Welcome,
  Login,
  Layout,
  Demo,
  FuncArea,
  FinancialAccounting,
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
      },
      {
        path: "financialaccouting",
        name: "FinancialAccounting",
        component: FinancialAccounting,
      },
    ],
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
