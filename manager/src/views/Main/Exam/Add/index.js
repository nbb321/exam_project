import React,{useState,useEffect} from 'react';
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

  const { getFieldDecorator } = props.form;
  let [startValue,updStartValue]=useState(null)
  let [endValue,upEndValue]=useState(null)
  let [endOpen,upEndOpen]=useState(false)
  let disabledStartDate = startValue => {
    const endValue = endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  let disabledEndDate = endValue => {
    const startValue = startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };
  let [field,upfield]=useState("");
  let  onChange = (field, value) => {
    
    field=value
    // upfield(field=value)
  };

  let onStartChange = value => {
  onChange('startValue', value);
  };

  let onEndChange = value => {
  onChange('endValue', value);
  };
 
  let handleStartOpenChange = open => {
    if (!open) {
      upEndOpen(endOpen=true)
      //setState({ endOpen: true });
    }
  };

  let handleEndOpenChange = open => {
    upEndOpen(endOpen=open)
    //setState({ endOpen: open });
  };

  let onChanges=value=>{
    console.log(value)
  }
  let handClick=e=>{
    e.preventDefault();
    props.form.validateFields((err, values) => {
      console.log(values)
    })
  }
  return (
    <Form className={styles.main}>
       <h2 className={styles.title}>添加考试</h2>
        <div className={styles.content}>
            <div className={styles.cont_Item}>
              <div className={styles.keyValue}>
                  <p><span>*</span>试卷名称</p>
                  <Form.Item>
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
                  <Form.Item>
                      {getFieldDecorator('examType', {
                          rules: [{ required: true, message: "考试类型不能为空" }],
                          initialValue: ""
                      })(
                      <Select style={{ width: 140,height:30 }}>
                          {
                              examTypeList&&examTypeList.map((item,index)=>{
                              return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                              })
                          }
                    </Select>
                    )}
                  </Form.Item>
              </div>
              <div className={styles.keyValue}>
                  <p><span>*</span>选择课程</p>
                  <Form.Item>
                      {getFieldDecorator('select_courses', {
                          rules: [{ required: true, message: "课程不能为空" }],
                          initialValue: ""
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
                  <Form.Item>
                      <InputNumber min={3} max={10} onChange={onChanges} />
                  </Form.Item>
              </div>
              <div className={styles.keyValue}>
                  <p><span>*</span>考试时间</p>
                      <Form.Item>
                          <DatePicker
                            disabledDate={disabledStartDate}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                            value={startValue}
                            placeholder="Start"
                            onChange={onStartChange}
                            onOpenChange={handleStartOpenChange}
                          />
                      </Form.Item>
                      <Form.Item>
                          <DatePicker
                              disabledDate={disabledEndDate}
                              showTime
                              format="YYYY-MM-DD HH:mm:ss"
                              value={endValue}
                              placeholder="End"
                              onChange={onEndChange}
                              open={endOpen}
                              onOpenChange={handleEndOpenChange}
                            />
                      </Form.Item>
                </div> 
                <div className={styles.bom}>
                  <Button  type="primary" onClick={handClick}>创建试卷</Button>
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
