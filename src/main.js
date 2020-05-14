import Vue from './components/ipElUi.js';
import App from './App.vue';
import router from './router/router.js';

import axis  from './qqax/base.js'
import store from './store/index.js'

import '../public/morkk/index.js'

import './css/base.scss' ;

// 引入图标库
import './components/icons/iconfont.css' ;

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