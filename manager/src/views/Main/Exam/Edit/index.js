import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Input, Form,Button } from 'antd';

function UserShow(props){
    useEffect(()=>{
    
    },[]);

    let {establishList}=props;
    console.log(establishList)
    let handleSubmit=e=>{
        
    }

  const { getFieldDecorator } = props.form;
  return (
    <Form className={styles.main} onSubmit={handleSubmit} >
        <h2 className={styles.title}>创建事件</h2>
        <div className={styles.content}>
          <div className={styles.top}>
            <Button className={styles.btn}>添加新题</Button>
          </div>
          <div className={styles.cont_Item}>
            <h3>{establishList.title}</h3>
          </div>
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
    ...state.exam
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserShow));
