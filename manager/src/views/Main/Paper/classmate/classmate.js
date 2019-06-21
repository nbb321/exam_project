import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './classmate.scss';
import {Table} from "antd";
import {Link} from "dva/router";

function classmateIndex(props){
    let pathname=props.location.search.slice(4);
    props.studentDialong();
    //根据pathname去请求接口
    
    useEffect(()=>{
        
    },[])
    return (
        <div className={styles.wrapper}>
            
        </div>

  )
 
}
//props的类型检查
classmateIndex.propTypes={

}
//props的默认值
classmateIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.classmate
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      studentDialong(){
        dispatch({
            type:"paper/studentDialong"
        })
      },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(classmateIndex);
