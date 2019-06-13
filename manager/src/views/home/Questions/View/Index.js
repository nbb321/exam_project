import React, {useEffect} from 'react';
import { Select, Button} from 'antd';
import { connect } from 'dva';
import styles from  './Index.scss';

  const { Option } = Select;
  function ViewPage(props){
    useEffect(()=>{
      props.View();
      props.Subject();
      props.ExamType();
      props.Type();
      console.log(props.ViewList)
      }, []);

    let {subjectList,examTypeList,TypeList,ViewList}=props;

     return  <div className={styles.boxs}>
       <div className={styles.title}>查看试题</div>
       <div className={styles.top}>
          <div className={styles.top_Top}>
            <div>
              <span className={styles.top_Span}>课程类型：</span>
                {
                  subjectList&&subjectList.map((item,index)=>{
                    return <li className={styles.li} key={index}>{item.subject_text}</li>
                  })
                }
            </div>
          </div>
          <div className={styles.top_Bom}>
            <div className={styles.Bom_item}>
                <p>考试类型</p>
                <Select defaultValue="" style={{ width: 150,margin:15,height:35 }}>
                  {
                    examTypeList&&examTypeList.map((item,index)=>{
                      return <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}</Option>
                    })
                  }
                </Select>
            </div>
            <div className={styles.Bom_item}>
                <p>题目类型</p>
                <Select defaultValue="" style={{ width: 150,margin:15,height:35 }}>
                  {
                    TypeList&&TypeList.map((item,index)=>{
                      return <Option key={item.questions_type_id} value={item.questions_type_text}>{item.questions_type_text}</Option>
                    })
                  }                
                </Select>
            </div>
              <Button className={styles.Btn} style={{ width: 150,margin:15}} type="primary">搜索</Button>
            </div>
          </div>
          <div className={styles.center}>
                  {
                    ViewList&&ViewList.map((item,index)=>{
                      return <div className={styles.center_Item} key={item.questions_id}>
                        <div className={styles.Title}>{item.title}</div>
                          <div className={styles.Item_Box}>
                            <div className={styles.small_Item}>
                                <span>{item.questions_type_text}</span>
                                <span>{item.subject_text}</span>
                                <span>{item.exam_name}</span>
                            </div>
                            <p>编辑</p>
                          </div>
                          <div className={styles.Item_Name}>{item.user_name}</div>
                      </div>
                    })
                  } 
          </div>
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
        ...state.questions
      }
  }
  const mapDispatchToProps=dispatch=>{
    return{
      View(){
        dispatch({
          type:"questions/view"
        })
      },
      Subject(){
        dispatch({
          type:"questions/subject"
        })
      },
      ExamType(){
        dispatch({
          type:"questions/examType"
        })
      },
      Type(){
        dispatch({
          type:"questions/type"
        })
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(ViewPage)
// import React,{useEffect} from 'react';
// import { connect } from 'dva';
// import styles from './Index.scss';
// import "antd/dist/antd.css";


// function ViewPage(props){
//   //获取login
//   useEffect(()=>{
//      props.View();
//   },[]);
// //   console.log(props.ViewList)   请求到了数据
//   return <div className={styles.content}>
//   <h2 className={styles.title}>查看试题</h2>
//   <div className={styles.main}>
       
//   </div>
// </div>



  
// }
// //props的类型检查
// ViewPage.propTypes={

// }
// //props的默认值
// ViewPage.defaultProps={

// }
//  const mapStateToProps=state=>{
//    return {
//     ...state.questions
//    }
//  }
//  const mapDispatchToProps=dispatch=>{
//    return {
//      View(){
//        dispatch({
//          type:"questions/view"
//        })
//      }
//    }
//  }
// export default connect(mapStateToProps,mapDispatchToProps)(ViewPage);

 
