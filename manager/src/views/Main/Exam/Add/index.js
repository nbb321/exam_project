import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';


function UserIndex(props){
    // console.log(props.identityviewList)
    useEffect(()=>{
       
    },[]);
  return (
    <div className={styles.box}>111</div>

  )
  
}
//props的类型检查
UserIndex.propTypes={

}
//props的默认值
UserIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    
   }
  

}
export default connect(mapStateToProps,mapDispatchToProps)(UserIndex);
