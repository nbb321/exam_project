import React, {useState,useEffect} from 'react';
import { Select, Button} from 'antd';
import { connect } from 'dva';
import styles from  './index.scss';

  const { Option } = Select;

  function ViewPage(props){

    useEffect(()=>{
      props.View();
      props.Subject();
      props.ExamType();
      props.Type();
      }, []);

      let {subjectList,examTypeList,TypeList,ViewList}=props;
      let [subject_id,upSubject] = useState('');
      let [exam_id,upExam_id] = useState('');
      let [questions_type_id,upQuestion] = useState('');

    let handleClickLi=(id)=>{
      upSubject(subject_id=id)
    }

    let handleChange=(value)=>{
      upExam_id(exam_id=value);
    }

    let handleChangeId=(value)=>{
      upQuestion(questions_type_id=value)
    }

    let handleOnClick=()=>{
      let {Condition}=props;
          Condition({
            subject_id,
            exam_id,
            questions_type_id
          })  
    }

    let handleClick=(item)=>{  
        props.ClickItem(item)
        props.history.push('/questions/default?id='+item.questions_type_id) 
    } 
     return  <div className={styles.boxs}>
       <div className={styles.title}>查看试题</div>
       <div className={styles.top}>
          <div className={styles.top_Top}>
            <div>
              <span className={styles.top_Span}>课程类型：</span>
                {
                  subjectList&&subjectList.map((item,index)=>{
                    return <li onClick={()=>handleClickLi(item.subject_id)} className={styles.li} key={item.subject_id}>{item.subject_text}</li>
                  })
                }
            </div>
          </div>
          <div className={styles.top_Bom}>
            <div className={styles.Bom_item}>
                <p>考试类型</p>
                <Select onChange={handleChange}   onChange={handleChange} style={{ width: 150,margin:15,height:35 }}>
                  {
                    examTypeList&&examTypeList.map((item,index)=>{
                      return <Option key={item.exam_id}  value={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                    })
                  }
                </Select>
            </div>
            <div className={styles.Bom_item}>
                <p>题目类型</p>
                <Select  onChange={handleChangeId} style={{ width: 150,margin:15,height:35 }}>
                  {
                    TypeList&&TypeList.map((item,index)=>{
                      return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                    })
                  }                
                </Select>
            </div>
              <Button className={styles.Btn} onClick={handleOnClick} style={{ width: 150,margin:15}} type="primary">查询</Button>
            </div>
          </div>
          <div className={styles.center}>
                  {
                    ViewList&&ViewList.map((item,index)=>{
                      return <div key={item.questions_id} className={styles.center_Item} onClick={()=>handleClick(item)}>
                                <div className={styles.Title}>{item.title}</div>
                                  <div className={styles.Item_Box}>
                                    <div className={styles.small_Item}>
                                        <span>{item.questions_type_text}</span>
                                        <span>{item.subject_text}</span>
                                        <span>{item.exam_name}</span>
                                    </div>
                                    <p>编辑</p>
                                  </div>
                                <div className={styles.Item_Name}>{item.user_name}</div>
                            </div>
                      })
                  } 
          </div>
       </div> 
}
  //props的类型检查
  ViewPage.propTypes={

  }
  //props的默认值
  ViewPage.defaultProps={
      
  }
  const mapStateToProps=state=>{
      // console.log("state",state)
      return{
        ...state.questions
      }
  }
  const mapDispatchToProps=dispatch=>{
    return{
      View(){
        dispatch({
          type:"questions/view"
        })
      },
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
      Condition(payload){
        dispatch({
          type:"questions/condition",
          payload
        })
      },
      ClickItem(payload){
        dispatch({
          type:"questions/clickItem",
          payload
        })
      }
      
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ViewPage)