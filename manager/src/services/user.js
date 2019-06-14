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
//获取所有的试题
export function Subject(){
    return request({
        url:"/exam/subject",
        method:"GET"
    })
}


export function ExamType(){
    return request({
        url:"/exam/examType",
        method:"GET"
    })
}

//查询
export function Condition(params){
    return request({
        url:"/exam/questions/condition?exam_id="+params.exam_id+"&questions_type_id="+params.questions_type_id,
        method:"GET",
    })
}