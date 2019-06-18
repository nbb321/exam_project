import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Form,Tabs,Table} from 'antd';

function UserIndex(props){
    // console.log(props.identityviewList)
    let {usershowList,useridentityList,apiAuthorityList,relationList,viewauthorityList,identityviewList}=props;
    usershowList.forEach( item => {
       item.key=item.user_id;
    });
    useridentityList.forEach( item => {
        item.key=item.identity_id;
    });
    apiAuthorityList.forEach( item => {
      item.key=item.api_authority_id;
    });
    relationList.forEach( item => {
        item.key=item.identity_api_authority_relation_id;
    });
    viewauthorityList.forEach( item => {
        item.key=item.view_authority_id;
    });
    identityviewList.forEach( item => {
        item.key=item.identity_view_authority_relation_id;
    });
    //form表单提交按钮
    let handleSubmit=e=>{
      
    }
    useEffect(()=>{
       props.Usershow();
       props.Useridentity();
       props.ApiAuthority();
       props.Relation();
       props.ViewAuthority();
       props.IdentityView();
    },[]);
  const { TabPane } = Tabs;
  const columns = [
    {
       title: '用户名',
       dataIndex: 'user_name'
    },
    {
        title: '密码',
        dataIndex: 'user_pwd',
    },
    {
        title: '身份',
        dataIndex: 'identity_text',
    }]
    const columnsIdentity = [
        {
           title: '身份名称',
           dataIndex: 'identity_text'
    }];
    const columnsApiAuthority = [
        {
           title: 'api权限名称',
           dataIndex: 'api_authority_text'
        },
        {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
        },
        {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
    }];
    const columnsRelation = [
        {
           title: '身份名称',
           dataIndex: 'identity_text'
        },
        {
            title: 'api权限名称',
            dataIndex: 'api_authority_text',
        },
        {
            title: 'api权限url',
            dataIndex: 'api_authority_url',
        },
        {
            title: 'api权限方法',
            dataIndex: 'api_authority_method',
    }];
    const columnsViewauthority=[
        {
           title: '试图权限名称',
           dataIndex: 'view_authority_text'
        },
        {
            title: '试图id',
            dataIndex: 'view_id',
        }];
    const columsIdentityview=[
        {
           title: '身份',
           dataIndex: 'identity_text'
        },
        {
            title: '试图名称',
            dataIndex: 'view_authority_text',
        },
        {
            title: '试图id',
            dataIndex: 'view_id',
        }];
  return (
    <Form onSubmit={handleSubmit} className={styles.main}>
       <h2 className={styles.title}>用户展示</h2>
        <div className={styles.content}>
        <div className="card-container">
            <Tabs type="card">
            <TabPane tab="用户数据" key="1">
               <h2 className={styles.title}>用户数据</h2>
               <Table columns={columns}  dataSource={usershowList&&usershowList} />
            </TabPane>
            <TabPane tab="身份数据" key="2">
              <h2 className={styles.title}>身份数据</h2>
              <Table columns={columnsIdentity}  dataSource={useridentityList&&useridentityList} />
            </TabPane>
            <TabPane tab="api接口权限" key="3">
              <h2 className={styles.title}>api接口权限</h2>
              <Table columns={columnsApiAuthority}  dataSource={apiAuthorityList&&apiAuthorityList} />
            </TabPane>
            <TabPane tab="身份和api接口关系" key="4">
              <h2 className={styles.title}>身份和api接口关系</h2>
              <Table columns={columnsRelation}  dataSource={relationList&&relationList} />
            </TabPane>
            <TabPane tab="试图接口权限" key="5">
              <h2 className={styles.title}>试图接口权限</h2>
              <Table columns={columnsViewauthority}  dataSource={viewauthorityList&&viewauthorityList} />
            </TabPane>
            <TabPane tab="身份和视图权限关系" key="6">
              <h2 className={styles.title}>身份和视图权限关系</h2>
              <Table columns={columsIdentityview}  dataSource={identityviewList&&identityviewList} />
            </TabPane>
            </Tabs>
        </div>
        </div>
    </Form>

  )
  
}
//props的类型检查
UserIndex.propTypes={

}
//props的默认值
UserIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    //展示身份
    Usershow(){
        dispatch({
          type:"questions/userShow"
        })
      },
    //展示身份数据
    Useridentity(){
        dispatch({
          type:"questions/useridentity"
        })
      },
    //api接口权限
    ApiAuthority(){
        dispatch({
          type:"questions/apiAuthority"
        })
      },
    //身份和api的关系
    Relation(){
        dispatch({
          type:"questions/relation"
        })
      },
   //获取试图接口权限数据
   ViewAuthority(){
       dispatch({
           type:"questions/viewAuthority"
       })
   },
   //获取身份和试图权限关系
   IdentityView(){
    dispatch({
        type:"questions/identityview"
    })
}
   }
  

}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));
