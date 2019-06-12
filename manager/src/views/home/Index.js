import React from 'react';
import {Layout} from 'antd';
import { Route, Switch } from 'dva/router';
import Menu from '@/components/Menu'
import styles from './Index.scss'
import Add  from "./Questions/Add/Index"
import Type from "./Questions/Type/Index"
import View  from "./Questions/View/Index"

const { Header, Content, Sider } = Layout;

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
          <Route path="/questions/add" component={Add}></Route>
          <Route path="/questions/type" component={Type}></Route>
          <Route path="/questions/view" component={View}></Route>
        </Switch>
      </Content>
    </Layout>
  </Layout>
}

export default IndexPage;


