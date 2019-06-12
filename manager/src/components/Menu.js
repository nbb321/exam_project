import React from 'react';
import { Menu,Icon } from 'antd';
import { Link } from 'dva/router';

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
                <Icon type="user" />
                试题管理
              </span>
            }
          >
      <Menu.Item key="1">
        <Link to="/questions/add">添加试题</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/questions/type">试题分类</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/questions/view">查看试题</Link>
      </Menu.Item>
    </SubMenu>
  </Menu>
}

export default MenuComp;
