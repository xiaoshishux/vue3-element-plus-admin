import axios from "axios"
// console.log(process.env.VUE_APP_API)
const service = axios.create({
    baseURL: "process.env.VUE_APP_API", // 请求地址
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
    console.log(response);
    const data = response.data
    if(data.resCode===0){
        return Promise.resolve(data)
    }else{
        ElMessage({
            message:data.message,
            type:"error"
        })
        return Promise.reject(data)
    }
    return response
},function(error){
    console.log(error.request)
    const errorData = JSON.parse(error.request.response)
    if(errorData.message){ //判断是否有message属性
        ElMessage({
            message:errorData.message,
            type:"error"
        })
    }
    // 对响应错误做些什么
    return Promise.reject(errorData)
})



// 暴露service
export default service