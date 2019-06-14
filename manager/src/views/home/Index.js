import React from 'react';
import {Layout,Icon,Spin} from 'antd';
import { Route, Switch,Redirect } from 'dva/router';
import Menu from '@/components/Menu'
import styles from './Index.scss'
import Add  from "./Questions/Add/Index"
import Type from "./Questions/Type/Index"
import View  from "./Questions/View/Index"
import {connect} from "dva"

const { Header, Content, Sider } = Layout;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
function IndexPage(props){
  return <Layout className={styles.container}>
    <Header>
      <p>顶部信息</p>
    </Header>
    <Layout>
      <Sider>
        <Menu/>
      </Sider>
      <Content>
        <Switch>
          <Redirect exact from="/" to="/questions/add" />
          <Route path="/questions/add" component={Add}></Route>
          <Route path="/questions/type" component={Type}></Route>
          <Route path="/questions/view" component={View}></Route>
        </Switch>
          {props.loading?<div className={styles.loading}><Spin/></div>:null}
      </Content>
    </Layout>
  </Layout>
}
const mapStateToProps = state =>{
   return {
       loading:state.loading.global
   }
}
export default connect(mapStateToProps)(IndexPage);


