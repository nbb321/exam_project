import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
// import ReactMarkdown from 'react-markdown';
import styles from "./readPaper.scss"

import {Table} from "antd";
import {Link} from "dva/router";

function readPaperIndex(props){
    let pathname=props.location.search.slice(10);
    let {readPaperlist}=props;
    console.log(readPaperlist.questions)
    // paperlist.forEach( item=> {
    //     item.key=item.grade_id
    //    });
    useEffect(()=>{
       props.readPaper(pathname);
    },[])
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>阅卷</p>
            <div className={styles.con}>
              <div className={styles.left}>
                {
                    readPaperlist.questions&&readPaperlist.questions.map((item,index)=>{
                    return (
                        <div className={styles.listItem} key={index}>
                            <h3 className={styles.listTitle}>{index+1}.{item.title}<span className={styles.span}>{item.questions_type_text}</span></h3>
                            <div className={styles.answer}>
                                {item.questions_stem}
                            </div>

                        </div>
                    )
                })
                }
              </div>
              <div className={styles.right}></div>
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
