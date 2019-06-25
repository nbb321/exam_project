import React from 'react';
import { Menu,Icon } from 'antd';
import {connect} from "dva"
import { Link } from 'dva/router';
import {injectIntl} from "react-intl"

const { SubMenu } = Menu;

 
function MenuComp(props){
  return <Menu
  theme="dark"
  mode="inline"
  defaultSelectedKeys={['0']}
  defaultOpenKeys={['router.questions']}
  style={{ height: '100%', borderRight: 0,overflowY:"scroll" }}
>
  
  {props.myView.map((item,index)=>{
  
    return <SubMenu key={index} title={
      <span>
         <Icon type="user" />
          {props.intl.formatMessage({id:item.name})}
      </span>
    }>{
      item.children.map((value)=>{
        return value.name?<Menu.Item key={value.id}>
          <Link to={value.path}>
            {props.intl.formatMessage({id: value.name})}
          </Link>
        </Menu.Item>:null
      })
    }
    </SubMenu>
  })}
  </Menu>
}
const mapStateToprops=state=>{
  return {
    myView:state.user.myView
  }
}
export default injectIntl(connect(mapStateToprops)(MenuComp));