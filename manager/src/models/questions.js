import {Type,View} from '@/services';

export default {
    // 命名空间
    namespace: 'questions',
  
    // 模块内部的状态
    state: {
        TypeList:[],
        ViewList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        *type({payload}, {call, put}){
            let data = yield call(Type);
            yield put({
                type:"typeUpdata",
                payload:data.data
            })
            // console.log(data.data)//获取的是数组
        },
        *view({payload}, {call, put}){
            let data = yield call(View);
            // console.log(data)
            yield put({
                type:"viewUpdata",
                payload:data.data
            })
        },
    },
  
    // 同步操作
    reducers: {
        typeUpdata(state, {payload}) {
            return { ...state, TypeList:payload };
        },
        viewUpdata(state, {payload}) {
            return { ...state, ViewList:payload };
        }
        
    },
  
  };


