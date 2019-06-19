
import {getClassroom,Removeroom} from "@/services"
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
      getClassroomList:[],
      removeList:[]
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
      *removeroom({ payload }, { call, put }) {
        let data = yield call(Removeroom,payload);
        console.log(data)
        yield put({
            type:"removeroomUpdata",
            payload:data.data
        })
      },
    },
  
    // 同步操作
    reducers: {
      getClassroomUpdata(state, {payload}) {
        return { ...state, getClassroomList:payload };
      },
      removeroomUpdata(state, {payload}) {
        return { ...state, removeList:payload };
      },
    },
  
  };
  