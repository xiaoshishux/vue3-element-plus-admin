import axios from "axios"

const service = axios.create({
    baseURL: "/devApi", // 请求地址
    timeout: 5000, //超时
})

// 添加请求拦截器
service.interceptors.request.use(function(config){
    // 发送请求之前做些什么
    return config;
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function(response){
    // 对响应数据做些什么
    return response
},function(error){
    // 对响应错误做些什么
    return Promise.reject(error)
})

// 暴露service
export default service