// import fetch from 'dva/fetch';

// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

// /**
//  * Requests a URL, returning a promise.
//  *
//  * @param  {string} url       The URL we want to request
//  * @param  {object} [options] The options we want to pass to "fetch"
//  * @return {object}           An object containing either "data" or "err"
//  */
// export default function request(url, options) {
//   return fetch(url, options)
//     .then(checkStatus)
//     .then(parseJSON)
//     .then(data => ({ data }))
//     .catch(err => ({ err }));
// }
import axios from "axios";
const service=axios.create({
  baseURL:"http://127.0.0.1:7001",
  timeout:5000
})
service.interceptors.request.use(
  config=>{
    return config
  },
  error=>{
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  response=>response.data,
  error=>{
    return Promise.reject(error)
  }
)
export default service;