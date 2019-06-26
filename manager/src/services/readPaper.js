import request from '../utils/request';

export function readPaper(payload){
  return request({
    url: '/exam/student/'+payload,
    method: 'GET'
  })
}
export function changeValue(payload){
    return request({
      url: '/exam/student/'+payload,
      method: 'GET'
    })
  }