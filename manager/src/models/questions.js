import {Type,View,Subject,ExamType,Condition,Addquest,UserInfo} from '@/services';
// import { routerRedux } from 'dva/router';
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
        user_id:"",
        Objs:{}
        
    },
  
    subscriptions: {
        setup ({ dispatch, history }) {
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
            console.log(data)
        },
        *userInfo({payload}, {call, put}){
            let data = yield call(UserInfo);
            yield put({
                type:"userInfotUpdata",
                payload:data.data.user_id
            })
        },
        *clickItem({payload}, {call, put}){
            yield put({
                type:"ClickUpdata",
                payload
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
        conditionUpdata(state, {payload}) {
            return { ...state, conditionList:payload };
        },
        userInfotUpdata(state, {payload}) {
            console.log(payload)
            return { ...state, user_id:payload };
        }, 
        ClickUpdata(state, {payload}) {
            console.log(payload)
            return { ...state, Objs:payload };
        }
    },
  
  };
  