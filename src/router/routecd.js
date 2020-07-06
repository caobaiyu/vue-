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

const rotue = [{
		path: '/userManager',
		name: 'userManage',
		component: Qe,
		meta: {
			title: 'canvas动画',
			icon: 'el-icon-s-custom',
		},
		noDropdown: true,
		childFlag:false,
		redirect: '/userManager/userList',
		children: [{
			path: 'userList',
			meta: {
				title: 'canvas动画',
				icon: 'iconuser',
				routerType: 'leftmenu'
			},
			component: Qe,
		}]
	},
	{
		path: '/share',
		name: 'share',
		component: Qi,
		meta: {
			title: 'G2示例',
			icon: 'el-icon-share',
		},
		noDropdown: true,
		childFlag:false,
		redirect: '/share/share',
		children: [{
			path: 'share',
			meta: {
				title: 'G2示例',
				icon: 'iconshare',
				routerType: 'leftmenu'
			},
			component: Qi,
		}]
	},
	{
		path: '/fundManage',
		name: 'fundManage',
		meta: {
			title: '资金管理',
			icon: 'el-icon-s-flag',
		},
		component: Qr,
		childFlag: true,
		redirect: '/fundManage/fundList',
		children: [
			{
				path: 'fundList',
				name: 'fundList',
				meta: {
					title: '资金流水',
					routerType: 'leftmenu'
				},
				component: Qw,
			},
			{
				path: 'chinaTabsList',
				name: 'chinaTabsList',
				meta: {
					title: '区域投资',
					routerType: 'leftmenu'
				},
				component: Qy,
			}
		]
	},
	{
		path: '/fundData',
		name: 'fundData',
		meta: {
			title: '资金数据',
			icon: 'el-icon-s-grid',
		},
		component: Qt,
		childFlag: true,
		redirect: '/fundData/fundPosition',
		children: [
			{
				path: 'fundPosition',
				name: 'fundPosition',
				meta: {
					title: '投资分布'
				},
				component: Qa
			},
			{
				path: 'typePosition',
				name: 'typePosition',
				meta: {
					title: '项目分布'
				},
				component: Qd
			},
			{
				path: 'incomePayPosition',
				name: 'incomePayPosition',
				meta: {
					title: '收支统计'
				},
				component: Qs
			}
		]
	},
	{
		path: '/permission',
		name: 'permission',
		meta: {
			title: 'G2文档',
			icon: 'el-icon-s-help',
			roles: ['admin', 'editor'] // you can set roles in root nav
		},
		component: Qu,
		childFlag: true,
		redirect: '/permission/page',
		children: [{
			path: 'page',
			name: 'pagePer',
			meta: {
				title: '文档记录',
				roles: ['admin'] // or you can only set roles in sub nav
			},
			component: Qu,
		}]
	}
];

// let mapurl = []
// let yongke = [path,title,icon]	
// rotue.forEach( (v,i) => {
// 	let ont = [] ;
// 	yongke.forEach( (yv,yi)=>{
// 		ont.push(v[yongke[0]])
// 	})

// })




export default rotue;
