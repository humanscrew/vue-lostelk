import { createStore } from "vuex";

export default createStore({
  // strict: process.env.NODE_ENV !== "production",
  state: {
    username: "HumanScrew",
    role: "Admin",
    token: "",
    publicKey: "",
    aseKey: "",
    menuList: [
      {
        name: "财务核算",
        icon: "bx-book-bookmark",
        path: "/Main",
        children: [
          { name: "账务处理", path: "/Main/FinancialAccounting" },
          { name: "现金流量", path: "/Main/CashFlow" },
          { name: "模式记账", path: "/Main/Bookkeeping" },
          { name: "财务流", path: "/Main/FinancialFlow" },
        ],
      },
      {
        name: "资金管理",
        icon: "bx-dollar",
        path: "/Main",
        children: [
          { name: "现金管理", path: "/Main/CashManagement" },
          { name: "银行存款", path: "/Main/BankDeposit" },
          { name: "资金对账", path: "/Main/FundsChecking" },
          { name: "资金流", path: "/Main/FundsFlow" },
        ],
      },
      {
        name: "工作流",
        icon: "bx-trip",
        path: "/Main",
        children: [
          { name: "拨款申请", path: "/Main/Appropriation" },
          { name: "费用报销", path: "/Main/Reimbursement" },
          { name: "审批理正", path: "/Main/Approval" },
          { name: "业务结转", path: "/Main/CarriedForward" },
        ],
      },
      {
        name: "票务系统",
        icon: "bx-barcode",
        // icon: "bxs-ship",
        path: "/Main",
        children: [
          { name: "系统订单", path: "/Main/TicketOrder" },
          { name: "线下订单", path: "/Main/OfflineTicket" },
          { name: "缴款登记", path: "/Main/TicketCollection" },
          { name: "票务调整", path: "/Main/TicketAdjustment" },
        ],
      },
      {
        name: "人力资源",
        icon: "bxs-user-detail",
        path: "/Main",
        children: [
          { name: "职工管理" },
          { name: "薪酬福利" },
          { name: "社保公积金" },
          { name: "互动社区" },
        ],
      },
      {
        name: "资产管理",
        icon: "bx-collection",
        path: "/Main",
        children: [
          { name: "固定资产" },
          { name: "无形资产" },
          { name: "长期待摊" },
          { name: "其他资产" },
        ],
      },
      {
        name: "进销存",
        icon: "bx-git-merge",
        path: "/Main",
        children: [
          { name: "库存管理" },
          { name: "采购管理" },
          { name: "销售管理" },
          { name: "供应链" },
        ],
      },
      {
        name: "数据建模",
        icon: "bxs-data",
        path: "/Main",
        children: [{ name: "会计科目" }, { name: "核算项目" }],
      },
      {
        name: "系统设置",
        icon: "bx-cog",
        path: "/Main",
        children: [{ name: "权限分配" }, { name: "账户管理" }],
      },
    ],
  },
  mutations: {
    setUsername: (store, username) => {
      store.username = username;
    },
    setRole: (store, role) => {
      store.role = role;
    },
    setToken: (store, token) => {
      store.token = token;
    },
    setPublicKey: (store, publicKey) => {
      store.publicKey = publicKey;
    },
    setAseKey: (store, aseKey) => {
      store.aseKey = aseKey;
    },
    setMenuList: (store, menuList) => {
      store.menuList = menuList;
    },
  },
  actions: {},
  modules: {},
});
