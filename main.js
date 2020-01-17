import Vue from 'vue'
import App from './App'
import pageHeader from './components/pageHeader.vue'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('page-header', pageHeader)
const app = new Vue({
    ...App
})
app.$mount()
