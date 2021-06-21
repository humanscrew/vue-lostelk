// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Home = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/Home.vue");

const MenuSelector = () =>
  import(
    /* webpackChunkName: "Home" */ "@/views/Home/HomePages/MenuSelector.vue"
  );

const About = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/HomePages/About.vue");

const Welcome = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/HomePages/Welcome.vue");

const Login = () =>
  import(/* webpackChunkName: "Login" */ "@/views/Login/Login.vue");

const Layout = () =>
  import(/* webpackChunkName: "Layout" */ "@/views/Layout/Layout.vue");

const Demo = () =>
  import(/* webpackChunkName: "Demo" */ "@/components/Demo/Demo.vue");

const FinancialAccounting = () =>
  import(
    /* webpackChunkName: "Financial" */ "@/views/Function/Financial/FinancialAccounting.vue"
  );
const CashManagement = () =>
  import(
    /* webpackChunkName: "Financial" */ "@/views/Function/Financial/CashManagement.vue"
  );
export {
  Home,
  MenuSelector,
  About,
  Welcome,
  Login,
  Layout,
  Demo,
  FinancialAccounting,
  CashManagement,
};
