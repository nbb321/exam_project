import React,{useEffect,useState} from 'react';
import {  Button,Form,Select,Table} from 'antd';
import { connect } from 'dva';
import styles from './index.scss';
const { Option } = Select;
function listManage(props){
    useEffect(()=>{
        props.paperList();
        props.ExamType();
        props.Subject();
     },[])
     const { paperlistArr,examTypeList,subjectList}=props;
     const [defInd,changeInd]=useState(0)
     const listArr=['全部','进行中','已结束'];
     const [defData,changeData]= useState([]);
    useEffect(()=>{
         if(!paperlistArr){
            return;
         }
         changeData(paperlistArr.map(item=>{
            return {
                    key:item.exam_exam_id,
                    title:[item.title,item.start_time,item.number,item.end_time],
                    room:item.grade_name,
                    founder:item.user_name,
                    start:item.start_time,
                    end:item.end_time,
                    operation:['详情',item.exam_exam_id]
                }
            })
        )
     },[paperlistArr])
    const columns = [
        {
          title: '试卷信息',
          dataIndex: 'title',
          render:text =>(
            <> 
                <div>
                    <h4>{text[0]}</h4>
                    <div>
                        <span>考试时间:{parseInt((Number(text[3])-Number(text[1]))/1000/60/60%24)}:
                        {parseInt((Number(text[3])-Number(text[1]))/1000/60%60)}:
                        {parseInt((Number(text[3])-Number(text[1]))/1000%60)}
                        </span>
                        <span>{text[2]}道题</span>
                        <span>作弊0分</span>
                    </div>
                </div>
            </>
         )
        },
        {
          title: '班级',
          dataIndex: 'room',
          render:text =>(
            <>
              <p>班级</p>
              {
                  text.map((item,i)=>{
                   return <span key={i} style={{marginRight:'4px'}}>{item}</span>
                  })
              }
            </>
         )
        },
        {
          title: '创建人',
          dataIndex: 'founder',
        },
        {
            title: '开始时间',
            dataIndex: 'start',
            render:text=>(
                <>
                  <span>{new Date(Number(text)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(Number(text)).toTimeString().substr(0, 8)}</span>
                </>
            )
        },
        {
            title: '结束时间',
            dataIndex: 'end',
            render:text=>(
                <>
                  <span>{new Date(Number(text)).toLocaleDateString().replace(/\//g, "-") + " " + new Date(Number(text)).toTimeString().substr(0, 8)}</span>
                </>
            )
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render:text=>(
                <>
                  <span style={{color:'#0139FD'}} onClick={()=>{
                      props.getDelList({
                        exam_exam_id:text[1]
                      })
                     props.history.push('/exam/ExamDetail')
                  }}>{text[0]}</span>
                </>
            )
        }
    ]
    return <div className={styles.paperMain}>
        <h2>试卷列表</h2>
        <div className={styles.paperCont}>
            <div className={styles.paperTop}>
                <div className={styles.paperTypes}>
                    <div>
                        <span>考试类型:</span>
                        <Select style={{ width: 120 }} >
                            {
                                examTypeList&&examTypeList.map((item,index)=>{
                                    return <Option key={item.exam_id} value={item.exam_id}>{item.exam_name}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <span>题目类型:</span>
                        <Select defaultValue="" style={{ width: 120 }} >
                            {
                                subjectList&&subjectList.map((item,index)=>{
                                    return <Option className={styles.li}  key={index} value={item.subject_id}>{item.subject_text}</Option>
                                })
                            }
                        </Select>
                    </div>
                    <div>
                        <Button type="primary" icon="search" className={styles.searchBtn}>查询</Button> 
                    </div>                  
                </div>
            </div>
            <div className={styles.paperBottom}>
                <div className={styles.botTit}>
                    <div>试卷列表</div>
                    <div className={styles.botTab}>
                        {
                            listArr.map((item,i)=>{
                                return <span key={i} className={i===defInd?`${styles.active}`:null} onClick={()=>{
                                    changeInd(i)
                                }}>{item}</span>
                            })
                        }
                    </div>
                </div>
                <div className={styles.paperTab}>
                    <Table  rowKey={"key"} columns={columns} dataSource={defData}  size="middle" />
                </div>
            </div>
        </div>
    </div>
}
const mapStateToProps=state=>{
    return {
     ...state.exam,
     ...state.questions
    }
  }
  const mapDispatchToProps=dispatch=>{
    return {
        paperList(){
            dispatch({
              type:'exam/PapersList'
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
        getDelList(payload){
            dispatch({
              type:'exam/examDePaper',
              payload
            })
        }
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(listManage));
