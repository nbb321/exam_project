import {paper} from "@/services";
export default {
    namespace:"paper",

    state:{
        paperlist:[]
    },
    effects:{
        *paper({ payload },{ call, put }){
            let data = yield call(paper);
            console.log("paper……",data)
            yield put({
                type:"parperUpdate",
                payload:data.data
            })
        },
    },
    reducers:{
        parperUpdate(state,{payload}){
            return { ...state, paperlist:payload }
        }
    }
}