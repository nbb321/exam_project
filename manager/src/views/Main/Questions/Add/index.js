import React, {useEffect} from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input ,Select, Button} from 'antd';
import  styles from './index.scss';

  const { Option } = Select;

  function AddPage(props){  
    useEffect(()=>{
      props.Subject();
      props.ExamType();
      props.Type();
    },[])

    let {subjectList,examTypeList,TypeList}=props;
    // console.log(TypeList)
     return <div className={styles.content}>
        <h2 className={styles.title}>添加试题</h2>
        <div className={styles.main}>
                    <div className={styles.markcont}>
                        <p>题目信息</p>
                        <Input placeholder="请输入题目标题,不超过20个" />
                        <p>题目管理</p>
                        <Markdown />
                    </div>
                    <div>
                         <p>请选择考试类型：</p>
                        <Select defaultValue="周考一" style={{ width: 120 }}>
                            {
                                examTypeList&&examTypeList.map((item,index)=>{
                                return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                                })
                            }
                        </Select>
                      </div>
                      <div>
                         <p>请选择课程类型：</p>
                        <Select defaultValue="javaScript上" style={{ width: 120 }}>
                            {
                                subjectList&&subjectList.map((item,index)=>{
                                    return <Option className={styles.li} key={index} value={item.subject_text}>{item.subject_text}</Option>
                                })
                            }
                        </Select>
                      </div>
                      <div>
                         <p>请选择题目类型：</p>
                        <Select defaultValue="简答题" style={{ width: 120 }}>
                            {
                                TypeList&&TypeList.map((item,index)=>{
                                return <Option key={item.questions_type_id} value={item.questions_type_text}>{item.questions_type_text}</Option>
                                })
                            }
                        </Select>
                      </div>
                      <div className={styles.markcont}>
                        <h2>答案信息</h2>
                        <Markdown />
                      </div>
                 <Button type="primary" htmlType="submit" >提交</Button>
        </div>
    </div> 
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
export default connect(mapStateToProps,mapDispatchToProps)(AddPage)