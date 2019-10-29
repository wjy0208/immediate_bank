// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js' //适配
import Json from './Json' //测试数据
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
const jsonData = type => { //模拟数据请求
  return new Promise(reslove => {
    setTimeout(() => {
      reslove(Json[type]);
    }, 500)
  })
}
Vue.config.productionTip = false
Vue.prototype.$ajax = {jsonData};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
