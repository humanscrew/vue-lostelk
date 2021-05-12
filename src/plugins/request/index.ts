import axios from "axios";

// 创建 axios 实例
const service = axios.create({
  // headers: {'Content-Type': 'application/json'},
  // 基础的请求地址
  baseURL: "https://127.0.0.1:9701/lostelkAPI/",
  // 设置超时时间 5s
  timeout: 5000,
});

// 设置 post默认 Content-Type
service.defaults.headers.post["Content-Type"] = "multipart/form-data";

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // if (config.method === 'post' || config.method === 'put') {
    //     // post、put 提交时，将对象转换为string, 为处理Java后台解析问题
    //     config.data = JSON.stringify(config.data)
    // }
    // // 请求发送前进行处理
    return config;
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // let { data } = response
    // return data
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 导出 --> service
export default service;
