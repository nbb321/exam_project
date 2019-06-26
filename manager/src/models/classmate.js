import {studentDialong,classRoom} from "@/services";
export default {
    namespace:"classmate",
    state:{
        studentDialongList:[],
        classRoomList:[]
    },
    effects:{
        *studentDialong({ payload },{ call, put }){
            let data = yield call(studentDialong);
            yield put({
                type:"studentDialongListUpdate",
                payload:data.exam
            })
        },
        *classRoom({ payload },{ call, put }){
            let data = yield call(classRoom);
            yield put({
                type:"classRoomUpdate",
                payload:data.data
            })
        },
    },
    reducers:{
        studentDialongListUpdate(state,{payload}){
            return { ...state, studentDialongList:payload }
        },
        classRoomUpdate(state,{payload}){
            return { ...state, classRoomList:payload }
        },

    }
}