import Vue from './components/ipElUi.js';
import App from './App.vue';
import router from './router/router.js';

import axis  from './qqax/base.js'
import store from './store/index.js'

import '../public/morkk/index.js'

import './css/base.scss' ;

// 引入图标库
import './components/icons/iconfont.css' ;

import BaiduMap from 'vue-baidu-map' ;

const rjs = require.context('echarts/map/js/province')
rjs.keys().forEach(rjs)


Vue.use(BaiduMap,{
  ak: '8oHZh6FyEAelZFQtrcvQwAP1X4qFEt3j' 
})

// 按需注册vant组件
//import { Button } from 'element-ui';

//Vue.component(Button);
//axios挂载
Vue.prototype.$qq = axis ;
// Vue.prototype.$store = store ;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');