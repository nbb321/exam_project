import {
    ClassManagement,
    //弹框后的教室号
    MangerRoom,
    MangerClassName,
    AddGrade,
    DeleteGrade
} from '@/services';
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
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
    //   *deleteClass({payload},{call,put}){
    //     let data = yield call(DeleteGrade,payload);
    //     console.log(data)
    //     yield put({
    //         type:"deleteClassUpdata",
    //         payload:data
    //     })
    //   }

   },
  
    // 同步操作
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
          },
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
        // deleteClassUpdata(state,{payload}){
        //     return { ...state, deleteClassList:payload };
        // }
    },
  
  };
  