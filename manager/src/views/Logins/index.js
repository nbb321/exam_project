import React, {useState,useEffect} from 'react';
//使用高阶组件
import { connect } from 'dva';
//引入局部样式
import styles from "./index.scss";
//引入ant使用form表单
import { Form, Icon, Input, Button, Checkbox } from 'antd';
//引入router使用link标签跳转路由
import { Link } from 'dva/router';
function LoginPage(props){
    //获取login
    let {login}=props
    useEffect(()=>{
        login({
            user_name:"chenmanjie",
            user_pwd:"Chenmanjie123!"
        })
    },[]);
   let handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
          if (!err) {
            login({
                user_name:values.username,
                user_pwd:values.password
            })
          }
        });
      };
    //表单验证
    const { getFieldDecorator } = props.form;
    return  <div className="box">
    <Form onSubmit={handleSubmit} className="login-form">
    <Form.Item>
      {getFieldDecorator('username', {
        validateTrigger:"onBlur",
        rules: [{ required: true,pattern:/^[a-zA-Z]+$/, message: '请输入正确的用户名!' }],
      })(
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="Username"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('password', {
        validateTrigger:"onBlur",
        rules: [{ required: true,pattern:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)/, message: '请输入正确的密码!' }],
      })(
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Password"
        />,
      )}
    </Form.Item>
    <Form.Item>
      {getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
      })(<Checkbox>记住密码</Checkbox>)}
      <a className="login-form-forgot" href="">
       忘记密码
      </a>
      <Button type="primary" htmlType="submit" className="login-form-button">
       <Link to="/home">登录</Link>
      </Button>
    </Form.Item>
  </Form>
  </div> 
}
//props的类型检查
localStorage.propTypes={

}
//props的默认值
LoginPage.defaultProps={
    
}
const mapStateToProps=state=>{
    // console.log("state",state)
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
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(LoginPage))
//使用class无状态函数
// import React, {Component} from 'react';
// class LoginPage extends Component{
//     componentDidMount(){
//         //调用 登录接口
//         let {login}=props;
//         login({
//             user_name:"chenmanjie",
//             user_pwd:"Chenmanjie123!"
//         })
//     }
//     render(){
//         return null
//     }
// }