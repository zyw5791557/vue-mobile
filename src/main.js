import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'

// 引入 Mint-ui
import Mint from 'mint-ui';
// join global style
import './styles/index.scss'
Vue.use(Mint);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
