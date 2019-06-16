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
    <div className={styles.main}>
        <Form.Item>
            {getFieldDecorator('titleText', {
                validateTrigger:"onBlur",
                rules: [{ required: true, message: '标题不能为空' }],
            })(
                <Input />,
            )}
        </Form.Item>
    </div>

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
