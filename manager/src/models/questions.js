import {Type,View,Condition} from '@/services';

export default {
    // 命名空间
    namespace: 'questions',
  
    // 模块内部的状态
    state: {
        TypeList:[],
        ViewList:[],
        conditionList:[],
        examTypeList:[]
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
        *condition({payload}, {call, put}){
            let data = yield call(Condition);
            // console.log(data)
            yield put({
                type:"conditaionUpdate",
                payload:data.data
            })
        },
        *examType({payload}, {call, put}){
            let data = yield call(Condition);
            // console.log(data)
            yield put({
                type:"examTypeUpdata",
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
        },
        conditaionUpdate(state, {payload}) {
            return { ...state, conditionList:payload };
        },
        examTypeUpdata(state, {payload}) {
            return { ...state, examTypeList:payload };
        },

        
    },
  
  };


