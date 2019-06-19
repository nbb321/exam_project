import {establishExam,Examlist} from "@/services"
export default {
    // 命名空间
    namespace: 'exam',
  
    // 模块内部的状态
    state: {
        establishList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        *establishExam({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(establishExam,payload);
            console.log(data.data)
            yield put({
                type:"establishUpdata",
                payload:data.data
            })
        },
        //展示列表
        *examlist({payload},{call,put}){
            let data=yield call(Examlist,payload);
            console.log(data.data)
            yield put({
                type:"examlistUpdata",
                payload:data.exam
            })
        }

    },
  
    // 同步操作
    reducers: {
        //创建考试
        establishUpdata(state, {payload}) {
            return { ...state, establishList:payload };
        },
        //列表展示
        examlistUpdata(state,{payload}){
            return {...state,examList:payload}
        }
    },
  
  };
  