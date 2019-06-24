import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
 import styles from "./img.scss"
import {Table} from "antd";
import {Link} from "dva/router";

function imgIndex(){
    // let pathname=props.location.search.slice(10);
    // console.log(pathname)
    // props.readPaper(pathname);
    // console.log(props)
    // let {paperlist}=props;
    // paperlist.forEach( item=> {
    //     item.key=item.grade_id
    //    });
    useEffect(()=>{
        //  props.readPaper(pathname);
    },[])
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>图片的上传</p>
            <div className={styles.con}></div>
        </div>
  )
 
}
//props的类型检查
imgIndex.propTypes={

}
//props的默认值
imgIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.readPaper
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    //   readPaper(pathname){
    //     dispatch({
    //         type:"readPaper/readPaper",
    //         payload:pathname
    //     })
    //   },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(imgIndex);
