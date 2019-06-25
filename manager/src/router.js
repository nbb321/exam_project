import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import LoginPage from '@/views/login/index';
import IndexPage from '@/views/Main/index';
import CanvasPage from "@/views/Canvas/index.html"
import {connect} from "dva"

//引入国际化
import {IntlProvider,addLocaleData} from "react-intl"
import en from "react-intl/locale-data/en"
import zh from "react-intl/locale-data/zh"
import zhCN from "@/lang/zh_CN.js";
import enUS from "@/lang/en_US.js"
import NotPage from "@/views/Other/404.js"
import Access from "@/views/Other/403.js"


const localeMap={
  en:enUS,
  zh:zhCN
}
addLocaleData([...en,...zh])

const mapStateToProps=state=>{
  return{
    locale:state.global.locale
  }
}
const RouterView=connect(mapStateToProps)(({locale,history})=>{
  return <IntlProvider locale={locale} messages={localeMap[locale]}>
    <Router history={history}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/403" component={Access} />
        <Route path="/404" component={NotPage} />
        {/* <Route path="/canvas" component={CanvasPage} /> */}
        <Route path="/" component={IndexPage} />
      </Switch>
    </Router>
  </IntlProvider>
})

function RouterConfig({ history }) {
  return (
  
    <RouterView history={history}/>
  );
}

export default RouterConfig;
