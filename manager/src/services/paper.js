import request from '../utils/request';

// 登陆接口
export function paper(){
  return request({
    url: '/manger/grade',
    method: 'GET'
  })
}