// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' //高亮样式文件

Vue.config.productionTip = false
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
/* eslint-disable no-new */
Vue.use(iView)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
