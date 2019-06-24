import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import ReactMarkdown from 'react-markdown';
import styles from "./readPaper.scss"
import {Progress} from "antd"

function readPaperIndex(props){
    let pathname=props.location.search.slice(10);
    let {readPaperlist}=props;
    console.log(readPaperlist)
    useEffect(()=>{
       props.readPaper(pathname);
    },[])
    return (
        <div className={styles.wrapper}>
            <div className={styles.conetnt}>
                <p className={styles.title}>阅卷</p>
                <div className={styles.con}>
                <div className={styles.left}>
                    {
                        readPaperlist.questions&&readPaperlist.questions.map((item,index)=>{
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
                     <h3 style={{fontSize:'20px',fontWeight:'bold'}}>{readPaperlist.student_name}</h3>
                     <div className={styles.source}>得分：<span style={{fontSize:'25px',fontWeight:'bold',color:"blue"}}>{readPaperlist.score}</span></div>
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
      readPaper(pathname){
        dispatch({
            type:"readPaper/readPaper",
            payload:pathname
        })
      },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(readPaperIndex);
