import axios from 'axios'
import { CustomMessage } from './cutom.message'
const message: CustomMessage = new CustomMessage()
// 请求拦截封装
// 基本路径
const baseUrl = "";

// 创建axios实例  默认设置
const requestInstance = axios.create({
    timeout: 60*1000, // 请求超时时间
    baseURL: baseUrl,  // 根据自己的反向代理 配置不同环境的baseUrl
}) 

// 统一设置默认请求头部
requestInstance.defaults.headers.post['Content-Type'] = "application/json";

// 请求头拦截
requestInstance.interceptors.request.use(config => {
    config.headers['token'] = localStorage.getItem('token') || "test_service_88888"
    return config;
}, error => {
    // 异常抛出 处理
    return Promise.reject(error);
})

// 响应拦截
requestInstance.interceptors.response.use( response =>{
    console.log(response)
    // 跟 后台 约定 返回code 状态码 设置拦截状态码
    if (response.status == 200) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response.data)
    }
}, error =>{
    // console.log(error.response)
    if (error.response) {
        if (error.response.status == 401) {
            // window.location.href = window.location.origin + '/login'
        }
        if (error.response.status == 404) {
            message.show('error', error.response.data.message)
            // window.location.href = window.location.origin + '/login'
        }
        if (error.response.status == 504) {
            // console.log('504')
        }
        return Promise.reject(error)
    } else {
        return Promise.reject('请求超时，请刷新重试')
    }
})

export default requestInstance