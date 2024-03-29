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
app.model(require('./models/user').default);
app.model(require('./models/questions').default);
app.model(require('./models/management').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
