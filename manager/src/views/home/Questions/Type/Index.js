import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './Index.scss';
import { Table,  Button , Modal , Input } from 'antd';


function TypePage(props){
      let data=[];
     if (props.TypeList.length>0){
         data=props.TypeList
        data.forEach((item)=>{
             item['key']=item.questions_type_sort
        })
     }
  console.log(data)
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
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
  //获取login
  useEffect(()=>{
    props.Type();
    
  },[]);
  return (
// console.log(item.questions_type_id,item.questions_type_text,item.questions_type_sort)
    <div className={styles.main}>
    <h2 className={styles.titType}>试题分类</h2>
    <div className={styles.typesContent}>
    <div className={styles.btn}>
        <Button type="primary"  className={styles.btns}>
            +添加类型
        </Button>
        <Modal
        title="创建新类型"
        okText="确认"
        cancelText="取消"
        >
        <Input placeholder="请输入类型名称" />
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
export default connect(mapStateToProps,mapDispatchToProps)(TypePage);

 
