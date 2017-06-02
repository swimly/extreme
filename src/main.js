// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import wx from 'weixin-js-sdk'
Vue.config.productionTip = false

Vue.use(wx)
wx.config({
  debug: false,
  appId: 'wxabf1c20c98f9cf4c',
  timestamp: 1421137876,
  nonceStr: '1aKGAepZjyRSPMox',
  signature: 'b58bc3c6546c2c83f3281ac465da6e2929cadc04',
  jsApiList: [
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
