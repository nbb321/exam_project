import React,{Component} from 'react';
import { connect } from 'dva';
import styles from './Index.scss';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import { Link } from 'dva/router';
 class LoginPage extends Component{
      componentDidMount(){//生命周期函数用来请求数据
        //调登录接口
        let {login}=this.props;
        login({
          user_name:'chenmanjie',
          user_pwd:'Chenmanjie123!'
        });

      }
      render(){
        return (
          <div className={styles.box}>
                 <Form.Item>
                       <Input
                        className={styles.ipts}
                        prefix={<Icon type="user" style={{ color: 'rgba(88,88,88)' }} />}
                        placeholder="请输入用户名"
                      />
                  </Form.Item>
                  <Form.Item>
                      <Input
                        className={styles.ipts}
                        prefix={<Icon type="lock" style={{ color: 'rgba(88,88,88)' }} />}
                        type="password"
                        placeholder="请输入密码"
                      />
                  </Form.Item>
                  <Form.Item>
                    <div className={styles.lefts}>
                    <Checkbox>记住密码</Checkbox>
                    <a className="login-form-forgot" href="">
                      忘记密码
                    </a>
                    </div>
                    <Button type="primary" htmlType="submit" className={styles.loginBtn}>
                      <Link to="/home">登录</Link>
                    </Button>
                 
                  </Form.Item>
             </div>
        );
      }
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
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
 
 
 
 
 
 
 
 
 
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
