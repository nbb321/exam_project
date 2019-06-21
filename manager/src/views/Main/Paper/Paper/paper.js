import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './paper.scss';

function paperIndex(props){
    let {paperList}=props;
    useEffect(()=>{
        paperList()
    },[])
  return (
    <div className={styles.wrapper}>
        1111
        <p className={styles.title}>待批班级</p>
        <div className={styles.wrap}>
        </div>
    </div>

  )
  
}
//props的类型检查
paperIndex.propTypes={

}
//props的默认值
paperIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.class
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      paperList(){
        dispatch({
            type:"paper/paper"
        })
      },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(paperIndex);
