import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import {  Form,Input,Select,Button,Table } from 'antd';

const { Option } = Select;
function UserShow(props){
    useEffect(()=>{
      props.GetClassroom();
      props.Grade();
      props.Students();
    },[]);
    //form表单的点击事件
  let handSubmit=e=>{
  }
  let {getClassroomList,gradeList,studentsList}=props;
  studentsList.forEach( item=> {
    item.key=item.student_id;
   });

   const columns = [
    {
       title: '姓名',
       dataIndex: 'student_name'
    },
    {
        title: '学号',
        dataIndex: 'student_id',
    },
    {
        title: '班级',
        dataIndex: 'grade_name',
    },{
        title: '教室',
        dataIndex: 'room_text',
    },{
        title: '密码',
        dataIndex: 'student_pwd',
    },{
        title: '操作',
        render: text=>(
          <span onClick={()=>handClickItem(text.student_id)}>{'删除'}</span>
        ),
    }]
    let handClickItem=id=>{
      props.Removestudent({
        student_id:id
      })
    }
  const { getFieldDecorator } = props.form;
  return (
    <Form className={styles.main} onSubmit={handSubmit}>
        <h2 className={styles.title}>学生管理</h2>
        <div className={styles.content}>
          <div className={styles.student_Top}>
              <Form.Item className={styles.formThing}>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    placeholder="请输入学生姓名"
                  />,
                )}
              </Form.Item>
              <Form.Item className={styles.formThing}>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "考试类型不能为空" }]
                        })(
                        <Select style={{ width: 140,height:30 }} >
                            {
                                getClassroomList&&getClassroomList.map((item,index)=>{
                                return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
                                })
                            }
                      </Select>
                      )}
              </Form.Item>
              <Form.Item className={styles.formThing}>
                        {getFieldDecorator('exam_id', {
                            rules: [{ required: true, message: "考试类型不能为空" }]
                        })(
                        <Select style={{ width: 140,height:30 }} >
                            {
                                gradeList&&gradeList.map((item,index)=>{
                                return <Option key={item.grade_id} value={item.grade_id}>{item.grade_name}</Option>
                                })
                            }
                      </Select>
                      )}
              </Form.Item>
                <Button type="primary" htmlType="submit">
                    搜索
                </Button>
                <Button style={{marginLeft:10 }} >
                    重置
                </Button>
          </div>
          <div className={styles.student_Bom}>
          <Table columns={columns} dataSource={studentsList}/>
          </div>
        </div>
    </Form>
     

  )
  
}
//props的类型检查
UserShow.propTypes={

}
//props的默认值
UserShow.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.class
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    //获取教室数据
    GetClassroom(){
      dispatch({
          type:"class/getClassroom"
      })
    },
    //获取已经分配教室的班级的接口
    Grade(){
      dispatch({
          type:"class/grade"
      })
    },
     //获取所有已经分班的学生的接口
    Students(){
      dispatch({
          type:"class/students"
      })
    },
    //删除学生的接口
    Removestudent(payload){
      dispatch({
          type:"class/removestudent",
          payload
      })
    },
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserShow));
