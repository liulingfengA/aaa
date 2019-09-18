
import axios from 'axios';
import config from '../config';
// import group from "../components/group"

const { baseURL } = config;
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;


// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   err => {
//     return { errorCode: 666, errorMsg: '请求失败' };
//   }
// );
// 
// let Authorization = "Bearer_eyJhbGciOiJIUzUxMiJ9.eyJyYW5kb21LZXkiOiJyN2ttMTAiLCJzdWIiOiJ7XCJ1c2VySWRcIjo5MTAyfSIsImV4cCI6MTU3Mjg0MDk5MywiaWF0IjoxNTY2NzkyOTkzfQ.TxkgH6f5lNnCFp8Do9gPF086SDEZ_rDbMotl16tHc-A8L8s0hXSGH_W590r5bv7-c6xxZaR9oBX01HFF0WXGbA"  ;
// // let Authorization = group.TOKEN

axios.defaults.withCredentials = false;
// axios.defaults.headers.common['Authorization'] =device.isAndroid? window.Android.getParams().token:window.webkit.messageHandlers.collectSendKey.postMessage().token;   // 请求头  token 空 
// axios.defaults.headers.common['Authorization'] = Authorization// 请求头  token 空 
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  // err => {}
);

const $axios = {
  async postRequest(url, params) {
    let instance = axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization' : "Bearer_" + group.TOKEN
      },
      url,
      data:params
    });
    return instance;
  },
  async getRequest(url) {
    let instance = axios({
      method: 'get',
      url
    });
    return instance;
  }
};

export default $axios;
