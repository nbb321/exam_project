import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './paper.scss';
import {Table} from "antd";
import {Link} from "dva/router";

function paperIndex(props){
   
    let {paperlist}=props;
    paperlist.forEach( item=> {
        item.key=item.grade_id
       });
    
    const columns = [
        {
            title: '班级名',
            dataIndex: 'grade_name',
            key: 'grade_name',
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: 'subject_text',
        },
        {
            title: '阅卷状态'
        },
        {
            title: '课程名称',
            dataIndex: 'subject_text',
            key: 'key',
        },
        {
            title:'成材率',
            dataIndex:'room_text',
            key:'room_text'
        },
        {
            title: '操作',
            dataIndex: 'grade_id',
            key: 'grade_id',    
            render:text=><Link to={{pathname:`/paper/classmate?id=${text}`}}>批卷</Link>//重点
        }
    ]
    // console.log(paperlist)
    useEffect(()=>{
        props.paperList()
    },[])
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>待批班级</p>
            <Table columns={columns} dataSource={paperlist&&paperlist} pagination={true} className={styles.list} />
        </div>
  )
 
}
//props的类型检查
paperIndex.propTypes={

}
//props的默认值
paperIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.paper
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      paperList(){
        dispatch({
            type:"paper/paper"
        })
      },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(paperIndex);
