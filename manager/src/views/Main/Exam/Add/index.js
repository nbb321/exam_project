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
 const dateToMs=(date)=> {
    let result = new Date(date).getTime();
    changeStartVal(result)
  }
  const endDateToMs=(date)=> {
    let result = new Date(date).getTime();
    changeEndVal(result)
  }
  let handleSubmit=e=>{
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log(values);
    })
  }
  //btn的点击事件
  let handleClick=e=>{
    props.form.validateFields((err, values) => {
        localStorage.setItem('EstablishExams',JSON.stringify({
            subject_id:values.subject_id,
            exam_id:values.exam_id,
            title:values.title,
            number:values.number,
            start_time:startVal,
            end_time:endVal
        }))
        props.history.push('/exam/edit');
        
      })
  }
  return (
    <Form className={styles.main} onSubmit={handleSubmit} >
       <h2 className={styles.title}>添加考试</h2>
        <div className={styles.content}>
            <div className={styles.cont_Item}>
              <div className={styles.keyValue}>
                  <p><span>*</span>试卷名称</p>
                  <Form.Item className={styles.formThing}>
                      {getFieldDecorator('title', {
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
                      {getFieldDecorator('exam_id', {
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
                      {getFieldDecorator('subject_id', {
                          rules: [{ required: true, message: "课程不能为空" }]
                      })(
                      <Select style={{ width: 140,height:30 }}>
                          {
                              subjectList&&subjectList.map((item,index)=>{
                                  return <Option className={styles.li}  key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
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
                  <Button  type="primary" onClick={handleClick}>创建试卷</Button>
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
    ...state.questions,
    ...state.exam
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
    //创建考试
    // EstablishExam(payload){
    //   dispatch({
    //     type:"exam/establishExam",
    //     payload
    //   })
    // }
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));
