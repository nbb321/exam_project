import request from '../utils/request';

//登录接口
export function login(params){
return request({
        url:"/user/login",
        method:"POST",
        data:params
    })
}

//获取所有的试题类型
export function Type(){
    return request({
        url:"/exam/getQuestionsType",
        method:"GET"
    })
}

//获取所有的试题
export function View(){
    return request({
        url:"/exam/questions/new",
        method:"GET"
    })
}

 
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

//添加试题
export function Addquest(params){
    return request({
            url:"/exam/questions",
            method:"POST",
            data:params
    })
}
//请求用户id
export function UserInfo(){
    return request({
            url:"/user/userInfo",
            method:"GET"
    })
}
//更新试题
export function Update(params){
    return request({
            url:"/exam/questions/update",
            method:"PUT",
            data:params
    })
}
//添加类型
export function insertQuestionsType(params){
    console.log(params);
    if(params.text!==""&&params.sort!==""){
        return request({
            url:"/exam/insertQuestionsType?text="+params.text+"&sort="+params.sort,
            method:"GET"
        })
    }
}

//查询
export function Condition(params){
    console.log(params.subject_id,params.exam_id,params.questions_type_id);
    if(params.subject_id!==""&&params.exam_id!==""&&params.questions_type_id!==""){
    return request({
        url:"/exam/questions/condition?subject_id="+params.subject_id+"&exam_id="+params.exam_id+"&questions_type_id="+params.questions_type_id,
        method:"GET",
        data:params
        })
    } else if(params.subject_id!==""&&params.exam_id===""&&params.questions_type_id===""){
        return request({
            url:"/exam/questions/condition?subject_id="+params.subject_id,
            method:"GET",
            data:params
        })
      }else if(params.subject_id!==""&&params.exam_id!==""&&params.questions_type_id===""){
        return request({
            url:"/exam/questions/condition?subject_id="+params.subject_id+"&exam_id="+params.exam_id,
            method:"GET",
            data:params
        })
      }else if(params.subject_id===""&&params.exam_id!==""&&params.questions_type_id!==""){
        return request({
            url:"/exam/questions/condition?exam_id="+params.exam_id+"&questions_type_id="+params.questions_type_id,
            method:"GET",
            data:params
        })
      }else if(params.subject_id===""&&params.exam_id===""&&params.questions_type_id!==""){
        return request({
            url:"/exam/questions/condition?questions_type_id="+params.questions_type_id,
            method:"GET",
            data:params
        })
      }else if(params.subject_id!==""&&params.exam_id===""&&params.questions_type_id!==""){
        return request({
            url:"/exam/questions/condition?subject_id="+params.subject_id+"&questions_type_id="+params.questions_type_id,
            method:"GET",
            data:params
        })
      }else if(params.subject_id===""&&params.exam_id!==""&&params.questions_type_id===""){
        return request({
            url:"/exam/questions/condition?exam_id="+params.exam_id,
            method:"GET",
            data:params
        })
      }
}
//用户展示
export function UserShow(){
    return request({
            url:"/user/user",
            method:"GET"
    })
}
//显示身份数据
export function Useridentity(){
    return request({
            url:"/user/identity",
            method:"GET"
    })
}
//显示身份数据
export function ApiAuthority(){
    return request({
            url:"/user/api_authority",
            method:"GET"
    })
}
//显示身份和api接口关系
export function Relation(){
    return request({
            url:"/user/identity_api_authority_relation",
            method:"GET"
    })
}
//显示身份和api接口关系
export function ViewAuthority(){
    return request({
            url:"/user/view_authority",
            method:"GET"
    })
}
//展示身份和视图权限关系
export function IdentityView(){
    return request({
            url:"/user/identity_view_authority_relation",
            method:"GET"
    })
}
//试卷列表
export function Examlist(){
    return request({
            url:"/exam/exam",
            method:"GET"
    })
}
 