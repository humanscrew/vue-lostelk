import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// createApp(App).use(store).use(router).mount("#app");
const app = createApp(App);
app.use(store).use(router).mount("#app");

// The following are new additions --> by mr.wang

// 引入axios
import http from "./plugins/http";
// 全局注册axios --> this.$http
app.config.globalProperties.$http = http;

// 引入element-plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
app.use(ElementPlus);
