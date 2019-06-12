import React, {useEffect} from 'react';
// import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { connect } from 'dva';
import  './index.scss';
  function ViewPage(props){  
    useEffect(()=>{
      props.View();
      console.log(props.ViewList)
    }, []);
     return  <div>
      biew
  </div> 
}
  //props的类型检查
  ViewPage.propTypes={

  }
  //props的默认值
  ViewPage.defaultProps={
      
  }
  const mapStateToProps=state=>{
      // console.log("state",state)
      return{
       
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        View(){
          dispatch({
            type:"questions/view"
          })
        }
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ViewPage)