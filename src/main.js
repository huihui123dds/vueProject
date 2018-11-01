import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入mui样式
import '@/assets/lib/css/mui.min.css'
import './assets/lib/css/icons-extra.css' 
Vue.use(MintUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
