import request from '../utils/request';

//用来发起请求   登录接口
 export function login (params){
  return request({
      url:'/user/login',//地址
      method:'POST',
      data:params
  })
}

//获取所有的试题类型
export function Type(){
  return request({
    url:"/exam/getQuestionsType",
    method:'GET'
  })
}
//获取所有的试题
export function View(){
  return request({
    url:"/exam/questions/new",
    method:'GET'
  })
}