import {Edit,Identityid,Userid,Adduser} from '@/services';

export default {
    // 命名空间
    namespace: 'management',
  
    // 模块内部的状态
    state: {
        identityidList:[],
        useridList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        *edit({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Edit,payload);
            console.log(data)
        },
        *identityid({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Identityid,payload);
            yield put({
                type:"identityidUpdata",
                payload:data.data
            })
        },
        *userid({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Userid,payload);
            yield put({
                type:"useridUpdata",
                payload:data.data
            })
        },
        *adduser({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Adduser,payload);
            console.log(data)
        },
    },
  
    // 同步操作
    reducers: {
      //添加身份
      identityidUpdata(state, {payload}) {
        return { ...state, identityidList:payload };
      },
      //更新用户id
      useridUpdata(state, {payload}) {
        return { ...state, useridList:payload };
      },
    },
  
  };
  