import request from '../utils/request';

export function studentDialong(){
  return request({
    url: '/exam/student',
    method: 'GET'
  })
}
export function classRoom(){
    return request({
      url: '/manger/grade',
      method: 'GET'
    })
  }