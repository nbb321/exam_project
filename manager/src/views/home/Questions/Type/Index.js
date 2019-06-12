import React,{useEffect} from 'react';
import { connect } from 'dva';
import styles from './Index.scss';
import "antd/dist/antd.css";



function TypePage(props){
  //获取login
  
  useEffect(()=>{
    props.Type();
    console.log(props.TypeList)
  },[]);
  
  return <div className={styles.content}>
  <h2 className={styles.title}>试题分类</h2>
  <div className={styles.main}>
             
  </div>
</div>
  
}
//props的类型检查
TypePage.propTypes={

}
//props的默认值
TypePage.defaultProps={

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
    }
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(TypePage);

 
