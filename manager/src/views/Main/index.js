import React from 'react';
import { Layout } from 'antd';
import {Route, Switch} from 'dva/router';
import Menu from "@/components/Menu.js"
import styles from "./index.scss"

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
            <Route path="/questions/add" component={null}></Route>
            <Route path="/questions/type" component={null}></Route>
            <Route path="/questions/view" component={null}></Route>
          </Switch>
        </Content>
    </Layout>
  </Layout>
  
}

export default IndexPage;
