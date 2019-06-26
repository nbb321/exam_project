
// import axios from "axios";
import {Layout,Button,Dropdown,Menu} from "antd"
import React, { useEffect,useState } from 'react';
const {Content} =Layout
  function Portrait(props){
        const [val,setval]=useState('https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg')
    return(
      <Layout>
      <div style={{display:'flex',alignItems:'center',position:'absolute',right:'70px',top:'20px'}}>        
            <span style={{ height: '100%', width: "150px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={val} style={{ width: '30px', height: '30px', verticalAlign: 'middel', borderRadius: '50%', margin: '0 10px'}} alt="" />chenmanjie</span>
      </div>
  </Layout>
    )
}
export default Portrait
