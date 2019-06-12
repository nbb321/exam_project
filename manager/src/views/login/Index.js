import React,{useEffect} from 'react';
import { connect } from 'dva';
import styles from './Index.scss';
import "antd/dist/antd.css";
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';

function LoginPage(props){
  //获取login
  let {login}=props;
  useEffect(()=>{
     if(props.isLogin===1){
       //1.提示登录成功
       message.success('登录成功');
       //2.提示登录成功
       //3.跳转主页面  home
       let pathName=decodeURIComponent(props.history.location.search.split('=')[1]);
       props.history.replace(pathName);
     }else if(props.isLogin === -1){
      //登录失败
      message.error('用户名或密码错误')
     }
  },[props.isLogin]);
  //处理表单提交
  let handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login({
          user_name:values.username,
          user_pwd:values.password
        })
      }
    })
  };
  //表单校验
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className={styles.login_form}>
    <Form.Item>
    {getFieldDecorator('username', {
      rules: [{ required: true, message: '请输入用户名' }],
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="请输入用户名"
      />,
    )}
   </Form.Item>
   <Form.Item>
    {getFieldDecorator('password', {
      rules: [{ required: true,
      pattern:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)^.{8,16}$/,//进行验证大小写字母数字
       message: '请输入正确格式的代码' }],
    })(
      <Input
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        type="password"
        placeholder="请输入用户名密码！"
      />,
    )}
   </Form.Item>
   <Form.Item>
    {getFieldDecorator('remember', {
      valuePropName: 'checked',
      initialValue: true,
    })(<Checkbox>记住密码</Checkbox>)}
    <a className={styles.login_form_forgot} href="">
      忘记密码
    </a>
    <Button type="primary" htmlType="submit" className={styles.login_form_button}>
    <Link to="/home">登陆</Link>
    </Button>
  </Form.Item>
</Form>
  );
}
//props的类型检查
LoginPage.propTypes={

}
//props的默认值
LoginPage.defaultProps={

}
 const mapStateToProps=state=>{
   return {}
 }
 const mapDispatchToProps=dispatch=>{
   return {
     login(payload){
       dispatch({
         type:'user/login',
         payload//models里面的payload
       })
     }
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Form.create({name:'normal_login'})(LoginPage));
 
 
 
 
 
 
 
 
 
// function IndexPage() {
//   function ChangeValue(e){
//     console.log(e)
//   }
//   return (
//    <div className={styles.box}>
//       <Form.Item>
//             <Input
//             onChange={ChangeValue}
//               className={styles.ipts}
//               prefix={<Icon type="user" style={{ color: 'rgba(88,88,88)' }} />}
//               placeholder="请输入用户名"
//             />
//         </Form.Item>
//         <Form.Item>
//             <Input
//               className={styles.ipts}
//               prefix={<Icon type="lock" style={{ color: 'rgba(88,88,88)' }} />}
//               type="password"
//               placeholder="请输入密码"
//             />
//         </Form.Item>
//         <Form.Item>
//           <div className={styles.lefts}>
//           <Checkbox>记住密码</Checkbox>
//           <a className="login-form-forgot" href="">
//             忘记密码
//           </a>
//           </div>
//           <Button type="primary" htmlType="submit" className={styles.loginBtn}>
//             <Link to="/home">登录</Link>
//           </Button>
       
//         </Form.Item>
//    </div>
//   );
// }

// IndexPage.propTypes = {
// };

// export default connect()(IndexPage);
