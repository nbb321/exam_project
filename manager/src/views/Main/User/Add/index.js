import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Input ,Form} from 'antd';

function UserIndex(props){

    //form表单提交按钮
    let handleSubmit=e=>{
      
    }
    useEffect(()=>{
    
    },[]);

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className={styles.main}>
       <h2 className={styles.title}>添加考试</h2>
        <div className={styles.content}>
            <div className={styles.cont_Item}>
              <p><span>*</span>试卷名称</p>
                  <Form.Item>
                    {getFieldDecorator('titleText', {
                        validateTrigger:"onBlur",
                        rules: [{ required: true, message: '标题不能为空' }],
                    })(
                        <Input />,
                    )}
                  </Form.Item>
            </div>
        </div>
    </Form>

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
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));
