import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Button , Form , Input , Select } from 'antd';

const { Option } = Select;

function UserPages(props){
    // console.log(props.relationsList)
    //第一个添加
    //添加用户的change事件的初始值
    let [identity_id,UpChangeid]=useState("")

    //第一个更新
    //更新用户的用户change事件的初始值
    let [user_id,UpUser]=useState("")
    //更新用户的身份change事件的初始值
    let [identity_ids,UpIdentity]=useState("")
    
    //第五个给身份设定Api权限
    //给身份设定Api权限身份id改变的时候
    let [identityId,updataidentity]=useState("")
    //给身份设定Api权限api视图权限
    let [portValue,updataport]=useState("")

    //第六个给身份设置视图权限
    //给身份设置视图权限身份id改变的时候
    let [Viewidentity_id,updataidentityView]=useState("")
    //给身份设定视图接口视图权限id
    let [authority_id,upauthority_id]=useState("")
    useEffect(()=>{
        props.Identityid();
        props.Userid();
        props.Relations();
        props.Authoritys()  
    },[]);
    let {identityidList,useridList,relationsList,authoritysList}=props;

    //第一个
    //添加用户的change事件
    let ChangeIdentityid=(value)=>{
        UpChangeid(identity_id=value)
    }
    //添加用户
    let HandAdduser=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
             props.Adduser({
                user_name:values.user_Null,
                user_pwd:values.pwd,
                identity_id
             })
            
        });
    }

    //第一个
    //更新用户的用户change事件
    let changeUpdata=(value)=>{
        UpUser(user_id=value);
    }
    //更新用户的身份change事件
    let identityUpdara=(value)=>{
        UpIdentity(identity_ids=value);
    }
    //点击更新用户
    let handUpdate=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            props.UserUpdata({
                user_id,
                user_name:values.user_Child,
                user_pwd:values.pwd,
                identity_id:identity_ids,
                avatar:""
            })
        })
    }

    //第二个
    //添加身份
    let addiDentity=(e)=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values.identity_Name);
            props.Edit({
                identity_text:values.identity_Name
            });
        });
    }

    //第三个
    //添加api接口权限
    let handPermissions=(e)=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            props.AddEdit({
                api_authority_text:values.Permission_Name,
                api_authority_url:values.Permission_Url,
                api_authority_method:values.Permission_method
            })
        })
    }

    //第四个
    //添加视图权限
   
    let handView=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            let data=JSON.parse(values.view);
             props.AuthorityView({
                view_authority_text:data.view_authority_text,
                view_id:data.view_id
             })
        })
    }

    //第五个
    //给身份设定api权限身份id改变的时候
    let handidentity=value=>{
        updataidentity(identityId=value);
    }
    //给身份设定api权限身份权限改变的时候
    let handApi_port=value=>{
        updataport(portValue=value);
    }
    //给身份设定接口Api点击确定按钮
    let handPort=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            props.SetIdentityApi({
                identity_id:identityId,
                api_authority_id:portValue
            })
        })
    }

    //第六个
    //给身份设定视图接口权限身份id
    let handView_dentity=value=>{
        updataidentityView(Viewidentity_id=value);
    }
     //给身份设定视图接口视图权限id
    let handid_dentity=value=>{
        upauthority_id(authority_id=value);
    }
    //给身份设定视图接口点击事件
    let handClicView=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            props.SetIdentityView({
                identity_id:Viewidentity_id,
                view_authority_id:authority_id
            })
        })
    }
    //重置按钮
  let handleReset=e=>{
      props.form.resetFields()
  }
  let [showVal,upShowVal]=useState(false);
  let [userVal,upShowuser]=useState(true);
  const { getFieldDecorator } = props.form;
  return (
    <Form  className={styles.main}>
       <h2 className={styles.title}>添加用户</h2>
        <div className={styles.content}>
            {/* 第一个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}>
                    <Button  className={styles.color} onClick={()=>{
                        upShowVal(false);
                        upShowuser(true)
                    }} >
                        添加用户
                    </Button>
                    <Button onClick={()=>{
                    upShowVal(true);
                    upShowuser(false);
                    }} >
                    更新用户
                    </Button>
                </div>
            {showVal?<div className={styles.upUser}>
                        <Form.Item>
                            {getFieldDecorator('userid_top', {
                                rules: [{ required: true, message: "身份id是必须得" }],
                                initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 140 }} onChange={changeUpdata}>
                                    {
                                        useridList&&useridList.map((item)=>{
                                        return <Option key={item.user_id} value={item.user_id}>{item.user_name}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('user_Child')(
                                <Input
                                placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd')(
                                <Input
                                placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userid_Child', {
                                rules: [{ required: true, message: "身份id是必须得" }],
                                initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 140 }} onChange={identityUpdara}>
                                    {
                                        identityidList&&identityidList.map((item)=>{
                                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" onClick={handUpdate}>
                            确定
                        </Button>
                        <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                        </Button>
                    </div>:null}
                    {userVal?<div className={styles.upUser}>
                        <Form.Item>
                            {getFieldDecorator('user_Null',)(
                                <Input
                                placeholder="请输入用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('pwd',)(
                                <Input
                                placeholder="请输入密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('userid_Null', {
                                 rules: [{ required: true, message: "身份id是必须得" }],
                                 initialValue: "请选择身份id"
                            })(
                                <Select style={{ width: 140 }} onChange={ChangeIdentityid}>
                                { 
                                    identityidList&&identityidList.map((item)=>{
                                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                    })
                                }
                                </Select>
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit" onClick={HandAdduser}>
                            确定
                        </Button>
                        <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                        </Button>
                    </div>:null}
            </div>
            {/* 第二个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button  className={styles.color}>添加身份</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('identity_Name', 
                        )(
                            <Input
                            placeholder="请输入身份名称"
                            />,
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={addiDentity}>
                            确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                    </Button>
                </div>
            </div>
             {/* 第三个 */}
             <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button  className={styles.color}>添加api接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('Permission_Name', 
                            )(
                            <Input
                            placeholder="请输入权限名称"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Permission_Url', 
                            )(
                            <Input
                            placeholder="请输入权限url"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Permission_method', 
                           )(
                            <Input
                            placeholder="请输入权限方法"
                            />,
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handPermissions}>
                            确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                            重置
                    </Button>
                </div>
            </div>
            {/* 第四个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button  className={styles.color}>添加视图接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('view', {
                            rules: [{ required: true, message: "视图是必须得" }],
                            initialValue: "请选择已有视图"
                        })(
                        <Select style={{ width: 140 }}>
                             {
                                relationsList&&relationsList.map((item,index)=>{
                                return <Option key={item.identity_view_authority_relation_id} value={JSON.stringify(item)}>{item.view_authority_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handView}>
                    确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                    重置
                    </Button>
                </div>
            </div>
            {/* 第五个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                    <Button className={styles.color}>添加身份设置api接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('identity', {
                            rules: [{ required: true, message: "身份设置api是必须得" }],
                            initialValue: "请选择身份id"
                        })(
                        <Select style={{ width: 140 }} onChange={handidentity}>
                            { 
                                identityidList&&identityidList.map((item)=>{
                                    return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Api_port', {
                            rules: [{ required: true, message: "api是必须得" }],
                            initialValue: "请选api接口权限"
                        })(
                        <Select style={{ width: 140 }} onChange={handApi_port}>
                            {
                                authoritysList&&authoritysList.map((item,index)=>{
                                return <Option key={item.api_authority_id} value={item.api_authority_id}>{item.api_authority_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handPort}>
                    确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                    重置
                    </Button>
                </div>
            </div>
            {/* 第六个 */}
            <div className={styles.cont_Item}>
                <div className={styles.top}> 
                        <Button  className={styles.color}>添加身份视图接口权限</Button>
                </div>
                <div className={styles.upUser}>
                    <Form.Item>
                        {getFieldDecorator('View_dentity', {
                            rules: [{ required: true, message: "身份ID是必须得" }],
                            initialValue: "请选择身份id"
                        })(
                        <Select style={{ width: 140 }} onChange={handView_dentity}>
                            { 
                                identityidList&&identityidList.map((item)=>{
                                    return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('id_dentity', {
                            rules: [{ required: true, message: "视图权限id是必须得" }],
                            initialValue: "请选视图权限id"
                        })(
                        <Select style={{ width: 140 }} onChange={handid_dentity}>
                            {
                                relationsList&&relationsList.map((item,index)=>{
                                return <Option key={item.identity_view_authority_relation_id} value={item.identity_view_authority_relation_id}>{item.view_authority_text}</Option>
                                })
                            }
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handClicView}>
                    确定
                    </Button>
                    <Button style={{marginLeft:10 }} onClick={handleReset} >
                    重置
                    </Button>
                </div>
            </div>
        </div>
    </Form>

  )
  
}
//props的类型检查
UserPages.propTypes={

}
//props的默认值
UserPages.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      //添加身份
      Edit(payload){
        dispatch({
          type:"questions/edit",
          payload
        })
      },
      //获取身份id数据
      Identityid(){
        dispatch({
          type:"questions/identityid"
        })
      },
      //更新用户id
      Userid(){
        dispatch({
          type:"questions/userid"
        })
      },
      //添加用户
      Adduser(payload){
        dispatch({
          type:"questions/adduser",
          payload
        })
      },
      //更新用户
      UserUpdata(payload){
        dispatch({
          type:"questions/userUpdata",
          payload
        })
      },
     //添加api接口权限
      AddEdit(payload){
        dispatch({
          type:"questions/addEdit",
          payload
        })
      },
      //展示身份和视图权限关系
      Relations(){
        dispatch({
          type:"questions/relations"
        })
      },
      //展示api接口权限数据
      Authoritys(){
        dispatch({
          type:"questions/authoritys"
        })
      },
      //添加视图权限
      AuthorityView(payload){
        dispatch({
            type:"questions/authorityView",
            payload
          })
      },
      //给身份设定api接口权限
      SetIdentityApi(payload){
        dispatch({
            type:"questions/setIdentityApi",
            payload
          })
      },
      //给身份设定视图权限
      SetIdentityView(payload){
        dispatch({
            type:"questions/setIdentityView",
            payload
          })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserPages));


