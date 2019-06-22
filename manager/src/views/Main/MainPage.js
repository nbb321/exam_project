import React from 'react';
import { connect } from 'dva';
import { Layout, Select } from 'antd';
import { Switch, Route, Redirect } from "dva/router";
import Menus from "@/components/Menu";
import Add from "./Questions/add/add";
import Type from "./Questions/type/type";
import View from "./Questions/view/view";
import Dialog from "./Questions/dialog/dialog";
import Edit from "./Questions/edit/edit";
import Exhibition from "./User/exhibition/exhibition";
import AddExam from "./Exam/addExam/addExam";
import AddMark from "./Exam/addMark/addMark"
import Adduser from './User/addUser/addUser';
import ExamList from './Exam/examList/examList';
import Class from './Class/class/class';
import Student from './Class/student/student';
import Paper from './Paper/paper/paper';
import Classmate from "./Paper/classmate/classmate"
import styles from './MainPage.scss';

const { Header, Content, Sider } = Layout;
const { Option } = Select;

function MainPage(props) {
    let change = e =>{
        props.changeLocale({
            e
        })
    }
    return (
    <Layout style={{height:"100%"}}>
        <Header className={styles.header}>
        <div>
          <img  className={styles.img} src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
          <Select onChange={change} value={'中文'} className={styles.down}>
                    <Option key="zh">中文</Option>
                    <Option key="en">英文</Option>
          </Select>
        </div>
        <div  className={styles.usename}>
          <img className={styles.imgs} src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
          <span>chenmanjie</span>
        </div>
        </Header>
            <Layout className={styles.ant_layout}>
                <Sider >
                <Menus />
                </Sider>
                <Content className={styles.ant_layout_content} style={{height:"100%"}}>
                    <Switch>
                        <Redirect exact from="/" to="/questions/add"></Redirect>
                        <Route path="/questions/type" component={Type}></Route>
                        <Route path="/questions/view" component={View}></Route>
                        <Route path="/questions/dialog" component={Dialog}/>
                        <Route path="/questions/edit" component={Edit}/>
                        <Route path="/user/addUser" component={Adduser}></Route>
                        <Route path="/exam/examList" component={ExamList}></Route>
                        <Route path="/user/show" component={Exhibition}></Route>
                        <Route path="/exam/addExam" component={AddExam}></Route>
                        <Route path="/exam/addMark" component={AddMark}></Route>
                        <Route path="/class/class" component={Class}></Route>
                        <Route path="/class/student" component={Student}></Route>
                        <Route path="/questions/add" component={Add}></Route>
                        <Route path="/marking/approved" component={Paper}></Route>
                        <Route path="/paper/classmate" component={Classmate}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
}

const mapStateToProps = state =>{
    return {
        locale:state.global.locale
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        getUser(){
            dispatch({
                type:'add/getUser'
            })
        },
        changeLocale:payload=>{
            dispatch({
                type:"global/changeLocale",
                payload
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);