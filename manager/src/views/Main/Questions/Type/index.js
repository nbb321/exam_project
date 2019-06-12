import React, {useEffect} from 'react';
import { connect } from 'dva';
import './index.scss';
  function TypePage(props){  
    useEffect(()=>{
      props.Type();
      console.log(props.TypeList)
    }, []);

     return  <div>
      type
    </div> 
} 
  //props的类型检查
  TypePage.propTypes={

  }
  //props的默认值
  TypePage.defaultProps={
      
  }
  const mapStateToProps=state=>{
      return{
        ...state.questions
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        Type(){
          dispatch({
            type:"questions/type"
          })
        }
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TypePage)