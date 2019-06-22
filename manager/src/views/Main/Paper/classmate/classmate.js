import React,{useEffect} from 'react';
import { connect } from 'dva';
import "antd/dist/antd.css";
import styles from './classmate.scss';
import { Select } from 'antd';
import {Table} from "antd";
import {Link} from "dva/router";

const { Option } = Select;

function classmateIndex(props){
    console.log(props.classRoomList)
    let pathname=props.location.search.slice(4);
    let {studentDialongList,classRoomList}=props;
    //根据pathname去请求接口
    
    let handleChange=()=>{

    };
    let handleChangeClassmate=()=>{

    };
    useEffect(()=>{
        props.studentDialong();
        props.classRoom();
    },[])
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
               <div className={styles.done}>
                   状态：
                   <Select
                        labelInValue
                        defaultValue={{ key: '' }}
                        style={{ width: 200 }}
                        onChange={handleChange}
                    >
                        <Option value=""></Option>
                    </Select>
               </div>
               <div className={styles.classmate}>
                   班级：
                   <Select
                        labelInValue
                        defaultValue={{ key: '' }}
                        style={{ width: 200 }}
                        onChange={handleChangeClassmate}
                    >
                        
                        {classRoomList&&classRoomList.map((item,index)=>{
                            return <Option value={item.grade_id} key={item.grade_id}>{item.grade_name}</Option>
                        })}
                    </Select>
               </div>
               <div className={styles.search}>
                   搜索
               </div>
            </div>
            <div className={styles.list}>
                
            </div>
            {/* {studentDialongList&&studentDialongList.map((item,index)=>{

            })} */}
        </div>

  )
 
}
//props的类型检查
classmateIndex.propTypes={

}
//props的默认值
classmateIndex.defaultProps={

}
 const mapStateToProps=state=>{
   return {
    ...state.classmate
   }
 }
 const mapDispatchToProps=dispatch=>{
   return {
      studentDialong(){
        dispatch({
            type:"classmate/studentDialong"
        })
      },
      classRoom(){
        dispatch({
            type:"classmate/classRoom"
        })
      },
   }
 }
export default connect(mapStateToProps,mapDispatchToProps)(classmateIndex);
