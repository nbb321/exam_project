
import {getClassroom,Removeroom,Addroom,Grade,Students,Removestudent,
  ClassManagement,
  //弹框后的教室号
  MangerRoom,
  MangerClassName,
  AddGrade,
  // DeleteGrade
} from "@/services"
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
    classManagementList:[],
    mangerRoomList:[],
    mangerClassNameList:[],
    addGradeUpdateList:[],
    deleteClassList:[]
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
            type:"gradeUpdata",
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
      },
      //```````````班级管理
       //渲染列表
    *classManagement({payload},{call,put}){
      let data = yield call(ClassManagement);
      console.log('获取班级',data)
      yield put({
          type:"classManagementUpdata",
          payload:data.data
      })
    },
  //弹框后的教室号
  *mangerRoom({payload},{call,put}){
      let data = yield call(MangerRoom);
      yield put({
          type:"mangerRoomUpdata",
          payload:data.data
      })
    },
  //课程名
  *mangerClassName({payload},{call,put}){
      let data = yield call(MangerClassName);
      yield put({
          type:"mangerClassNameUpdata",
          payload:data.data
      })
    },
    //添加班级
    *addGrade({ payload }, { call, put }) {
      let data = yield call(AddGrade, payload)
      console.log(data)
    },
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
      gradeUpdata(state, {payload}) {
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
          //渲染列表
          classManagementUpdata(state, {payload}) {
            return { ...state, classManagementList:payload };
        },
        //弹框后的教室号
        mangerRoomUpdata(state, {payload}) {
            return { ...state, mangerRoomList:payload };
        },
        mangerClassNameUpdata(state, {payload}) {
            return { ...state, mangerClassNameList:payload };
        },
        addGradeUpdate(state, {payload}) {
            return { ...state, addGradeUpdateList:payload };
        },
        deleteClassUpdata(state,{payload}){
            return { ...state, deleteClassList:payload };
        }
    }
  };
  