import React, {useEffect} from 'react';
import Markdown from "@/components/Markdown";
import { connect } from 'dva';
import { Input ,Select, Button} from 'antd';
import  styles from './index.scss';

  const { Option } = Select;
  function LoginPage(props){  
    useEffect(()=>{
 
    }, []);
  
     return <div className={styles.content}>
        <h2 className={styles.title}>添加试题</h2>
        <div className={styles.main}>
                    <div className={styles.markcont}>
                        <p>题目信息</p>
                        <Input placeholder="请输入题目标题,不超过20个" />
                        <p>题目管理</p>
                        <Markdown />
                    </div>
                    <div>
                         <p>请选择考试类型：</p>
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div>
                         <p>请选择课程类型：</p>
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div>
                         <p>请选择题目类型：</p>
                        <Select defaultValue="lucy" style={{ width: 120 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div className={styles.markcont}>
                        <h2>答案信息</h2>
                        <Markdown />
                      </div>
                 <Button type="primary" htmlType="submit" >提交</Button>
        </div>
    </div> 
}
  //props的类型检查
  localStorage.propTypes={

  }
  //props的默认值
  LoginPage.defaultProps={
      
  }
  const mapStateToProps=state=>{
      // console.log("state",state)
      return{
       ...state.questions
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        add(){
          dispatch({
            type:"questions/add"
          })
        }
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)