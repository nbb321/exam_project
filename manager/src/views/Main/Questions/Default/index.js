import React, {useEffect} from 'react';
import { connect } from 'dva';
import  styles from './index.scss';
  function AddPage(props){  
    let {Objs}=props;
    useEffect(()=>{
    },[])

     return <div className={styles.box}>
                <h2>试题详情</h2> 
                <div>
                    <div className={styles.center}>
                        <div className={styles.left}>
                            <h5>{Objs.user_name}</h5>
                            <h6>出题信息</h6>
                                <div className={styles.small_Item}>
                                    <span>{Objs.questions_type_text}</span>
                                    <span>{Objs.subject_text}</span>
                                    <span>{Objs.exam_name}</span>
                                </div>
                            <div>
                                <h3>{Objs.title}</h3>
                                <div>
                                    {Objs.questions_stem}
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                        {Objs.questions_answer}
                        </div>
                    </div>
                </div>        
            </div>
}
  //props的类型检查
  AddPage.propTypes={
// 
  }
  //props的默认值
  AddPage.defaultProps={
      
  }
  const mapStateToProps=state=>{
      return{
        ...state.questions
      }
  }
  const mapDispatchToProps=dispatch=>{
      return{
        Condition(payload){
            dispatch({
              type:"questions/condition",
              payload
            })
          }
      }
  }
export default connect(mapStateToProps,mapDispatchToProps)(AddPage)
