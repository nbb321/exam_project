import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Table,  Button , Modal , Input ,Form} from 'antd';

function TypePage(props){
    //控制添加弹出框
    let [showLoading,upLoading]=useState(false);

    let data=[];
     if (props.TypeList.length>0){
         data=props.TypeList
        data.forEach((item)=>{
             item['key']=item.questions_type_sort
        })
     }
    const columns = [
        {
          title: '类型ID',
          dataIndex: 'questions_type_id',
          key: 'questions_type_id',
        },
        {
          title: '类型名称',
          dataIndex: 'questions_type_text',
          key: 'questions_type_text',
        },
        {
          title: '操作',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
  //获取login
  useEffect(()=>{
    props.Type();
  },[]);

  const { getFieldDecorator } = props.form;
  return (
    <div className={styles.main}>
        <h2 className={styles.titType}>试题分类</h2>
        <div className={styles.typesContent}>
        <div className={styles.btn}>
        <Button type="primary"  onClick={()=>upLoading(true)} className={styles.btns}>
            +添加类型
        </Button>
        <Modal visible={showLoading} onCancel={()=>upLoading(false)}>
          <Form>
            <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    placeholder="请输入你要添加的值"
                  />
                )}
            </Form.Item>
          </Form>
        </Modal>
        </div>
        <div className={styles.tableType}>
            <Table columns={columns}  dataSource={props.TypeList} />
        </div>
        </div>
    </div>

  )
  
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
export default connect(mapStateToProps,mapDispatchToProps)( Form.create()(TypePage));