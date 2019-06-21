import dva from 'dva';
import './index.css';
import "antd/dist/antd.css";
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/view').default);
app.model(require('./models/add').default);
app.model(require('./models/exhibition').default);
app.model(require('./models/addExam').default);
app.model(require('./models/addMark').default);
app.model(require('./models/addUser').default);
app.model(require('./models/exam').default);
app.model(require('./models/global').default);
app.model(require('./models/class').default);
app.model(require('./models/paper').default);
app.model(require('./models/studentDialong').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
