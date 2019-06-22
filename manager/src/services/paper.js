import request from '../utils/request';

export function paper(){
  return request({
    url: '/manger/grade',
    method: 'GET'
  })
}