import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import env from './env'
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {  //0代表成功
    return res.data
  } else if (res.status == 10) { //状态码是10表示未登录
    window.location.href = '/#/login';
  } else {  //否则
    alert(res.msg);
  }
})


Vue.use(VueAxios, axios);
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
