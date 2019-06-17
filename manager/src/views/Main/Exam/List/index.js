import React,{useEffect,useState} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import { Select, Button, Tabs , Table} from 'antd';
import styles from './index.scss';

const { TabPane } = Tabs;
const { Option } = Select;

function ListIndex(props){
     console.log(props.examList)
    useEffect(()=>{
       props.ExamList();
       props.ExamType();
       props.Subject();
    },[]);

    let {examTypeList,subjectList,examList}=props;
    let [upSubject] = useState('');
    let [upExam_id] = useState(''); 

    //改变考试类型
    let handleChange=(value) => {
        upExam_id(value);
    } 
    let handleChangeId=(id)=>{
        upSubject(id)
    }
    let columns=[
        {
           title: '试卷信息',
           dataIndex: 'view_authority_text'
        },
        {
            title: '班级',
            dataIndex: 'view_id'
        },
        {
            title: '创建人',
            dataIndex: 'view_id'
        },
        {
            title: '开始时间',
            dataIndex: 'view_id'
        },
        {
            title: '结束时间',
            dataIndex: 'view_id'
        },
        {
            title:"操作",
            dataIndex: 'view_id'
        }
    ];
    
  return (
    <div className={styles.main}>
      <h2 className={styles.titType}>试卷列表</h2>
      <div className={styles.typesContent}>
        <div className={styles.top_Bom}>
           <div className={styles.Bom_item}>
                <p>考试类型</p>
                <Select onChange={handleChange}  style={{ width: 150,margin:15,height:35 }}>
                  {
                    examTypeList&&examTypeList.map((item)=>{
                      return <Option key={item.exam_id}  value={item.exam_id}>{item.exam_name}</Option>
                    })
                  }
                </Select>
          </div>
          <div className={styles.Bom_item}>
                <p>课程</p>
                <Select  style={{ width: 150,margin:15,height:35 }} onChange={handleChangeId}>
                {
                  subjectList&&subjectList.map((item)=>{
                    return <Option key={item.subject_id} value={item.subject_id}>{item.subject_text}</Option>
                  })
                }              
                </Select>
            </div>
            <Button className={styles.Btn}  style={{ width: 150,margin:15}} type="primary">查询</Button>
        </div>
        <div className={styles.center}>
            <div className={styles.center_title}>
                <h3>试卷列表</h3>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="全部" key="1">
                    </TabPane>
                    <TabPane tab="进行中" key="2">
                    </TabPane>
                    <TabPane tab="已结束" key="3">
                    </TabPane>
                </Tabs>
            </div>
            <div className={styles.list}>
              <Table columns={columns}  dataSource={examList&&examList} />
            </div>
        </div>
      </div>
    </div>

  )
  
}
//props的类型检查
ListIndex.propTypes={

}
//props的默认值
ListIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.questions
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
    ExamList(){
        dispatch({
            type:"questions/examlist"
        })
      },
    ExamType(){
        dispatch({
          type:"questions/examType"
        })
      },
    Subject(){
        dispatch({
          type:"questions/subject"
        })
      }
   }
  

}
export default connect(mapStateToProps,mapDispatchToProps)(ListIndex);
