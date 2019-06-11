import dva from 'dva';
import './index.css';
//引用polyfill补丁,解决路由警告
import "@babel/polyfill"
// 1. Initialize

const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
