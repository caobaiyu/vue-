import Vue from 'vue';
import Router from 'vue-router';
import {getStore} from '../components/utils/mty.js'

import munsls from './munsList.js'

import rotue from './routecd.js'

//import App from '../App.vue';

Vue.use(Router);

// import Home from '../views/Home.vue';
// import RouterTest from '../views/RouterTest.vue';
// import VantTest from '../views/VantTest.vue';

// 官方的懒加载方案，需要在webpack.config.js中配置@babel/plugin-syntax-dynamic-import这个插件，否则babel不支持以下语法会报错。
// 下面的注释语法是打包生成的js的文件名，如果你想某几个组件打包到同一个文件，那么它们的注释语法的webpackChunkName的名字相同即可
const Login = () =>
  import(/* webpackChunkName: "group-foo-1" */ '../login/index.vue');
// const RouterTest = () =>
//   import(/* webpackChunkName: "group-foo-1" */ '../views/RouterTest.vue');
// const VantTest = () =>
//   import(/* webpackChunkName: "group-foo-1" */ '../views/VantTest.vue');

const Home = () => 
	import('../views/home.vue')

const Qw = () => import('../views/expl/qw.vue')
const Qe = () => import('../views/expl/qe.vue')
const Qr = () => import('../views/expl/qr.vue')
const Qt = () => import('../views/expl/qt.vue')
const Qy = () => import('../views/expl/qy.vue')
const Qu = () => import('../views/expl/qu.vue')
const Qi = () => import('../views/expl/qi.vue')
const Qa = () => import('../views/expl/qa.vue')
const Qs = () => import('../views/expl/qs.vue')
const Qd = () => import('../views/expl/qd.vue')

const arrlt = [[Qe,[]],[Qi,[]],[Qr,[Qw,Qy]],[Qt,[Qa,Qd,Qs]],[Qu,[]]]

const rotArtl = {} ;

const rotArtlag = [] ;

munsls.forEach(
	(v,i) => {
		let ffgr = {path:v[0][0],component:arrlt[i][0]} ;
		if(v[1].length){
			let varr = [] ;
			v[1].forEach((zv,zi)=>{
				varr.push({path:zv[0],component:arrlt[i][1][zi]})
			})
			ffgr.children = varr ;
		}
		rotArtlag.push(ffgr) ;
	}
)



console.log(rotue);

const routes = [
	{path: "/" ,redirect:"/login"},
	{path: "/login" ,component: Login},
	{path: "/404" ,component: Login},
	{path:'/home',component:Home ,redirect:"/userManager",
	children:[...rotue]
	},
	{ path: '*', redirect: '/404', hidden: true }
	
  
]

const router = new Router({
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

router.beforeEach((to , form , next)=>{
	//to: Route: 即将要进入的目标 路由对象	
	//from: Route: 当前导航正要离开的路由
	//next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
	if(to.path === "/login") return next()

	const tokenStr = getStore("token");
	
	if(!tokenStr) return next('/login')
	
	next()

})

export default router ;
