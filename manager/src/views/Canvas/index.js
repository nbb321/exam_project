import {connect} from "dva"
import {Layout} from "antd"
import React from 'react';
import styles from "./index.scss"
const {Content} =Layout
  function Canvas(props){
        let inpChange=e=>{
        let files=e.target.files
        var reader=new FileReader()
        reader.onload=function(){
          props.valArr(this.result)
        }
        reader.readAsDataURL(files[0])
       
     }
     
    return(
      <Layout className={styles.main}>
      <div style={{display:'flex',alignItems:'center',position:'absolute',right:'70px',top:'20px'}}></div>
    <p className={styles.titType}>个人中心</p>
    <Content className={styles.typesContent}>
      <Content>
        <div className={styles.topTit}>更换头像</div>
        <div className={styles.inline}>
          <input type="file" onChange={inpChange} />
        </div>
      </Content>
    </Content>
  </Layout>
    )
}
const mapStateToProps=state=>{
  return{
    ...state.portrait
  }
}
const mapDisaptchToProps = dispatch=>{
  return {
    valArr(payload){
      dispatch({
        type:"portrait/valArr",
        payload
      })
    },
  }
}
export default connect(mapStateToProps,mapDisaptchToProps)(Canvas)
