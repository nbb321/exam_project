import {studentDialong} from "@/services";
export default {
    namespace:"studentDialong",
    state:{
        studentDialongList:[]
    },
    effects:{
        *studentDialong({ payload },{ call, put }){
            let data = yield call(studentDialong);
            console.log(data)
            yield put({
                type:"studentDialongListUpdate",
                payload:data.data
            })
        },
    },
    reducers:{
        studentDialongListUpdate(state,{payload}){
            return { ...state, studentDialongList:payload }
        }
    }
}