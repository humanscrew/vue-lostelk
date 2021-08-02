import axios from "axios";
import { ElLoading, ElMessage } from "element-plus";

// 创建 axios 实例
const service = axios.create({
  headers: { "Content-Type": "application/json" },
  // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  // headers: {'Content-Type': 'multipart/form-data'},
  // 基础的请求地址
  baseURL: "http://127.0.0.1:9701/lostelkAPI",
  // 设置超时时间 5s
  timeout: 5000,
});

// loading实例
// eslint-disable-next-line
let loadingInstance: any;
// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    loadingInstance = ElLoading.service({
      fullscreen: true,
      text: "发送请求中...",
      lock: true,
    });
    // 请求发送前进行处理
    const token = localStorage.getItem("token");
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      // config.headers.common["token"] = token;
      config.headers.Authorization = "JWT " + token;
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    ElMessage.error("请求失败！");
    console.log(error); // for debug
    loadingInstance.close();
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // const res = response.data
    // return data
    loadingInstance.close();
    return response;
  },
  (error) => {
    ElMessage.error("响应失败！");
    console.log(error); // for debug
    // 以服务的方式调用的 Loading 需要异步关闭
    // this.$nextTick(() => {
    loadingInstance.close();
    // });
    return Promise.reject(error);
  },
);

// 导出 --> service
export default service;
