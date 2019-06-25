import {readPaper} from "@/services";
export default {
    namespace:"readPaper",
    state:{
        readPaperlist:[]
    },
    effects:{
        *readPaper({ payload },{ call, put }){
            let data = yield call(readPaper,payload);
            yield put({
                type:"readPaperUpdate",
                payload:data.data
            })
        }
    },
    reducers:{
        readPaperUpdate(state,{payload}){
            return { ...state, readPaperlist:payload }
        },
        //改变slider
        chanValue(state,{payload}){
            return { ...state, readPaperlist:{...state.readPaperlist,score:payload.e,status:1}}
        }
    }
}