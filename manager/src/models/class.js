
import {getClassroom,Removeroom,Addroom} from "@/services"
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
      getClassroomList:[],
      removeList:[],
      AddroomList:[]
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
    }
  };
  