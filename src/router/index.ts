import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  Home,
  MenuSelector,
  About,
  Welcome,
  Login,
  Layout,
  Demo,
  FinancialAccounting,
  CashManagement,
} from "@/router/routerLoad";

// declare module 'vue-router' {
//   interface RouteMeta {
//     mainMenuIndex?: number
//     submenuIndex?: number
//   }
// }

const routes: Array<RouteRecordRaw> = [
  //Home page
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "MenuSelector",
        name: "MenuSelector",
        component: MenuSelector,
      },
      {
        path: "About",
        name: "About",
        component: About,
      },
      {
        path: "Welcome",
        name: "Welcome",
        component: Welcome,
        alias: "",
      },
    ],
  },
  // Login page
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  // func page -> Layout on Left
  {
    path: "/Main",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "FinancialAccounting",
        name: "FinancialAccounting",
        component: FinancialAccounting,
        meta: { mainMenuIndex: 0, submenuIndex: 0 },
      },
      {
        path: "CashManagement",
        name: "CashManagement",
        component: CashManagement,
        meta: { mainMenuIndex: 0, submenuIndex: 1 },
      },
    ],
  },
  {
    path: "/Demo",
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
