import {establishExam,PaperList,upPaper,examDetail,examinquire} from "@/services"
export default {
    // 命名空间
    namespace: 'exam',
  
    // 模块内部的状态
    state: {
        establishList:[],
        list:"",
        paperlistArr:[],//试题列表
        examDelArr:[],//试卷详情
        inquireArr:[],//试题查询

    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
        //创建试卷
        *establishExam({ payload }, { call, put }) {  // eslint-disable-line
            let data = yield call(establishExam,payload);
            yield put({
                type:"establishUpdata",
                payload:data.data.questions
            })
        },
          //获取试卷列表
        *PapersList({payload},{call,put}){ 
            let data= yield call(PaperList,payload);
            yield put({
              type:'changePaperList',
              payload:data.exam
            })
          },
        //更新试卷
        *upPaper({ payload }, { call, put }){
            let data = yield call(upPaper,payload);
            console.log(data);
        },
        //试卷详情
        *examDePaper({payload},{call,put}){ 
            let data= yield call(examDetail,payload);
            yield put({
              type:'examDel',
              payload:data.data.questions
            })
          },
          //试卷的查询
          *examinquire({payload},{call,put}){ 
            let data= yield call(examinquire,payload);
            yield put({
              type:'inquireUpdata',
              payload:data.exam
            })
          }
    },
  
    // 同步操作
    reducers: {
        //创建考试
        establishUpdata(state, {payload}) {
            return { ...state, establishList:payload};
        },
        //列表展示
        changePaperList(state,{payload}){
            return {...state, paperlistArr:payload}
          },
        //试卷详情
        examDel(state,{payload}){
            return {...state, examDelArr:payload}
          },
        //试卷查询
        inquireUpdata(state,{payload}){
            console.log(payload)
            return {...state, paperlistArr:payload}
          },
       Remove_id(state,{payload}){
        return {...state,establishList:state.establishList.filter((item,index)=>index!==payload)};
       },
       //点击添加每一项
       AddItem(state,{payload}){
        return {...state,establishList:[...state.establishList,payload]}
       }
    },
  
  };
  