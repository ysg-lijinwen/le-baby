import Vue from 'vue'
// import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import LeBao from '../packages'

import App from './App.vue'

Vue.use(ElementUI)
Vue.use(LeBao)
// Vue.use(axios)
// Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
