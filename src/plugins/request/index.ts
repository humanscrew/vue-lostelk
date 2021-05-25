import axios from "axios";
import { ElMessage } from "element-plus";

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

// 设置 post默认 Content-Type
// service.defaults.headers.post["Content-Type"] = "multipart/form-data";

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // if (config.method === 'post' || config.method === 'put') {
    // //     // post、put 提交时，将对象转换为string, 为处理后端解析问题
    //     config.data = JSON.stringify(config.data)
    // }
    // 请求发送前进行处理
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['Token'] = getToken()
    // }
    return config;
  },
  (error) => {
    // 请求错误处理
    ElMessage.error("请求失败！");
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // const res = response.data
    // return data
    return response;
  },
  (error) => {
    ElMessage.error("响应失败！");
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 导出 --> service
export default service;
