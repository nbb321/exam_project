import React,{useEffect} from 'react';
import { connect } from 'dva';
import styles from "./index.scss"
function MarkingIndex(props){
  useEffect(()=>{
  
  },[]);
  return (
    <div className={styles.main}>
     <h2 className={styles.titType}>批卷</h2>
     
    </div>

  )
  
}
//props的类型检查
MarkingIndex.propTypes={

}
//props的默认值
MarkingIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.class
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
  
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(MarkingIndex)
