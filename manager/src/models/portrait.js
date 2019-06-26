
export default {
    // 命名空间
    namespace: 'portrait',
  
    // 模块内部的状态
    state: {
        vals:"https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1551624718911&amp;di=4a7004f8d71bd8da84d4eadf1b59e689&amp;imgtype=0&amp;src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    // 异步操作
    effects: {
      
    },
  
    // 同步操作
    reducers: {
      valArr(state, {payload}) {
        return { ...state, vals:payload };
      },
    },
  };
  