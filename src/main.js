// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
// 不要忘记引入样式文件
import 'element-ui/lib/theme-chalk/index.css';
// 使用Vue的插件
Vue.use(ElementUI);
Vue.config.productionTip = false //配置调试信息

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
