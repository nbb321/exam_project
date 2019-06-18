import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Input, Form } from 'antd';

function UserShow(props){
    useEffect(()=>{
    
    },[]);

  const { getFieldDecorator } = props.form;
  return (
    <Form className={styles.main}>
        <h2 className={styles.title}>班级管理</h2>
        <div className={styles.content}>

        </div>
    </Form>
     

  )
  
}
//props的类型检查
UserShow.propTypes={

}
//props的默认值
UserShow.defaultProps={

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
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserShow));
