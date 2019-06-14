import {Type,View,Subject,ExamType,Condition,Addquest,UserInfo} from '@/services';

export default {
    // 命名空间
    namespace: 'questions',
  
    // 模块内部的状态
    state: {
        TypeList:[],
        ViewList:[],
        subjectList:[],
        examTypeList:[],
        conditionList:[],
        user_id:""
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
        },
        *addquest({payload}, {call, put}){
            let data = yield call(Addquest,payload);
            console.log(data);
            
            // yield put({
            //     type:"AddquestUpdata",
            //     payload:data.data
            // })
        },
        *userInfo({payload}, {call, put}){
            let data = yield call(UserInfo);
            // console.log(data.data.user_id)
            yield put({
                type:"userInfotUpdata",
                payload:data.data.user_id
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
        subjectUpdata(state, {payload}) {
            return { ...state, subjectList:payload };
        },
        examTypeUpdata(state, {payload}) {
            return { ...state, examTypeList:payload };
        },
        condition(state, {payload}) {
            return { ...state, conditionList:payload };
        },
        userInfotUpdata(state, {payload}) {
            console.log(payload)
            return { ...state, user_id:payload };
        } 
        // AddquestUpdata(state, {payload}) {
        //     return { ...state, conditionList:payload };
        // }
    },
  
  };
  