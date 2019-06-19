import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Table,  Button , Modal , Input ,Form , Select} from 'antd';

function classIndex(props){
    //    console.log(props.classManagementList)
  let {classManagementList,mangerRoomList,mangerClassNameList}=props;
  //控制添加弹出框
  let [showLoading,upLoading]=useState(false);
  //获取更改value值
  let [classValue,upClass]= useState("");
  let [roomValue,upRoom]= useState("");
  let [nameValue,upName]= useState("");
  let [removeValue,upRemove]= useState("");
  useEffect(()=>{
    props.ClassManagement();
    props.MangerRoom();
    props.MangerClassName();
    //  props.addGrade();//进行添加
    props.DeleteGrade();
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
             <span style={{color:'blue',fontSize:'14px',paddingRight:'5px'}} value={text.grade_id} onClick={()=>{
                console.log(1)
             }}>{'修改'}</span>
             <span style={{color:'#ccc',fontSize:'14px'}}>|</span>
             <span style={{color:'blue',fontSize:'14px',paddingLeft:'5px'}} value={text.grade_id} onClick={(e)=>{
                upRemove(removeValue=e.target.getAttribute('value'));
                props.DeleteGrade({
                    grade_id:removeValue
                })
             }}>{'删除'}</span>
             </>
           ),
    }];
    const { getFieldDecorator } = props.form;
    const { Option } = Select;
    let handleChangeClass=(e)=>{
        upClass(classValue = e.target.value);
    }
    let handleChangeRoom=(e)=>{
        upRoom(roomValue=e.key);
    }
    let handleChangeClassName=(e)=>{
        upName(nameValue=e.key);
    }
  return (
    <div className={styles.main}>
     <h2 className={styles.titType}>班级管理</h2>
     <div className={styles.typesContent}>
       <div className={styles.btn}>
       <Button type="primary" className={styles.btns} onClick={()=>upLoading(true)} style={{background:'blue'}}>
            +添加班级
       </Button>
       <Modal visible={showLoading}
         onCancel={()=>upLoading(false)}
         onOk={()=>{
           props.AddGrade({
                grade_name:classValue,
                room_id:roomValue,
                subject_id:nameValue
            });
            upLoading(false);
         }}
         className={styles.show}>
          <Form className="login-form">
            <h4>添加班级</h4>
            <Form.Item>
                <h5><span style={{color:'red'}}>*</span>班级名</h5>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    placeholder="班级名"
                    style={{ width: 420 }}
                    onChange={handleChangeClass}
                  />
                )}
            </Form.Item>
            <Form.Item>
                <h5><span style={{color:'red'}}>*</span>教室号</h5>
                <Select
                    labelInValue
                    defaultValue={{ key: '请选择教室号' }}
                    style={{ width: 420 }}
                    onChange={handleChangeRoom}
                >
                    {mangerRoomList&&mangerRoomList.map((item)=>{
                        return <Option value={item.room_text} key={item.room_id}>{item.room_text}</Option>
                    })}
               </Select>
            </Form.Item>
            <Form.Item>
                <h5><span style={{color:'red'}}>*</span>课程名</h5>
                <Select
                    labelInValue
                    defaultValue={{ key: '课程名' }}
                    style={{ width: 420 }}
                    onChange={handleChangeClassName}
                >
                     {mangerClassNameList&&mangerClassNameList.map((item)=>{
                        return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                    })}
               </Select>
            </Form.Item>
          </Form>
        </Modal>
       </div>
       <div className={styles.tableType}>
          <Table columns={columns}  dataSource={classManagementList&&classManagementList} />
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
    //渲染班级名
    ClassManagement(){
        dispatch({
          type:"class/classManagement"
        })
      },
    //渲染点击弹框后的教室号
    MangerRoom(){
        dispatch({
          type:"class/mangerRoom"
        })
      },
    //渲染点击弹框后的课程名
    MangerClassName(){
        dispatch({
          type:"class/mangerClassName"
        })
      },
    //添加班级
    AddGrade(payload){
        dispatch({
            type:"class/addGrade",
            payload
          })
    },
    //删除班级
    DeleteGrade(payload){
        dispatch({
            type:"class/deleteClass",
            payload
          })
    },

   }
 }
export default connect(mapStateToProps,mapDispatchToProps)( Form.create()(classIndex));
