import {Type,View,Subject,ExamType,Condition} from '@/services';

export default {
    // 命名空间
    namespace: 'questions',
  
    // 模块内部的状态
    state: {
        TypeList:[],
        ViewList:[],
        subjectList:[],
        examTypeList:[],
        conditionList:[]
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        *type({payload}, {call, put}){
            let data = yield call(Type);
            // console.log(data);
            yield put({
                type:"typeUpdata",
                payload:data.data
            })
        },
        *view({payload}, {call, put}){
            let data = yield call(View);
            // console.log(data.data)
            yield put({
                type:"viewUpdata",
                payload:data.data
            })
        },
        *subject({payload}, {call, put}){
            let data = yield call(Subject);
            // console.log(data.data)
            yield put({
                type:"subjectUpdata",
                payload:data.data
            })
        },
        *examType({payload}, {call, put}){
            let data = yield call(ExamType);
            // console.log(data.data)
            yield put({
                type:"examTypeUpdata",
                payload:data.data
            })
        },
        *condition({payload}, {call, put}){
            let data = yield call(Condition,payload);
            console.log(data.data)
            yield put({
                type:"conditionUpdata",
                payload:data.data
            })
        }
        
    },
  
    // 同步操作
    reducers: {
        typeUpdata(state, {payload}) {
            return { ...state, TypeList:payload };
        },
        viewUpdata(state, {payload}) {
            return { ...state, ViewList:payload };
        },
        subjectUpdata(state, {payload}) {
            return { ...state, subjectList:payload };
        },
        examTypeUpdata(state, {payload}) {
            return { ...state, examTypeList:payload };
        },
        condition(state, {payload}) {
            return { ...state, conditionList:payload };
        }
    },
  
  };
  