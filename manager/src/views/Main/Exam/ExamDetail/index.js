import React from 'react';
import styles from './index.scss';
import { connect } from 'dva';
function ExamDetail(props)  {
    const { examDelArr}=props;
    console.log(examDelArr)
    return<div className={styles.dmain}>
        <h2>试卷详情</h2>
       <div>
            <div className={styles.mleft}>
               {
                    examDelArr&&examDelArr.map((item,i)=>{
                        return <div key={i} className={styles.mlist}>
                                    <p><span>{i+1}:</span> <span>{item.title}</span></p>
                                    <div>
                                        {item.questions_stem}
                                    </div>
                            </div>
                    })
                   
                 }
            </div>
            <div className={styles.mright}>

            </div>
       </div>
    </div>
}
const mapStateToProps=state=>{
    return {
     ...state.exam
    }
  }
  const mapDispatchToProps=dispatch=>{
    
 }

export default connect(mapStateToProps,mapDispatchToProps)(ExamDetail);