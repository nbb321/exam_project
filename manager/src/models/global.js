export default {
    // 命名空间
    namespace: 'global',
  
    // 模块内部的状态
    state: {
        locale:'zh'
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
     changeLocale(state,{payload}){
         return {...state,locale:payload}
     }
    },
  
  };