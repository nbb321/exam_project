import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Table,  Button , Modal , Input ,Form} from 'antd';

function classIndex(props){
    
    
  useEffect(()=>{
    
  },[]);

  return (
    <div className={styles.main}>
        <h2 className={styles.titType}>班级管理</h2>
        <div className={styles.typesContent}>
        <div className={styles.btn}>
        <Button type="primary"  className={styles.btns}>
            +添加班级
        </Button>
        </div>
        </div>
    </div>

  )
  
}
//props的类型检查
classIndex.propTypes={

}
//props的默认值
classIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    Type(){
      dispatch({
        type:'questions/type'
      })
    },
    insertQuestionsType(payload){
      dispatch({
        type:'questions/insertQuestionsType',
        payload
      })
    }
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)( Form.create()(classIndex));
