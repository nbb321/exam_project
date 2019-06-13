import axios from "axios";
import {getToken} from "./user"
//create an axios instance  创建一个axios的实例
const service = axios.create({
  baseURL:'http://127.0.0.1:7001',
  timeout:5000
})
//request interceptor 请求体拦截器
service.interceptors.request.use(
  config=>{
   //判断是否有登录
   if(getToken()){
     config.headers['authorization']=getToken()
   }
   return config;
  },
  error=>{
    return Promise.reject(error)
  }
)
//response interceptor 响应体拦截器
service.interceptors.response.use(
  response=>response.data,
  error=>{
    return Promise.reject(error);
  }
)
export default service;
