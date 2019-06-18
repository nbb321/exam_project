import React,{useEffect,useState} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Input ,Form,Select,Button,DatePicker,InputNumber} from 'antd';

const { Option } = Select;

function UserIndex(props){
    let {examTypeList,subjectList}=props;

    useEffect(()=>{
      props.ExamType();
      props.Subject();
    },[]);

 const [startVal,changeStartVal]=useState(0)
 const [endVal,changeEndVal]=useState(0)

  const { getFieldDecorator } = props.form;
  let handClick=e=>{
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log(values)
    })
  }
  
const dateToMs=(date)=> {
  let result = new Date(date).getTime();
  changeStartVal(result)
}
const endDateToMs=(date)=> {
  let result = new Date(date).getTime();
  changeEndVal(result)
}
console.log(startVal,endVal)
  return (
    <Form className={styles.main} onSubmit={handClick}>
       <h2 className={styles.title}>添加考试</h2>
        <div className={styles.content}>
            <div className={styles.cont_Item}>
              <div className={styles.keyValue}>
                  <p><span>*</span>试卷名称</p>
                  <Form.Item className={styles.formThing}>
                      {getFieldDecorator('titleText', {
                          validateTrigger:"onBlur",
                          rules: [{ required: true, message: '标题不能为空' }],
                      })(
                          <Input className={styles.names} />,
                      )}
                  </Form.Item>
              </div>
              <div className={styles.keyValue}>
                  <p><span>*</span>选择考试类型</p>
                  <Form.Item className={styles.formThing}>
                      {getFieldDecorator('examType', {
                          rules: [{ required: true, message: "考试类型不能为空" }]
                      })(
                      <Select style={{ width: 140,height:30 }} >
                          {
                              examTypeList&&examTypeList.map((item,index)=>{
                              return <Option key={index} value={item.exam_id}>{item.exam_name}</Option>
                              })
                          }
                    </Select>
                    )}
                  </Form.Item>
              </div>
              <div className={styles.keyValue}>
                  <p><span>*</span>选择课程</p>
                  <Form.Item className={styles.formThing}>
                      {getFieldDecorator('select_courses', {
                          rules: [{ required: true, message: "课程不能为空" }]
                      })(
                      <Select style={{ width: 140,height:30 }}>
                          {
                              subjectList&&subjectList.map((item,index)=>{
                                  return <Option className={styles.li}  key={index} value={item.subject_id}>{item.subject_text}</Option>
                              })
                          }
                    </Select>
                    )}
                  </Form.Item>
              </div>
              <div className={styles.keyValue}>
                  <p><span>*</span>设置题量</p>
                  <Form.Item className={styles.formThing}>
                          {getFieldDecorator('number', {
                                rules: [{ required: true, message: "数组不能为空" }]
                            })( 
                            <InputNumber min={3} max={10} />
                          )}
                  </Form.Item>
              </div>
              <div className={styles.keyValue}>
                  <p><span>*</span>考试时间</p>
                 <div className={styles.inline}>
                    <Form.Item className={styles.formThing}>
                          {getFieldDecorator('startTime', {
                              rules: [{ required: true, message: "数组不能为空" }]
                            })( 
                                <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="开始时间"
                                onChange={(e)=>{
                                    dateToMs(e._d)
                                }}
                            />
                          )}
                      </Form.Item>
                       <p>-</p>
                      <Form.Item>
                          {getFieldDecorator('endTime', {
                              rules: [{ required: true, message: "数组不能为空" }]
                            })( 
                                <DatePicker
                                showTime
                                format="YYYY-MM-DD HH:mm:ss"
                                placeholder="结束时间"
                                onChange={(e)=>{
                                  endDateToMs(e._d)
                                }}
                            />
                          )}
                      </Form.Item> 
                 </div>  
              </div>
              <div className={styles.bom}>
                  <Button  type="primary" >创建试卷</Button>
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
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
     //考试类型
    ExamType(){
      dispatch({
        type:"questions/examType"
      })
    },
    //课程类型
    Subject(){
      dispatch({
        type:"questions/subject"
      })
    },
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));