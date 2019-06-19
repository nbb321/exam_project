import React from 'react';
import { Menu,Icon } from 'antd';
import { Link } from 'dva/router';
import {injectIntl} from "react-intl"

const { SubMenu } = Menu;


function MenuComp(props){
  return <Menu
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={['questions']}
    style={{ height: '100%', borderRight: 0 }}
  >
    <SubMenu
            key="questions"
            title={
              <span>
                <Icon type="box-plot" />
                {props.intl.formatMessage({id:"router.questions"})}
              </span>
            }
          >
      <Menu.Item key="1">
        <Link to="/questions/add">
          {props.intl.formatMessage({id:"router.questions.add"})}
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/questions/type">          
          {props.intl.formatMessage({id:"router.questions.type"})}
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/questions/view">
          {props.intl.formatMessage({id:"router.questions.view"})}
        </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
            key="user"
            title={
              <span>
                <Icon type="user" />
                {props.intl.formatMessage({id:"router.user"})}
              </span>
            }
          >
      <Menu.Item key="4">
        <Link to="/user/add">
           {props.intl.formatMessage({id:"router.user.add"})}
        </Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/user/show">
            {props.intl.formatMessage({id:"router.user.show"})}
        </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
            key="exam"
            title={
              <span>
                <Icon type="schedule" />
                {props.intl.formatMessage({id:"router.exam"})}
              </span>
            }
          >
      <Menu.Item key="6">
        <Link to="/exam/add">
          {props.intl.formatMessage({id:"router.exam.add"})}
        </Link>
      </Menu.Item>
      <Menu.Item key="7">
        <Link to="/exam/list">
        {props.intl.formatMessage({id:"router.exam.list"})}
        </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu
            key="class"
            title={
              <span>
                <Icon type="project" />
                {props.intl.formatMessage({id:"router.class"})}
              </span>
            }
          >
      <Menu.Item key="8">
        <Link to="/class/grade"> 
          {props.intl.formatMessage({id:"router.class.grade"})}
        </Link>
      </Menu.Item>
      <Menu.Item key="9">
        <Link to="/class/classroom">
          {props.intl.formatMessage({id:"router.class.classroom"})}
        </Link>
      </Menu.Item>
      <Menu.Item key="10">
        <Link to="/class/student">
          {props.intl.formatMessage({id:"router.class.student"})}
        </Link>
      </Menu.Item>
    </SubMenu>
    <SubMenu 
            key="paper"
            title={
              <span>
                <Icon type="profile" />
                {props.intl.formatMessage({id:"router.marking"})}
              </span>
            }
          >
      <Menu.Item key="11">
        <Link to="/marking/approved">
          {props.intl.formatMessage({id:"router.marking.approved"})}
        </Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
}

export default injectIntl(MenuComp);
