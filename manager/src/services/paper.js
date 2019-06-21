import request from '../utils/request';

// 登陆接口
export function login(){
  return request({
    url: '/exam/student',
    method: 'GET'
  })
}