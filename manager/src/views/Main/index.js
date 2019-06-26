import React from 'react';
import { Layout,Spin,Dropdown,Menu,Icon} from 'antd';
import {Route, Switch,Redirect,Link} from 'dva/router';
import Menus from "@/components/Menu.js"
import styles from "./index.scss"
import {connect} from "dva";
import Canvas from "@/views/Canvas"
// import Portrait from "@/components/Portrait.js"
const { Header, Content,Sider} = Layout;
function IndexPage(props){
  console.log(props)
  if (!props.myView.length){
    return null;
  } 
  let {changeLocal,locale}=props
  let itemClick=val=>{
    if(val==="中文"){
        changeLocal(locale="zh")
    }
  }
  let itemMenu=val=>{
    if(val==="英文"){
      changeLocal(locale="en")
    }
  }
  return <Layout className={styles.container}>
    <Header className={styles.header}>
    <div> 
      <img  className={styles.img} src="https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
      <Dropdown overlay={
          <Menu>
          <Menu.Item  onClick={()=>itemClick("中文")}>
              中文
          </Menu.Item>
          <Menu.Item onClick={()=>itemMenu("英文")}>
              英文
          </Menu.Item>
        </Menu>
        }>
          <a className="ant-dropdown-link">
            国际化 <Icon type="down" />
          </a>
      </Dropdown>
    </div>
    <div  className={styles.usename}>
      <Dropdown overlay={
          <Menu>
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <Link to='/canvas'>个人中心</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3" onClick={()=>{
            props.loginOuts()
          }}>退出登录</Menu.Item>
        </Menu>
      } trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
          <img className={styles.imgs} src="https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png" alt=""/>
          <span>chenmanjie</span>
          {/* <Portrait /> */}
        </a>
      </Dropdown>
    </div>
    </Header>
    <Layout>
      <Sider>
        <Menus />
      </Sider>
      <Content>
          <Switch>
            <Route path="/canvas" component={Canvas} />
            <Redirect from="/" exact to="/questions/add" ></Redirect>
             {/* 渲染该用户拥有的路由 */}
                {
                  props.myView.map((item)=>{
                    if (item.children){
                      return item.children.map((value,key)=>{
                        return  <Route key={key} path={value.path} component={value.component}/>
                      })
                    }
                  })
                }
                {/* 403路由 */}
                {props.forbiddenView.map((item)=>{
                  return <Redirect key={item} from={item} to="/403"/>
                    }
                )}

                {/* 剩余路由去404 */}
                <Redirect to="/404"/>
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
    locale:state.global.locale,
    myView: state.user.myView,
    forbiddenView: state.user.forbiddenView

  }
}
const mapDispatchToProps=dispatch=>{
  return{
    changeLocal: payload=>{
      dispatch({
        type: 'global/changeLocale',
        payload
      })
    },
    loginOuts(){
       dispatch({
          type:"user/loginOuts"
       })
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IndexPage)