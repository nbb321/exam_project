import dva from 'dva';
import './index.css';
//引用polyfill补丁,解决路由警告
import "@babel/polyfill"
//ant的css样式
import "antd/dist/antd.css";
// 1. Initialize
import createLoading from "dva-loading";

const app = dva(createLoading());

// 2. Plugins
// app.use({});
// 3. Model

//登陆
app.model(require('./models/user').default);
//试卷管理
app.model(require('./models/questions').default);
//用户管理
app.model(require('./models/management').default);
//考试管理
app.model(require('./models/exam').default);
//国际化
app.model(require('./models/global').default);
//班级管理
app.model(require('./models/class').default);
// 4. Router
app.router(require('./router').default);
//批卷管理
app.model(require('./models/paper').default);
app.model(require('./models/readPaper').default);
app.model(require('./models/classmate').default);
// 5. Start
app.start('#root');
