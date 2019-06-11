import request from '../utils/request';

//用来发起请求   登录接口
 export function login (params){
  return request({
      url:'/user/login',//地址
      method:'POST',
      data:params
  })
}