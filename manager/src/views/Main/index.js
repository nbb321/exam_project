import React from 'react';
import { Layout,Spin,Menu,Icon,Dropdown } from 'antd';
import {Route, Switch,Redirect} from 'dva/router';
import Menus from "@/components/Menu.js"
import styles from "./index.scss"
//试题管理
import Add from "./Questions/Add"
import Type from "./Questions/Type"
import View from "./Questions/View"
import Default from "./Questions/Default"
import EditQuestions from "./Questions/EditQuestions"
//用户管理
import userAdd from "./User/Add"
import userShow from "./User/Show"
//考试管理
import ExamAdd from "./Exam/Add"
import ExamShow from "./Exam/List"
import Edit from "./Exam/Edit"

//班级管理
import Grade from "./Class/Class";
import Classroom from "./Class/Classroom"

import {connect} from "dva";
const { Header, Content,Sider} = Layout;

function IndexPage(props){
  return <Layout className={styles.container}>
    <Header className={styles.header}>
    <div>
      <img  className={styles.img} src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      <Dropdown overlay={
          <Menu>
          <Menu.Item  onClick={()=>props.changeLocal(props.locale==="zh"?"en":"zh")}>
              中文
          </Menu.Item>
          <Menu.Item  onClick={()=>props.changeLocal(props.locale==="zh"?"en":"zh")}>
              英文
          </Menu.Item>
        </Menu>
        }>
          <a className="ant-dropdown-link" href="#">
            国际化 <Icon type="down" />
          </a>
      </Dropdown>
    </div>
      <div  className={styles.usename}>
        <img className={styles.imgs} src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
        <span>chenmanjie</span>
      </div>
    </Header>

    <Layout>
      <Sider>
        <Menus />
      </Sider>
      <Content>
          <Switch>
            <Redirect from="/" exact to="/questions/add" ></Redirect>
            <Route path="/questions/add" component={Add}></Route>
            <Route path="/questions/type" component={Type}></Route>
            <Route path="/questions/view" component={View}></Route>
            <Route path="/questions/default" component={Default}></Route>
            <Route path="/questions/editQuestions" component={EditQuestions}></Route>
            <Route path="/user/add" component={userAdd}></Route>
            <Route path="/user/show" component={userShow}></Route>
            <Route path="/exam/add" component={ExamAdd}></Route>
            <Route path="/exam/list" component={ExamShow}></Route>
            <Route path="/exam/edit" component={Edit}></Route>
            <Route path="/class/grade" component={Grade}></Route>
            <Route path="/class/classroom" component={Classroom}></Route>
            {/* <Route path="/class/student" component={ExamShow}></Route> */}
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
    loading:state.loading.global,
    locale:state.global.locale
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    changeLocal:payload=>{
        dispatch({
          type:"global/changeLocale",
          payload
        })
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
