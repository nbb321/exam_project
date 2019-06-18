import {
    Type,
    View,
    Subject,
    ExamType,
    Condition,
    Addquest,
    UserInfo,
    Update,
    insertQuestionsType,
    UserShow,
    Useridentity,
    ApiAuthority,
    Relation,
    ViewAuthority,
    IdentityView,
    Examlist,
    Edit,
    Identityid,
    Userid,
    Adduser,
    UserUpdata,
    AddEdit,
    Relations,
    Authoritys,
    SetIdentityView,
    SetIdentityApi,
    AuthorityView
} from '@/services';
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
        compileList:[],
        insertList:[],
        usershowList:[],
        useridentityList:[],
        apiAuthorityList:[],
        relationList:[],
        viewauthorityList:[],
        identityviewList:[],
        examList:[],
        user_id:"",
        Objs:{},
        identityidList:[],
        useridList:[],
        relationsList:[],
        authoritysList:[],
        setIdentityViewList:[],
        setIdentityApiList:[]
        
    },
  
    subscriptions: {
        setup ({ dispatch, history }) {
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
        },
        *view({payload}, {call, put}){
            let data = yield call(View);
            yield put({
                type:"viewUpdata",
                payload:data.data
            })
        },
        *subject({payload}, {call, put}){
            let data = yield call(Subject);
            yield put({
                type:"subjectUpdata",
                payload:data.data
            })
        },
        *examType({payload}, {call, put}){
            let data = yield call(ExamType);
            yield put({
                type:"examTypeUpdata",
                payload:data.data
            })
        },
        //点击查询
        *condition({payload}, {call, put}){
            let data = yield call(Condition,payload);
            yield put({
                type:"conditionUpdata",
                payload:data.data
            })
        },
        //添加试题
        *addquest({payload}, {call, put}){
            let data = yield call(Addquest,payload);
            console.log(data)
        },
        // 用户名
        *userInfo({payload}, {call, put}){
            let data = yield call(UserInfo);
            yield put({
                type:"userInfotUpdata",
                payload:data.data.user_id
            })
        },
        //点击详情
        *clickItem({payload}, {call, put}){
            yield put({
                type:"ClickUpdata",
                payload
            })
        },
        //点击编辑
        *compile({payload}, {call, put}){
            yield put({
                type:"compileUpdata",
                payload
            })
        },
        //编辑页
        *update({payload}, {call, put}){
           yield call(Update,payload);
            // console.log(data)
        },
        //添加类型
        *insertQuestionsType({payload}, {call, put}){
            yield call(insertQuestionsType,payload);
            // console.log(data);
        },
        //用户展示
        *userShow({payload}, {call, put}){
            let data = yield call(UserShow,payload);
            yield put({
                type:"userShowUpdata",
                payload:data.data
            })
        },
        //身份数据
        *useridentity({payload}, {call, put}){
            let data = yield call(Useridentity,payload);
            yield put({
                type:"useridentityUpdata",
                payload:data.data
            })
        },
        //api接口权限设置
        *apiAuthority({payload}, {call, put}){
            let data = yield call(ApiAuthority,payload);
            yield put({
                type:"apiAuthorityUpdata",
                payload:data.data
            })
        },
        //身份和api接口关系
        *relation({payload}, {call, put}){
            let data = yield call(Relation,payload);
            yield put({
                type:"relationUpdata",
                payload:data.data
            })
        },
        //试图接口权限
        *viewAuthority({payload},{call,put}){
            let data=yield call(ViewAuthority,payload);
            yield put({
                type:"viewAuthorityUpdata",
                payload:data.data
            })
        },
        //展示身份和视图权限关系
        *identityview({payload},{call,put}){
            let data=yield call(IdentityView,payload);
            yield put({
                type:"identityviewUpdata",
                payload:data.data
            })
        },
        //试卷列表
        *examlist({payload},{call,put}){
            let data=yield call(Examlist,payload);
            yield put({
                type:"examlistUpdata",
                payload:data.exam
            })
        },
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
        *userUpdata({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(UserUpdata,payload);
            console.log(data)
        },
        //添加api接口权限
        *addEdit({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(AddEdit,payload);
            console.log(data)
        },
        //展示身份和视图权限关系
        *relations({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Relations,payload);
            yield put({
                type:"relationsUpdata",
                payload:data.data
            })
        },
        //展示api接口权限数据
        *authoritys({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Authoritys,payload);
            yield put({
                type:"authoritysUpdata",
                payload:data.data
            })
        },
        //给身份设定视图权限
        *setIdentityView({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(SetIdentityView,payload);
            console.log(data.data);
            yield put({
                type:"setIdentityViewUpdata",
                payload:data.data
            })
        },
        //给身份设定api接口权限
        *setIdentityApi({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(SetIdentityApi,payload);
            console.log(data);
            yield put({
                type:"setIdentityApiUpdata",
                payload:data.data
            })
        },
        //添加视图权限
        *authorityView({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(AuthorityView,payload);
            console.log(data)
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
            console.log(payload)
            return { ...state, ViewList:payload };
        },
        userInfotUpdata(state, {payload}) {
            return { ...state, user_id:payload };
        }, 
        ClickUpdata(state, {payload}) {
            return { ...state, Objs:payload };
        },
        compileUpdata(state, {payload}) {
            return { ...state, compileList:payload };
        },
        userShowUpdata(state,{payload}){
            return {...state,usershowList:payload}
        },
        useridentityUpdata(state,{payload}){
            return {...state,useridentityList:payload}
        },
        apiAuthorityUpdata(state,{payload}){
            return {...state,apiAuthorityList:payload}
        },
        relationUpdata(state,{payload}){
            return {...state,relationList:payload}
        },
        viewAuthorityUpdata(state,{payload}){
            return {...state,viewauthorityList:payload}
        },
        identityviewUpdata(state,{payload}){
            return {...state,identityviewList:payload}
        },
        examlistUpdata(state,{payload}){
            return {...state,examList:payload}
        },
        //添加身份
        identityidUpdata(state, {payload}) {
            return { ...state, identityidList:payload };
        },
        //更新用户id
        useridUpdata(state, {payload}) {
            return { ...state, useridList:payload };
        },
        //展示身份和视图权限关系
        relationsUpdata(state, {payload}) {
            return { ...state, relationsList:payload };
        },
        //展示api接口权限数据
        authoritysUpdata(state, {payload}) {
            return { ...state, authoritysList:payload };
        },
        //给身份设定视图权限
        setIdentityViewUpdata(state, {payload}) {
            return { ...state, setIdentityViewList:payload };
        },
        //给身份设定api接口权限
        setIdentityApiUpdata(state, {payload}) {
            return { ...state,  setIdentityApiList:payload };
        }

    },
  
  };
  