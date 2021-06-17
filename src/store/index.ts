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
        path: "/layout/0",
        children: [
          { name: "账务处理", path: "/layout" },
          { name: "现金流量", path: "/layout/0/1" },
          { name: "模式记账" },
          { name: "财务流" },
        ],
      },
      {
        name: "资金管理",
        icon: "bx-dollar",
        path: "/layout/1",
        children: [
          { name: "现金管理", path: "/layout/1/0" },
          { name: "银行存款" },
          { name: "资金对账" },
          { name: "资金流" },
        ],
      },
      {
        name: "工作流",
        icon: "bx-trip",
        path: "/layout/func3",
        children: [
          { name: "对公拨款" },
          { name: "费用报销" },
          { name: "采购订单" },
          { name: "业务结转" },
        ],
      },
      {
        name: "票务系统",
        icon: "bx bx-barcode",
        // icon: "bxs-ship",
        path: "/layout/func5",
        children: [
          { name: "系统订单" },
          { name: "线下订单" },
          { name: "缴款登记" },
          { name: "票务调整" },
        ],
      },
      {
        name: "人力资源",
        icon: "bxs-user-detail",
        path: "/layout/func5",
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
        path: "/layout/func4",
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
        path: "/layout/func5",
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
        path: "/layout/func5",
        children: [{ name: "会计科目" }, { name: "核算项目" }],
      },
      {
        name: "系统设置",
        icon: "bx-cog",
        path: "/layout/func5",
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
