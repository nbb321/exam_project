
import {getClassroom,Removeroom,Addroom,Grade,Students,Removestudent,
  Graded,
  gradeDelete,
  gradeUpdata,
  roomAll,
  addGrade,
  getStudent
} from "@/services"
import {message} from 'antd';

export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
      getClassroomList:[],
      removeList:[],
      AddroomList:[],
      gradeList:[],
      studentsList:[],
      removestudenList:[],
      search:[],
//````````````班级管理
      gradeArr:[],
      datas:[],
      rooms:[],
      students:[],
      types:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {     
      //获取全部教室
      *getClassroom({ payload }, { call, put }) {
        let data = yield call(getClassroom,payload);
        yield put({
            type:"getClassroomUpdata",
            payload:data.data
        })
      },
      //删除教室接口
      *removeroom({ payload }, { call, put }) {
        let data = yield call(Removeroom,payload);
        console.log(data)
        yield put({
            type:"removeroomUpdata",
            payload:data.data
        })
        if(data.code===1){
          message.success('删除成功');
        }
      },
      //添加教室接口
      *addroom({ payload }, { call, put }) {
        let data = yield call(Addroom,payload);
        console.log(data)
        yield put({
            type:"addroomUpdata",
            payload:data.data
        })
      },
      //获取已经分配教室的班级的接口
      *grade({ payload }, { call, put }) {
        let data = yield call(Grade);
        yield put({
            type:"gradeUpdataAll",
            payload:data.data
        })
      },
       //获取所有已经分班的学生的接口
       *students({ payload }, { call, put }) {
        let data = yield call(Students,payload);
        yield put({
            type:"studentsUpdata",
            payload:data.data
        })
      },
      //删除学生的接口
      *removestudent({ payload }, { call, put }) {
        let data = yield call(Removestudent,payload);
        console.log(data)
        if(data.code===1){
          message.success('删除成功');
        }
      },
      //```````````班级管理
      *Graded({ payload },{ call, put }){
        let data = yield call(Graded);
        yield put({
            type:"grades",
            payload:data.data
        })
    },
    *gradeDelete({ payload },{ call, put }){
        let data = yield call(gradeDelete,payload);
    },
    *All({ payload },{ call, put }){
        let data = yield call(gradeUpdata,payload);
    },
    *roomAll({ payload },{ call, put }){
        let data = yield call(roomAll);
        yield put({
            type:"roomAlls",
            payload:data.data
        })
    },
    *addGrade({ payload },{ call, put }){
        let data = yield call(addGrade,payload);
    },
    *getStudent({ payload },{ call, put }){
        let data = yield call(getStudent);
        yield put({
            type:"getStudents",
            payload:data.data
        })
      }

    },
  
    // 同步操作
    reducers: {
      getClassroomUpdata(state, {payload}) {
        return { ...state, getClassroomList:payload };
      },
      //删除教室
      removeroomUpdata(state, {payload}) {
        return { ...state, removeList:payload };
        },
      //添加教室
      addroomUpdata(state, {payload}) {
        return { ...state, AddroomList:payload };
      },
      //获取已经分配教室的班级的接口
      gradeUpdataAll(state, {payload}) {
        return { ...state, gradeList:payload };
      },
       //获取所有已经分班的学生的接口
       studentsUpdata(state, {payload}) {
        return { ...state, studentsList:payload };
      },
      //查询
      search(state, {payload}) {
        let data= state.studentsList.filter(item=>{
          if(item.student_name.indexOf(payload.student_name)!==-1||item.room_text.indexOf(payload.room_text)!==-1||item.grade_name.indexOf(payload.grade_name)!==-1){
            return item
          }
        })
        return { ...state, studentsList:data };
      },
        //``````````班级管理
      grades(state,{payload}){
        return {...state,gradeArr:payload,datas:[]}
      },
      roomAlls(state,{payload}){
          return {...state,rooms:payload}
      },
      getStudents(state,{payload}){
          return {...state,students:payload,types:[]}
      }
    }
  };
  