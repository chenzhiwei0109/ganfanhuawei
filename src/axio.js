import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    if (path != '#/index') {
      window.location.href = '/#/login';
    }
    return Promise.reject(res);
  } else {
    Message.warning(res.msg);
    return Promise.reject(res);
  }
}, (error) => {
  let res = error.response;
  Message.error(res.data.message);
  return Promise.reject(error);
});
Vue.use(VueAxios, axios);
