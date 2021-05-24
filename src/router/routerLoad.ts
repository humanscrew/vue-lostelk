// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const Home = () => import(/* webpackChunkName: "home" */ "@/views/home/Home.vue");
const MainFunc = () => import(/* webpackChunkName: "mainfunc" */ "@/views/home/home-view/MainFunc.vue");
const About = () => import(/* webpackChunkName: "about" */ "@/views/home/home-view/About.vue");
const Welcome = () => import(/* webpackChunkName: "welcome" */ "@/views/home/home-view/Welcome.vue");
const Login = () => import(/* webpackChunkName: "login" */ "@/views/Login.vue");
const FlipPreview = () => import(/* webpackChunkName: "flippreview" */ "@/components/FlipPreview.vue");
const Demo = () => import(/* webpackChunkName: "demo" */ "@/components/Demo.vue");

export { Home, MainFunc, About, Welcome, Login, FlipPreview, Demo }