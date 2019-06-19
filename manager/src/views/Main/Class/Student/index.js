import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import {  Form,Input,Select } from 'antd';

const { Option } = Select;
function UserShow(props){
    useEffect(()=>{
    
    },[]);
    //form表单的点击事件
  let handSubmit=e=>{
  }

  const { getFieldDecorator } = props.form;
  return (
    <Form className={styles.main} onSubmit={handSubmit}>
        <h2 className={styles.title}>学生管理</h2>
        <div className={styles.content}>
            <div>
            <Form.Item>
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
                          {/* {
                              examTypeList&&examTypeList.map((item,index)=>{
                              return <Option key={index} value={item.exam_id}>{item.exam_name}</Option>
                              })
                          } */}
                    </Select>
                    )}
                  </Form.Item>
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
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserShow));
