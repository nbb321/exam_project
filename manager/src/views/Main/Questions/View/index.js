import React, {useEffect} from 'react';
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import  './index.scss';
  function LoginPage(props){  
    useEffect(()=>{
      
    }, []);
     return  <div>
      biew
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
       
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
         
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)