import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
 import styles from "./readPaper.scss"
import {Table} from "antd";
import {Link} from "dva/router";

function readPaperIndex(props){
    let pathname=props.location.search.slice(10);
    let {readPaperlist}=props;
    console.log(readPaperlist)
    // paperlist.forEach( item=> {
    //     item.key=item.grade_id
    //    });
    useEffect(()=>{
       props.readPaper(pathname);
    },[])
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>阅卷</p>
            <div className={styles.con}></div>
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
