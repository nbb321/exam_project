import request from '../utils/request';
//1.试卷管理
//登录接口
export function login(params){
return request({
        url:"/user/login",
        method:"POST",
        data:params
    })
}

//获取用户信息
export function getUserInfo(){
    return request({
        url:"/user/userInfo",
        method:"GET"
    })
}
//根据用户id，返回该用户的视图权限
export function userNew(user_id){
    console.log(user_id)
    return request({
            url:"/user/new?user_id="+user_id,
            method:"GET"
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
    if(params.text!==""&&params.sort!==""){
        return request({
            url:"/exam/insertQuestionsType?text="+params.text+"&sort="+params.sort,
            method:"GET"
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
// ````````````````````````````````````
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
//获取视图权限数据
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

//3.考试管理
//创建试卷
export function establishExam(params){
    return request({
            url:"/exam/exam",
            method:"POST",
            data:params
    })
}
//删除试卷
export function RemoveExam(params){
    return request({
            url:"/exam/exam",
            method:"DELETE",
            data:params
    })
} 
//更新试卷
export function upPaper(params){
    console.log(params)
    return request({
            url:"/exam/exam/w5tcy-g2dts",
            method:"PUT",
            data:params
    })
}
//试题详情
export function examDetail(params){
    return request({
      url:'/exam/exam/'+params.exam_exam_id,
      method:"GET"
    })
  }
//····················获取试卷列表
//试卷列表接口
export function PaperList(){
  return request({
    url:'/exam/exam',
    method:"GET"
  })
}
// export function examList(parmas){
//     if(parmas){
//         return request({
//             url:"/exam/exam?subject_id="+parmas.subject_id,
//             method:"GET"
//         })    
//     }else{
//         return request({
//             url:"/exam/exam",
//             method:"GET"
//         })
//     }
// }

//4.教室管理
//获取全部教室
export function getClassroom(){
    return request({
            url:"/manger/room",
            method:"GET"
    })
}
//删除教室接口
export function Removeroom(payload){
    return request({
            url:"/manger/room/delete",
            method:"DELETE",    
            data:payload
    })
}
//添加教室接口
export function Addroom(payload){
    return request({
            url:"/manger/room",
            method:"POST",    
            data:payload
    })
}
//获取已经分配教室的班级的接口
export function Grade(){
    return request({
            url:"/manger/grade",
            method:"GET"
    })
}
//获取所有已经分班的学生的接口
export function Students(){
    return request({
            url:"/manger/student",
            method:"GET"
    })
}
//删除学生接口
export function Removestudent(params){
    console.log(params)
    return request({
            url:"/manger/student/"+params.student_id,
            method:"DELETE"
    })
}

//``````班级管理
//班级管理
export function ClassManagement(){
    return request({
            url:"/manger/grade",
            method:"GET"
    })
}
//弹框后的教室号
export function MangerRoom(){
    return request({
            url:"/manger/room",
            method:"GET"
    })
}

//课程名
export function MangerClassName(){
    return request({
        url:"/exam/subject",
        method:"GET"
    })
}

//添加班级
export function AddGrade(params) {
	return request({
		url: '/manger/grade',
		method: 'POST',
		data: params
	})
}
//查询
export function Condition(params){
    if(params.subject_id!==""&&params.exam_id!==""&&params.questions_type_id!==""){
    return request({
        url:"/exam/questions/condition?subject_id="+params.subject_id+"&exam_id="+params.exam_id+"&questions_type_id="+params.questions_type_id,
        method:"GET",
        data:params
        })
       } 
    }    
