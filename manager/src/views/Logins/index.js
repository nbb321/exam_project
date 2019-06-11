
import React, {Component} from 'react';
import { connect } from 'dva';
class LoginPage extends Component{
    componentDidMount(){
        //调用 登录接口
        let {login}=this.props;
        login({
            user_name:"chenmanjie",
            user_pwd:"Chenmanjie123!"
        })
    }
    render(){
        return null
    }
}
const mapStateToProps=state=>{
    console.log("state",state)
    return{}
}
const mapDispatchToProps=dispatch=>{
    return{
        login(payload){
            dispatch({
                type:"user/login",
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)