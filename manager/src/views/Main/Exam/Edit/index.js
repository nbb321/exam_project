import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import {  Form,Button,Drawer,Select,Modal } from 'antd';

const { Option } = Select;
function UserShow(props){
    useEffect(()=>{
      props.View();
      props.Subject();
      props.ExamType();
      props.Type();
    },[]);
    //侧边栏的默认值
    let [visibles,upvisible]=useState(false)
    //控制添加弹出框
    let [showLoading,upLoading]=useState(false);
    let [obj,upObj]=useState({});
    let {establishList}=props;

    localStorage.setItem("establish",JSON.stringify(establishList))
    let listArr=JSON.parse(localStorage.getItem("establish"))
    //侧边栏
    let {subjectList,examTypeList,TypeList,ViewList}=props;
    let [subject_id,upSubject] = useState('');
    let [exam_id,upExam_id] = useState('');
    let [questions_type_id,upQuestion] = useState('');
  

     //改变课程类型
     let handleClickLi=(id)=>{
      upSubject(subject_id=id)
    }
    //改变考试类型
    let handleChange=(value)=>{
      upExam_id(exam_id=value);
    } 
    //改变题目类型
    let handleChangeId=(value)=>{
      upQuestion(questions_type_id=value)
    }
    //点击查询
    let handleOnClick=()=>{
      let {Condition}=props;
          Condition({
            subject_id,
            exam_id,
            questions_type_id
          })  
    }
    //点击详情
    let ClickCompile=(item)=>{
      upObj(obj=item)
      upLoading(showLoading=true)
      }
    //点击跳转详情
    let handleClick=(item)=>{  
        props.ClickItem(item)  
     } 
    //```````````````````
    let handleSubmit=e=>{

    }
    //点击提交按钮
    let handClickBtn=e=>{
     let items=JSON.parse(localStorage.getItem("list"));
      props.EstablishExam({
        subject_id:items.subject_id,
        exam_id:items.exam_id,
        title:items.title,
        number:items.number,
        start_time:items.startTime,
        end_time:items.endTime,
      })
      props.history.push('/exam/list') 
    }
    //点击添加按钮
    let handClickAdd=e=>{
      upvisible(visibles=true)
    }
    //点击侧边栏进行关闭
    let onClose=e=>{
      upvisible(visibles=false)
    }
    //点击添加
    let pushItme=item=>{
      listArr.questions.push(item)
      console.log(listArr.questions)
    }
    //删除试卷
    let removeItem=index=>{
      listArr.questions.splice(index,1);
      localStorage.setItem("establish",JSON.stringify(listArr))
      console.log(listArr)  
      console.log(listArr.questions)
    }
    // const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className={styles.main}>
      <h2 className={styles.title}>创建事件</h2>
      <div className={styles.contbox}>
      <div className={styles.top}>
        <Button onClick={handClickAdd} className={styles.btn}>添加新题</Button>
      </div>
      <Drawer
          className={styles.slideBox}
          width="500"
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visibles}
        >
        <div className={styles.boxs}>
            <div className={styles.top_Top}>
            <div className={styles.active}>
              <span className={styles.top_Span}>Corers:</span>
                {
                  subjectList&&subjectList.map((item)=>{
                    return <li onClick={()=>handleClickLi(item.subject_id)} className={styles.li} key={item.subject_id}>{item.subject_text}</li>
                  })
                }
            </div>
          </div>
          <div className={styles.top_Bom}>
            <div className={styles.Bom_item}>
                <p>考试类型</p>
                <Select onChange={handleChange}  style={{ width: 130,margin:15,height:35 }}>
                  {
                    examTypeList&&examTypeList.map((item)=>{
                      return <Option key={item.exam_id}  value={item.exam_id}>{item.exam_name}</Option>
                    })
                  }
                </Select>
            </div>
            <div className={styles.Bom_item}>
                <p>题目类型</p>
                <Select className={styles.select}  onChange={handleChangeId} style={{ width: 130,margin:15,height:35 }}>
                  {
                    TypeList&&TypeList.map((item)=>{
                      return <Option key={item.questions_type_id} value={item.questions_type_id}>{item.questions_type_text}</Option>
                    })
                  }                
                </Select>
            </div>
              <Button className={styles.inquire} onClick={handleOnClick} style={{ width: 100,margin:15}} type="primary">查询</Button>
            </div>
          <div className={styles.center}>
                  {
                    ViewList&&ViewList.map((item)=>{
                      return <div key={item.questions_id} className={styles.center_Item}>
                                <div className={styles.left} onClick={()=>handleClick(item)}>
                                    <div className={styles.Title}>{item.title}</div>
                                      <div className={styles.Item_Box}>
                                        <div className={styles.small_Item}>
                                            <span>{item.questions_type_text}</span>
                                            <span>{item.subject_text}</span>
                                            <span>{item.exam_name}</span>
                                        </div>
                                      </div>
                                    <div className={styles.Item_Name}>{item.user_name}</div>
                                </div>
                                <p className={styles.compile}>
                                  <span onClick={()=>pushItme(item)}>添加</span>
                                  <span onClick={()=>ClickCompile(item)}>详情</span>
                                </p>
                            </div>
                         })
                  } 
          </div>
          <Modal visible={showLoading}
            onCancel={()=>upLoading(false)}
            onOk={()=>{
                upLoading(false);
            }}
            >
            <div>
                <div>{obj.title}</div>
                <div>{obj.questions_stem}</div>
            </div>
        </Modal>
       </div> 
    </Drawer>
          <div className={styles.cont_Item}>
            <h3>{establishList.titleSlid}</h3>
              <div className={styles.examTime}>
                <span>考试时间:1个半小时</span>
                <span>监考人：刘于</span>
                <span>开始考试时间：{new Date(Number(establishList.start_time)).toLocaleString()} </span>
                <span>阅卷人：刘于</span>
              </div>          
          </div>
          <div className={styles.itemsArr}>
            {
              listArr.questions&&listArr.questions.map((item,index)=>{
                return <div key={item.json_path} className={styles.arr_item}>
                  <p><span>{item.title}</span> <span onClick={()=>removeItem(index)}>删除</span></p>
                  <div className={styles.color}>
                    {item.questions_stem}
                  </div>
                </div>
              })
            }
          </div>
            <div className={styles.Btnbig}>
            <Button type="primary" className={styles.btns} onClick={handClickBtn}>创建考试</Button>
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
    ...state.exam,
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    //删除试卷
    RemoveExam(){
      dispatch({
          type:"exam/removeExam"
      })
    },
  //创建考试
  EstablishExam(payload){
    dispatch({
      type:"exam/establishExam",
      payload
    })
  },
  //```````````侧边栏
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
export default connect(mapStateToProps,mapDispatchToProps)(UserShow);
