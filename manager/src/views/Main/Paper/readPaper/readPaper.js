import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import ReactMarkdown from 'react-markdown';
import styles from "./readPaper.scss"
import {Slider,Modal, Button} from "antd"

function readPaperIndex(props){
    let pathname=props.location.params.id;
    let {readPaperlist,chanValue}=props;
    const { confirm } = Modal;

    useEffect(()=>{
       props.readPaper(pathname);
    },[]);
    let changeValue = e =>{
        // e就代表的是value值  将e的值传给后台
        chanValue({
            e
        })
    }
    let showConfirm=(score,name)=> {
        confirm({
          title: '确定提交阅卷结果?',
          content: '分数值是'+score,
          okText:'确定',
          cancelText:'取消',
          onOk() {
           //点击ok的时候改变里面的内容
            Modal.success({
                title: '阅卷结果',
                content: '批改试卷成功 ' + name + '得分' + score,
                okText:'知道了'
              });
          },
        });
      }
    return (
        <div className={styles.wrapper}>
            <div className={styles.conetnt}>
                <p className={styles.title}>阅卷</p>
                <div className={styles.con}>
                <div className={styles.left}>
                    {
                        readPaperlist&&readPaperlist.questions&&readPaperlist.questions.map((item,index)=>{
                        return (
                            <div className={styles.listItem} key={index}>
                                <h3 className={styles.listTitle}>{index+1}.{item.title}<span className={styles.span}>{item.questions_type_text}</span></h3>
                                <div className={styles.answer}>
                                <ReactMarkdown source={item.questions_stem}/>
                                </div>
                                <div className={styles.student}>
                                    <div className={styles.studentLeft}>
                                        <h3>学生答案</h3>
                                        
                                    </div>
                                    <div className={styles.studentRight}>
                                        <h3>标准答案</h3>
                                        <ReactMarkdown source={item.questions_answer}/>
                                    </div>
                                </div>
                            
                            </div>
                        )
                    })
                    }
                </div>
                <div className={styles.right}>
                   <div className={styles.dia}>
                     <h3 style={{fontSize:'20px',fontWeight:'bold'}}>{readPaperlist&&readPaperlist.student_name}</h3>
                     <div className={styles.source}>得分：<span style={{fontSize:'25px',fontWeight:'bold',color:"blue"}}>{readPaperlist&&readPaperlist.score}</span></div>
                     <Slider defaultValue={0} disabled={false} onChange={changeValue}/>
                     <Button onClick={()=>showConfirm(readPaperlist&&readPaperlist.score,readPaperlist&&readPaperlist.student_name)} className={styles.sure}>确定</Button>
                   </div>
                </div>
                </div>
            </div>
        </div>
  )
 
}
//props的类型检查
readPaperIndex.propTypes={

}
//props的默认值
readPaperIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.readPaper,
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      readPaper(payload){
        dispatch({
            type:"readPaper/readPaper",
            payload
        })
      },
      chanValue(payload){
        dispatch({
            type:"readPaper/chanValue",
            payload
        })
      }
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(readPaperIndex);
