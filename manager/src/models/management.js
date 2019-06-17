import {Edit,Identityid,Userid,Adduser,UserUpdata,AddEdit,Relations,Authoritys,SetIdentityView,SetIdentityApi,AuthorityView} from '@/services';

export default {
    // 命名空间
    namespace: 'management',
  
    // 模块内部的状态
    state: {
        identityidList:[],
        useridList:[],
        relationList:[],
        authoritysList:[],
        setIdentityViewList:[],
        setIdentityApiList:[]
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
        *relation({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(Relations,payload);
            yield put({
                type:"relationUpdata",
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
      //展示身份和视图权限关系
      relationUpdata(state, {payload}) {
        return { ...state, relationList:payload };
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
      },
    }
  };
  