import {ClassManagement} from '@/services';
export default {
    // 命名空间
    namespace: 'class',
  
    // 模块内部的状态
    state: {
        classManagementList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
    *classManagement({payload},{call,put}){
        let data = yield call(ClassManagement);
        yield put({
            type:"classManagementUpdata",
            payload:data.data
        })
      },
    },
  
    // 同步操作
    reducers: {
        classManagementUpdata(state, {payload}) {
            return { ...state, classManagementList:payload };
        },

    },
  
  };
  