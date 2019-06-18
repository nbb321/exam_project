import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import {  Form,Button,Drawer } from 'antd';

function UserShow(props){
    useEffect(()=>{
    
    },[]);
    //侧边栏的默认值
    let [visibles,upvisible]=useState(false)
    let {establishList}=props;
    console.log(establishList)
    let handleSubmit=e=>{
        
    }
    //点击提交按钮
    let handClickBtn=e=>{
      props.history.push('/exam/list') 
    }
    //点击添加按钮
    let handClickAdd=e=>{
      upvisible(visibles=true)
    }
    //点击侧边栏进行关闭
    let onClose=e=>{
      upvisible(visibles=false)
    }
    // const { getFieldDecorator } = props.form;
  return (
    <Form className={styles.main} onSubmit={handleSubmit} >
        <h2 className={styles.title}>创建事件</h2>
        <div className={styles.content}>
          <div className={styles.top}>
            <Button onClick={handClickAdd} className={styles.btn}>添加新题</Button>
          </div>
          <Drawer
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visibles}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
          <div className={styles.cont_Item}>
            <h3>{establishList.title}</h3>
            <div className={styles.examTime}>
              <span>考试时间:1个半小时</span>
              <span>监考人：刘于</span>
              <span>开始考试时间：2018.9.10 10:00 </span>
              <span>阅卷人：刘于</span>
            </div>
            <Button type="primary" onClick={handClickBtn}>创建考试</Button>
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
export default connect(mapStateToProps,mapDispatchToProps)(UserShow);
