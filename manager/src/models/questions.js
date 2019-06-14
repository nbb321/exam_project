import {Type,View,Subject,ExamType,Condition} from '@/services';
// import { routerRedux } from "dva/router";

export default {
    // 命名空间
    namespace: 'questions',
  
    // 模块内部的状态
    state: {
        TypeList:[],
        ViewList:[],
        subjectList:[],
        examTypeList:[],
        itemList:[],
        subject_id:"",
        exam_id:"",
        questions_type_id:""
    },
  
    subscriptions: {
      /**
     * 监听浏览器地址，当跳转到 /user 时进入该方法
     * dispatch 触发器，用于触发 effects 中的 query 方法
     * history 浏览器历史记录，主要用到它的 location 属性以获取地址栏地址
     */
      setup({ dispatch, history }) {  // eslint-disable-line
        //  history.listen((location) => {
        //   console.log(location)
        //   dispatch({
        //     type: 'query',
        //     payload: location.state,
        //   })
        //  }); 
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
        //科目
        *subject({payload}, {call, put}){
            let data = yield call(Subject);
            // console.log(data.data)
            yield put({
                type:"subjectUpdata",
                payload:data.data
            })
        },
        //考试类型
        *examType({payload}, {call, put}){
            let data = yield call(ExamType);
            // console.log(data.data)
            yield put({
                type:"examTypeUpdata",
                payload:data.data
            })
        },
        //View查询
        *condition({payload}, {call, put}){
            let data = yield call(Condition,payload);
            yield put({
                type:"conditionUpdata",
                payload:data.data
            })
        },
        //从view里传过来的每一项值点击进行跳转路由
        //遇到问题  Warning: Hash history cannot push state; it is ignored
        //this.props.history.push({ pathname: `${url}`, state: { nodeType: nodeType }}) //1
        //yield put(routerRedux.push('/question/detail?id='+payload.questions_id,{item:payload}))
        *redirect({payload}, {put}){
            yield put({
                type:"redirectUpdata",
                payload
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
        //每一次进行查询的时候ViewList进行渲染
        conditionUpdata(state, {payload}) {
            return { ...state, ViewList:payload };
        },
        redirectUpdata(state,{payload}){
            return {...state,itemList:payload}
        }

    },
  
  };
