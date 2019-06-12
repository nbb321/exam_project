import {Add} from '@/services';


export default {
    // 命名空间
    namespace: 'questions',
  
    // 模块内部的状态
    state: {
        AddList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        *add({payload}, {call, put}){
            let data = yield call(Add);
            console.log('data...', data);
        }
    },
  
    // 同步操作
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  