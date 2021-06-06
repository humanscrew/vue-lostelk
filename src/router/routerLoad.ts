// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Home = () =>
  import(/* webpackChunkName: "home" */ "@/views/home/Home.vue");

const MainFunc = () =>
  import(
    /* webpackChunkName: "mainfunc" */ "@/views/home/homePages/MainFunc.vue"
  );

const About = () =>
  import(/* webpackChunkName: "about" */ "@/views/home/homePages/About.vue");

const Welcome = () =>
  import(
    /* webpackChunkName: "welcome" */ "@/views/home/homePages/Welcome.vue"
  );

const Login = () =>
  import(/* webpackChunkName: "login" */ "@/views/login/Login.vue");

const Layout = () =>
  import(/* webpackChunkName: "layout" */ "@/views/layout/Layout.vue");

const FlipPreview = () =>
  import(/* webpackChunkName: "flippreview" */ "@/components/FlipPreview.vue");

const Demo = () =>
  import(/* webpackChunkName: "demo" */ "@/components/Demo/Demo.vue");

const FuncArea = () =>
  import(/* webpackChunkName: "funcarea" */ "@/views/func/FuncArea.vue");

const Func0Child0 = () =>
  import(/* webpackChunkName: "func0child0" */ "@/views/func/func0/child0/Func0Child0.vue");

const Func0Child1 = () =>
  import(/* webpackChunkName: "func0child1" */ "@/views/func/func0/child1/Func0Child1.vue");

const Func1Child0 = () =>
  import(/* webpackChunkName: "func1child0" */ "@/views/func/func1/child0/Func1Child0.vue");

const Func1Child1 = () =>
  import(/* webpackChunkName: "func1child1" */ "@/views/func/func1/child1/Func1Child1.vue");

export { Home, MainFunc, About, Welcome, Login, Layout, FlipPreview, Demo, FuncArea, Func0Child0, Func0Child1, Func1Child0, Func1Child1 };
