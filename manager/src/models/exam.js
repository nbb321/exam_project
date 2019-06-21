import {establishExam,Examlist} from "@/services"
export default {
    // 命名空间
    namespace: 'exam',
  
    // 模块内部的状态
    state: {
        establishList:[],
        list:""
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
            console.log(data.data)
            yield put({
                type:"establishUpdata",
                payload:data.data.questions
            })

        },
        //展示列表
        *examlist({payload},{call,put}){
            let data=yield call(Examlist,payload);
            console.log(data.data)
            yield put({
                type:"examlistUpdata",
                payload:data.exam
            })
        }
    },
  
    // 同步操作
    reducers: {
        //创建考试
        establishUpdata(state, {payload}) {
            return { ...state, establishList:payload 

            };
        },
        //列表展示
        examlistUpdata(state,{payload}){
            return {...state,examList:payload}
        },
       // id 删除
       Remove_id(state,{payload}){
        state.establishList.splice(payload,1);
        return {...state,establishList:state.establishList}
       },
       //点击添加每一项
       AddItem(state,{payload}){
        state.establishList.push(payload);
        console.log(state.establishList)
        return {...state,establishList:state.establishList}
       }
    },
  
  };
  