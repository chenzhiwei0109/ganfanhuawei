import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//根据前端跨域方式调整,如果是cors等等需要些https:xxxx
//我们是接口代理方式    /a/b   ==> /api/a/b => /a/b


axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;

// 接口响应错误拦截
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
  render: h => h(App),
}).$mount('#app')
