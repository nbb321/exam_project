import React,{useEffect} from 'react';
import { connect } from 'dva';
import styles from './Index.scss';
import "antd/dist/antd.css";


function ViewPage(props){
  //获取login
  useEffect(()=>{
     props.View();
  },[]);
  
  return <div className={styles.content}>
  <h2 className={styles.title}>查看试题</h2>
  <div className={styles.main}>
             
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
   return {
    
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
     View(){
       dispatch({
         type:"questions/view"
       })
     }
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(ViewPage);

 
