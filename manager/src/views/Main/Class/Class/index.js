import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Table,  Button , Modal , Input ,Form} from 'antd';

function classIndex(props){
    console.log(props.classManagementList)
  let {classManagementList}=props;
  //控制添加弹出框
  let [showLoading,upLoading]=useState(false);
  //获取更改value值
  let [iptValue,upValue]=useState(""); 
  useEffect(()=>{
    props.ClassManagement();
  },[]);
  const columns = [
    {
       title: '班级名',
       key:'grade_name',
       dataIndex: 'grade_name'
    },
    {
        title: '课程名',
        key:'subject_text',
        dataIndex: 'subject_text',
    },
    {
        title:'教室号',
        key:'room_text',
        dataIndex:'room_text'
    },
    {
        title: '操作',
        key:'grade_id',
        render: text => (
            <>
             <span onClick={()=>{
                 
             }}>{'修改'}</span>
             <span>|</span>
             <span>{'删除'}</span>
             </>
           ),
    }];
    const { getFieldDecorator } = props.form;
    let handleSubmit=(e)=>{
        console.log(e)
    }
  return (
    <div className={styles.main}>
     <h2 className={styles.titType}>班级管理</h2>
     <div className={styles.typesContent}>
       <div className={styles.btn}>
       <Button type="primary" className={styles.btns} onClick={()=>upLoading(true)}>
            +添加班级
       </Button>
       <Modal visible={showLoading}
         onCancel={()=>upLoading(false)}
         onOk={()=>{
            props.insertQuestionsType({
              text:iptValue,
              sort:new Date().getTime()
            })
            upLoading(false);
         }}
         >
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    placeholder="请输入你要添加的值"
                    onChange={(e)=>{
                      upValue(e.target.value);
                    }}
                  />
                )}
            </Form.Item>
          </Form>
        </Modal>
       </div>
       <div className={styles.tableType}>
                <Table columns={columns}  dataSource={classManagementList&&classManagementList } />
            </div>
     </div>
    </div>

  )
  
}
//props的类型检查
classIndex.propTypes={

}
//props的默认值
classIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.class
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    ClassManagement(){
        dispatch({
          type:"class/classManagement"
        })
      },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)( Form.create()(classIndex));
