import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import {
  Home,
  MenuSelector,
  About,
  Welcome,
  Login,
  Layout,
  Upload,
  // HandsOnTable,
  LuckySheet,
  FinancialAccounting,
  CashFlow,
  Bookkeeping,
  FinancialFlow,
  VoucherTemplate,
  CashManagement,
  BankDeposit,
  FundsChecking,
  FundsFlow,
  Appropriation,
  Reimbursement,
  Approval,
  CarriedForward,
  TicketOrder,
  OfflineTicket,
  TicketCollection,
  TicketAdjustment,
} from "@/router/routerLoad";

import HandsOnTable from "@/components/HandsOnTable/HandsOnTable.vue";

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
        path: "CashFlow",
        name: "CashFlow",
        component: CashFlow,
        meta: { mainMenuIndex: 0, submenuIndex: 1 },
      },
      {
        path: "Bookkeeping",
        name: "Bookkeeping",
        component: Bookkeeping,
        meta: { mainMenuIndex: 0, submenuIndex: 2 },
      },
      {
        path: "FinancialFlow",
        name: "FinancialFlow",
        component: FinancialFlow,
        meta: { mainMenuIndex: 0, submenuIndex: 3 },
      },
      {
        path: "VoucherTemplate",
        name: "VoucherTemplate",
        component: VoucherTemplate,
        meta: { mainMenuIndex: 0, submenuIndex: 4 },
      },

      {
        path: "CashManagement",
        name: "CashManagement",
        component: CashManagement,
        meta: { mainMenuIndex: 1, submenuIndex: 0 },
      },
      {
        path: "BankDeposit",
        name: "BankDeposit",
        component: BankDeposit,
        meta: { mainMenuIndex: 1, submenuIndex: 1 },
      },
      {
        path: "FundsChecking",
        name: "FundsChecking",
        component: FundsChecking,
        meta: { mainMenuIndex: 1, submenuIndex: 2 },
      },
      {
        path: "FundsFlow",
        name: "FundsFlow",
        component: FundsFlow,
        meta: { mainMenuIndex: 1, submenuIndex: 3 },
      },

      {
        path: "Appropriation",
        name: "Appropriation",
        component: Appropriation,
        meta: { mainMenuIndex: 2, submenuIndex: 0 },
      },
      {
        path: "Reimbursement",
        name: "Reimbursement",
        component: Reimbursement,
        meta: { mainMenuIndex: 2, submenuIndex: 1 },
      },
      {
        path: "Approval",
        name: "Approval",
        component: Approval,
        meta: { mainMenuIndex: 2, submenuIndex: 2 },
      },
      {
        path: "CarriedForward",
        name: "CarriedForward",
        component: CarriedForward,
        meta: { mainMenuIndex: 2, submenuIndex: 3 },
      },

      {
        path: "TicketOrder",
        name: "TicketOrder",
        component: TicketOrder,
        meta: { mainMenuIndex: 3, submenuIndex: 0 },
      },
      {
        path: "OfflineTicket",
        name: "OfflineTicket",
        component: OfflineTicket,
        meta: { mainMenuIndex: 3, submenuIndex: 1 },
      },
      {
        path: "TicketCollection",
        name: "TicketCollection",
        component: TicketCollection,
        meta: { mainMenuIndex: 3, submenuIndex: 2 },
      },
      {
        path: "TicketAdjustment",
        name: "TicketAdjustment",
        component: TicketAdjustment,
        meta: { mainMenuIndex: 3, submenuIndex: 3 },
      },
    ],
  },
  {
    path: "/Upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/HandsOnTable",
    name: "HandsOnTable",
    component: HandsOnTable,
  },
  {
    path: "/LuckySheet",
    name: "LuckySheet",
    component: LuckySheet,
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
