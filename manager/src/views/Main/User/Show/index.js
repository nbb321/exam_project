import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './index.scss';
import { Form,Tabs} from 'antd';

function UserIndex(props){
     console.log(props)
    //form表单提交按钮
    let handleSubmit=e=>{
      
    }
    useEffect(()=>{
       props.Usershow();
    },[]);
  const { TabPane } = Tabs;
  return (
    <Form onSubmit={handleSubmit} className={styles.main}>
       <h2 className={styles.title}>用户展示</h2>
        <div className={styles.content}>
        <div className="card-container">
            <Tabs type="card">
            <TabPane tab="Tab Title 1" key="1">
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
                <p>Content of Tab Pane 1</p>
            </TabPane>
            <TabPane tab="Tab Title 2" key="2">
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
                <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab="Tab Title 3" key="3">
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
                <p>Content of Tab Pane 3</p>
            </TabPane>
            </Tabs>
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
    Usershow(){
        dispatch({
          type:"questions/userShow"
        })
      }
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(UserIndex));
