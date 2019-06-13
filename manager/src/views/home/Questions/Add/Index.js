import React, {useState,useEffect} from 'react';
// import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input ,Select, Button,Form} from 'antd';
import  styles from './Index.scss';
import Editor from 'for-editor';

  const { Option } = Select;

  function AddPage(props){  
    useEffect(()=>{
      props.Subject();
      props.ExamType();
      props.Type();
    },[])
    const { getFieldDecorator } =props.form;
    let [value,upValue]=useState("");
    let [values,upValues]=useState("");

    let handleChange=e=>{
      upValue(value=e);
      console.log(value)
    }
    let handleChangeVal=e=>{
      upValues(values=e);
      console.log(values)
    }
    // let handleChangeIpt=(value)=>{
    //   // upIpt(ipt=e);
    //   console.log(value)
    // }
    let handleSubmit = e => {
      props.form.validateFields((err, values) => {
        console.log(values)
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
    let handleChangeExam=value=>{
      console.log(value)
    }
    let handleSub=value=>{
      console.log(value)
    }
    let haneleTypeId=value=>{
      console.log(value)
    }
    let {subjectList,examTypeList,TypeList}=props;
    console.log(subjectList)
     return <Form onSubmit={handleSubmit} className={styles.content}>
     <div className={styles.content}>
      
        <h2 className={styles.title}>添加试题</h2>
        <div className={styles.main}>
                    <div className={styles.markcont}>
                        <p>题目信息</p>
                        {getFieldDecorator('titleText', {
                            validateTrigger:"onBlur",
                            rules: [{ required: true, message: '标题不能为空' }],
                        })(
                            <Input
                            placeholder="请输入题目标题，不能超过20字"
                            />,
                        )}
                        <p>题目管理</p>
                         <Editor value={value} height="auto" onChange={handleChange}  /> 
                    </div>
                    <div>
                         <p>请选择考试类型：</p>
                        <Select onChange={handleChangeExam} defaultValue="周考一" style={{ width: 120 }}>
                            {
                                examTypeList&&examTypeList.map((item,index)=>{
                                return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            }
                        </Select>
                      </div>
                      <div>
                         <p>请选择课程类型：</p>
                        <Select onChange={handleSub} defaultValue="javaScript上" style={{ width: 120 }}>
                            {
                                subjectList&&subjectList.map((item,index)=>{
                                    return <Option className={styles.li} value={item.subject_id} key={index} value={item.subject_text}>{item.subject_text}</Option>
                                })
                            }
                        </Select>
                      </div>
                      <div>
                         <p>请选择题目类型：</p>
                        <Select onChange={haneleTypeId} defaultValue="简答题" style={{ width: 120 }}>
                            {
                                TypeList&&TypeList.map((item,index)=>{
                                return <Option value={item.questions_type_id} key={item.questions_type_id} value={item.questions_type_text}>{item.questions_type_text}</Option>
                                })
                            }
                        </Select>
                      </div>
                      <div className={styles.markcont}>
                        <h2>答案信息</h2>
                         <Editor value={values} height="auto" onChange={handleChangeVal}  /> 
                      </div>
                 <Button type="primary" htmlType="submit" >提交</Button>
        </div></div> 
        </Form>
    
}
  //props的类型检查
  AddPage.propTypes={

  }
  //props的默认值
  AddPage.defaultProps={
      
  }
  const mapStateToProps=state=>{
      // console.log("state",state)
      return{
        ...state.questions
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        Subject(){
            dispatch({
              type:"questions/subject"
            })
          },
          ExamType(){
            dispatch({
              type:"questions/examType"
            })
          },
          Type(){
            dispatch({
              type:"questions/type"
            })
          }
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddPage))