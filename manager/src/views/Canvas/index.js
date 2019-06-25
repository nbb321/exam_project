import React from 'react';
import axios from "axios";
import {Layout,Button} from "antd"
import styles from "./index.scss"
const {Content} =Layout
  function Canvas(props){
      return(
        <Layout className={styles.main}>
              <p className={styles.titType}>个人中心</p>
              <Content className={styles.typesContent}>
                <Content>
                  <div className={styles.topTit}>更换头像</div>
                  <div className={styles.inline}>
                    <input type="file" />
                    <input type="file"  />
                  </div>
                  <div style={{ padding: "20px" }}>
                    <img
                      src=""
                      alt="头像"
                      style={{ width: "120px", height: "120px" }}
                    />
                  </div>
                  <div>
                    <Button className={styles.btns}>
                      上传
                    </Button>
                  </div>
                </Content>
                {/* <Content>
                  <Title level={2}>图片合成</Title>
                  背景:<input type="file" onChange={fileChangebg} />
                  头像:<input type="file" onChange={fileChangeHead} />
                  <canvas ref={updateCanvas} width="400" height="600" />
                </Content> */}
              </Content>
            </Layout>
      )
  }


  export default Canvas
