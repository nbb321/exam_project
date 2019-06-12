import React, { Component } from 'react';
import styles from './index.scss';
import Editor from 'for-editor';
import { Input ,Select, Button} from 'antd';
class addQuestions extends Component {
    constructor() {
        super()
        this.state = {
          value: ''
        }
      }
    
      handleChange(value) {
        this.setState({
          value
        })
      }
      onChange (e){
        console.log(e);
      };
    render() {
        const { value } = this.state;
        const { Option } = Select;
        return (
            <div className={styles.content}>
                <h2 className={styles.title}>添加试题</h2>

                <div className={styles.main}>
                    <div className={styles.markcont}>
                        <p>题目信息</p>
                        <Input placeholder="请输入题目标题,不超过20个" onChange={this.onChange.bind(this)} />
                        <p>题目管理</p>
                        <Editor value={value} height="auto" onChange={this.handleChange.bind(this)}  /> 
                    </div>
                    <div>
                         <p>请选择考试类型：</p>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.onChange.bind(this)}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div>
                         <p>请选择课程类型：</p>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.onChange.bind(this)}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div>
                         <p>请选择题目类型：</p>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.onChange.bind(this)}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </div>
                      <div className={styles.markcont}>
                        <h2>答案信息</h2>
                        <Editor value={value} height="auto"  onChange={this.handleChange.bind(this)}  /> 
                    </div>
                    <Button type="primary" htmlType="submit" >提交</Button>
                </div>
            </div>
        );
    }
}

export default addQuestions;