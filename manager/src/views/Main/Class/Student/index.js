import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import {  Form,Input,Select,Button } from 'antd';

const { Option } = Select;
function UserShow(props){
    useEffect(()=>{
      props.GetClassroom();
      props.Grade();
    },[]);
    //form表单的点击事件
  let handSubmit=e=>{
  }
  let {getClassroomList}=props;
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
                                getClassroomList&&getClassroomList.map((item,index)=>{
                                return <Option key={item.room_id} value={item.room_id}>{item.room_text}</Option>
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
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserShow));
