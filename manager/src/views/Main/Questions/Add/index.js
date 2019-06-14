import React, {useEffect} from 'react';
// import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input ,Select, Button,Form} from 'antd';
import  styles from './index.scss';
import Editor from 'for-editor';

  const { Option } = Select;

  function AddPage(props){  
    useEffect(()=>{
      props.Subject();
      props.ExamType();
      props.Type();
      props.UserInfo()
    },[])
    let {subjectList,examTypeList,TypeList}=props;
    const { getFieldDecorator } =props.form;
    //点击提交，获取所有的参数
    let handleSubmit = e => {
      props.form.validateFields((err, values) => {
        let {Addquest}=props;
        if (values.titleText!==""&&values.questions_type_id!==""&&values.value!==""&&values.subject_id!==""&&values.exam_id!==""&&values.questions_answer!=="") {
          Addquest({
            questions_type_id:values.questions_type_id,
            questions_stem:values.value,
            subject_id:values.subject_id,
            exam_id:values.exam_id,
            user_id:props.user_id,
            questions_answer:values.valueowen,
            title:values.titleText
          })
        }
      });
    };

     return <Form onSubmit={handleSubmit} className={styles.content}>
     <div className={styles.content}>
        <h2 className={styles.title}>添加试题</h2>
              <div className={styles.main}>
                    <div className={styles.markcont}>
                        <p>题目信息</p>
                          <Form.Item>
                              {getFieldDecorator('titleText', {
                                  validateTrigger:"onBlur",
                                  rules: [{ required: true, message: '标题不能为空' }],
                              })(
                                  <Input
                                  placeholder="请输入题目标题，不能超过20字"
                                  />,
                              )}
                          </Form.Item>
                          <p>题目管理</p>
                          <Form.Item>
                            {getFieldDecorator('value', {
                                rules: [{ required: true, message: "答案信息必填" }],
                                initialValue: '',
                            })(
                                <Editor height='auto'/>
                            )}
                        </Form.Item>
                         {/* <Editor value={value} height="auto" onChange={handleChange}  />  */}
                    </div>
                    <div>
                         <p>请选择考试类型：</p>
                         <Form.Item>
                            {getFieldDecorator('exam_id', {
                                rules: [{ required: true, message: "题目类型必选" }],
                                initialValue: "请选择题目类型"
                            })(
                              <Select style={{ width: 120 }}>
                                  {
                                      examTypeList&&examTypeList.map((item,index)=>{
                                      return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                      })
                                  }
                              </Select>
                            )}
                        </Form.Item>
                        
                      </div>
                      <div>
                         <p>请选择课程类型：</p>
                         <Form.Item>
                            {getFieldDecorator('subject_id', {
                                rules: [{ required: true, message: "题目类型必选" }],
                                initialValue: "请选择题目类型"
                            })(
                              <Select  style={{ width: 120 }}>
                                  {
                                      subjectList&&subjectList.map((item,index)=>{
                                          return <Option className={styles.li} value={item.subject_id} key={index} value={item.subject_id}>{item.subject_text}</Option>
                                      })
                                  }
                             </Select>
                            )}
                        </Form.Item>
                      </div>
                      <div>
                         <p>请选择题目类型：</p>
                         <Form.Item>
                            {getFieldDecorator('questions_type_id', {
                                rules: [{ required: true, message: "题目类型必选" }],
                                initialValue: "请选择题目类型"
                            })(
                              <Select  style={{ width: 120 }}>
                                  {
                                      TypeList&&TypeList.map((item,index)=>{
                                      return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                                      })
                                  }
                              </Select>
                            )}
                        </Form.Item>
                        
                      </div>
                      <div className={styles.markcont}>
                        <h2>答案信息</h2>
                        <Form.Item>
                            {getFieldDecorator('valueowen', {
                                rules: [{ required: true, message: "答案信息必填" }],
                                initialValue: '',
                            })(
                                <Editor height='auto'/>
                            )}
                        </Form.Item>
                         {/* <Editor value={valueowen} height="auto" onChange={handleChangeVal}  />  */}
                      </div>
                      <Button type="primary" htmlType="submit" >提交</Button>
                </div>
            </div> 
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
          },
          Addquest(payload){
            dispatch({
              type:"questions/addquest",
              payload
            })
          },
          UserInfo(){
            dispatch({
              type:"questions/userInfo"
            })
          }
          
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddPage))
