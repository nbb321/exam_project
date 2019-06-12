import React, {useEffect} from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import './index.scss';
  function LoginPage(props){  
    useEffect(()=>{
      if (props.isLogin === 1){
        // 1.提示登陆成功
        // 2.存储cookie
        // 3.跳转主页面
        message.success('登陆成功');
        let pathName = decodeURIComponent(props.history.location.search.split('=')[1]);
        props.history.replace(pathName);
      }else if(props.isLogin === -1){
        // 登陆失败
        message.error('用户名或密码错误')
      }
    }, [props.isLogin]);
    let handleSubmit = e => {
          e.preventDefault();
          props.form.validateFields((err, values) => {
            if (!err) {
              let {login}=props;
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
              登录
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
      return{
        ...state.user
      }
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