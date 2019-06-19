import React,{useState,useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Table,  Button , Modal , Input ,Form} from 'antd';

function UserShow(props){
    useEffect(()=>{
      props.GetClassroom();
    },[]);
  let {getClassroomList}=props;
  console.log(getClassroomList)
  let handleSubmit=e=>{
    
  }
    //控制添加弹出框
    let [showLoading,upLoading]=useState(false);
    //获取更改value值
    let [iptValue,upValue]=useState("");
    getClassroomList.forEach( item=> {
      item.key=item.room_id
     });
    const columns = [
      {
         title: '教室号',
         dataIndex: 'room_text'
      },
      {
          title: '操作',
          render:text=>(
          <span onClick={()=>handClickItem(text.room_id)}>{'删除'}</span>
      )
    }]
    //删除点击的每一个
    let handClickItem=id=>{
      console.log(id);
      props.Removeroom({
        room_id:id
      })
    }
  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit} className={styles.main}>
        <h2 className={styles.titType}>试题分类</h2>
        <div className={styles.typesContent}>
        <div className={styles.btn}>
        <Button type="primary"  onClick={()=>upLoading(true)} className={styles.btns}>
            +添加教室
        </Button>
        <Modal visible={showLoading}
         onCancel={()=>upLoading(false)}
         onOk={()=>{
            // props.insertQuestionsType({
            //   text:iptValue,
            //   sort:new Date().getTime()
            // })
            upLoading(false);
         }}
         >
        <div>
          <p className={styles.cont_Title}><span>*</span>教师号</p>
          <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
                initialValue: "36310"
              })(
                <Input
                  placeholder="请输入你要添加的教师号"
                  onChange={(e)=>{
                    upValue(e.target.value);
                  }}
                />
              )}
          </Form.Item>
        </div>
        </Modal>
        </div>
        <div className={styles.tableType}>
          <Table columns={columns} dataSource={getClassroomList}/>
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
    ...state.class
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    //获取教室数据
    GetClassroom(){
      dispatch({
          type:"class/getClassroom"
      })
    },
    //删除教室
    Removeroom(payload){
      dispatch({
          type:"class/removeroom",
          payload
      })
    },
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserShow));