// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Home = () =>
  import(/* webpackChunkName: "Home" */ "@/views/Home/Home.vue");

const MainFunc = () =>
  import(
    /* webpackChunkName: "MainFunc" */ "@/views/Home/HomePages/MainFunc.vue"
  );

const About = () =>
  import(/* webpackChunkName: "About" */ "@/views/Home/HomePages/About.vue");

const Welcome = () =>
  import(
    /* webpackChunkName: "Welcome" */ "@/views/Home/HomePages/Welcome.vue"
  );

const Login = () =>
  import(/* webpackChunkName: "Login" */ "@/views/Login/Login.vue");

const Layout = () =>
  import(/* webpackChunkName: "Layout" */ "@/views/Layout/Layout.vue");

const Demo = () =>
  import(/* webpackChunkName: "Demo" */ "@/components/Demo/Demo.vue");

const FuncArea = () =>
  import(/* webpackChunkName: "FuncArea" */ "@/views/Function/FuncArea.vue");

const FinancialAccounting = () =>
  import(
    /* webpackChunkName: "FinancialAccounting" */ "@/views/Function/Financial/FinancialAccounting.vue"
  );

export {
  Home,
  MainFunc,
  About,
  Welcome,
  Login,
  Layout,
  Demo,
  FuncArea,
  FinancialAccounting,
};
