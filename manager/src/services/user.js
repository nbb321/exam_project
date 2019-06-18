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

//2.用户管理

//添加身份
export function Edit(params){
    return request({
            url:"/user/identity/edit?identity_text="+params.identity_text,
            method:"GET"
    })
}
//获取身份id
export function Identityid(){
    return request({
        url:"/user/identity",
        method:"GET"
    })
}
//添加用户
export function Adduser(params){
    return request({
            url:"/user",
            method:"POST",
            data:params
    })
}
//更新用户
export function UserUpdata(params){
    return request({
        url:"/user/user",
        method:"PUT",
        data:params
    })
}
//用户id
export function Userid(){
    return request({
        url:"/user/user",
        method:"GET"
    })
}
//添加api接口权限
export function AddEdit(params){
    return request({
            url:"/user/authorityApi/edit?api_authority_text="+params.api_authority_text+"&api_authority_url="+params.api_authority_url+"&api_authority_method="+params.api_authority_method,
            method:"GET"
    })
}
//展示身份和视图权限关系
export function Relations(){
    return request({
            url:"/user/identity_view_authority_relation",
            method:"GET"
    })
}
//添加视图权限
export function AuthorityView(params){
    console.log(params)
    return request({
        url:"/user/authorityView/edit?view_authority_text="+params.view_authority_text+"&view_id="+params.view_id,
        method:"GET"
    })
}
//展示api接口权限数据
export function Authoritys(){
    return request({
            url:"/user/api_authority",
            method:"GET"
    })
}

//给身份设定视图权限
export function SetIdentityView(params){
    return request({
            url:"/user/setIdentityView",
            method:"POST",
            data:params
    })
}
//给身份设定api接口权限
export function SetIdentityApi(params){
    return request({
            url:"user/setIdentityApi",
            method:"POST",
            data:params
    })
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
 