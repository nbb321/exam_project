import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "antd/dist/antd.css";
import { Link } from 'dva/router';
function IndexPage() {
  function ChangeValue(e){
    console.log(e)
  }
  return (
   <div className={styles.box}>
      <Form.Item>
            <Input
            onChange={ChangeValue}
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
  // return (
  //     <div className={styles.box}>
  //       <form className={styles.fromBox}>
  //         <div className={styles.fromBox_item}>
  //          <Icon type="user" className={styles.user} />
  //           <input  type="text"  className={styles.ipt}/>
  //         </div>
  //         <div className={styles.fromBox_item}>
  //         <Icon type="lock" className={styles.user} />
  //           <input className={styles.ipt} type="password"/>
  //         </div>
  //       </form>
  //     </div>
  // );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
