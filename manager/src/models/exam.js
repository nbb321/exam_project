import {establishExam} from "@/services"
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
        }
    },
  
    // 同步操作
    reducers: {
        establishUpdata(state, {payload}) {
            return { ...state, establishList:payload };
        }
    },
  
  };
  