import React from 'react';
import { Layout } from 'antd';
import {Route, Switch} from 'dva/router';
import Menu from "@/components/Menu.js"
import styles from "./index.scss"
import Add from "./Questions/Add"
import Type from "./Questions/Type"
import View from "./Questions/View"

const { Header, Content,Sider} = Layout;

function IndexPage(psrops){
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
            <Route path="/questions/add" component={Add}></Route>
            <Route path="/questions/type" component={Type}></Route>
            <Route path="/questions/view" component={View}></Route>
          </Switch>
      </Content>
      <Content>
          <Switch>
            <Route path="/user/add" component={null}></Route>
            <Route path="/user/show" component={null}></Route>          </Switch>
      </Content>
    </Layout>
    
  </Layout>
  
}

export default IndexPage;
