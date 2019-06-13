import dva from 'dva';
import './index.css';
import createLoading from "dva-loading";


// 1. Initialize
const app = dva(createLoading());

// 2. Plugins
//引入全局loading
// app.use();

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/questions').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
