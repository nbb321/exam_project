import React from 'react';
import { Layout,Spin } from 'antd';
import {Route, Switch,Redirect} from 'dva/router';
import Menu from "@/components/Menu.js"
import styles from "./index.scss"
import Add from "./Questions/Add"
import Type from "./Questions/Type"
import View from "./Questions/View"
import {connect} from "dva";

const { Header, Content,Sider} = Layout;

function IndexPage(props){
  return <Layout className={styles.container}>
    <Header>
      <p>顶部</p>
    </Header>
    <Layout>
      <Sider>
        <Menu />
      </Sider>
      <Content>
          <Switch>
            <Redirect from="/" exact to="/questions/add" ></Redirect>
            <Route path="/questions/add" component={Add}></Route>
            <Route path="/questions/type" component={Type}></Route>
            <Route path="/questions/view" component={View}></Route>
          </Switch>
          {props.loading?
          <div className={styles.loading}>
          <Spin />
          </div>:null}
      </Content>
    </Layout>
    
  </Layout>
  
}

const mapStateToProps=state=>{
  return{
    loading:state.loading.global
  }
}
const mapDispatchToProps=dispatch=>{
  return{
  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
