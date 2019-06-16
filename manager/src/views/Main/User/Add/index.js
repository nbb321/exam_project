import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Button ,Form,Input,Select} from 'antd';

const { Option } = Select;

function UserIndex(props){
    //添加用户的change事件的初始值
    let [changeId,UpChangeid]=useState("")
    useEffect(()=>{
        props.Identityid();
        props.Userid();
        // props.Adduser()
    },[]);
    let {identityidList,useridList}=props;
    console.log()
    //form表单提交按钮
    let handleSubmitOne=e=>{
        
    }
    //添加用户
    let HandAdduser=e=>{
        e.preventDefault();
        props.form.validateFields((err, values) => {
            console.log('Received values of form: ', values.user_Null,values.pwd);
            
        });
    }
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
    //添加用户的change事件
    let ChangeIdentityid=(value)=>{
        UpChangeid(changeId=value)
        console.log(changeId);
    }
    //重置按钮
  let handleReset=e=>{
      props.form.resetFields()
  }
  let [showVal,upShowVal]=useState(false);
  let [userVal,upShowuser]=useState(true);
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmitOne} className={styles.main}>
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
                                <Select style={{ width: 140 }}>
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
                                <Select style={{ width: 140 }}>
                                    {
                                        identityidList&&identityidList.map((item)=>{
                                        return <Option key={item.identity_id} value={item.identity_id}>{item.identity_text}</Option>
                                        })
                                    }
                                </Select>
                            )}
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
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
                    <Button type="primary" htmlType="submit">
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
                            initialValue: "请选择视图"
                        })(
                        <Select style={{ width: 140 }}>
                            <Option  value="是是是">对对对</Option>

                            {/* {
                                examTypeList&&examTypeList.map((item)=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            } */}
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
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
                            initialValue: "请选择身份设置api"
                        })(
                        <Select style={{ width: 140 }}>
                            <Option  value="发发发">上位法</Option>

                            {/* {
                                examTypeList&&examTypeList.map((item,index)=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            } */}
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('Api_port', {
                            rules: [{ required: true, message: "api是必须得" }],
                            initialValue: "请选api"
                        })(
                        <Select style={{ width: 140 }}>
                            <Option  value="apu">api</Option>

                            {/* {
                                examTypeList&&examTypeList.map((item,index)=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            } */}
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
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
                        <Select style={{ width: 140 }}>
                            <Option  value="发发发">上位法</Option>

                            {/* {
                                examTypeList&&examTypeList.map((item,index)=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            } */}
                        </Select>
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('id_dentity', {
                            rules: [{ required: true, message: "视图权限id是必须得" }],
                            initialValue: "请选视图权限id"
                        })(
                        <Select style={{ width: 140 }}>
                            <Option  value="id">id</Option>

                            {/* {
                                examTypeList&&examTypeList.map((item,index)=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            } */}
                        </Select>
                        )}
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
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
UserIndex.propTypes={

}
//props的默认值
UserIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.management
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      //添加身份
      Edit(payload){
        dispatch({
          type:"management/edit",
          payload
        })
      },
      //获取身份id数据
      Identityid(){
        dispatch({
          type:"management/identityid"
        })
      },
      //更新用户id
      Userid(){
        dispatch({
          type:"management/userid"
        })
      },
      //添加用户
      Adduser(payload){
        dispatch({
          type:"management/adduser",
          payload
        })
      },
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));
