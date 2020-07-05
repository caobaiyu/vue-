<template>
	<el-container class="home_container">
		<el-header><span class="lgouttl" @click="logout">退出</span></el-header>
		<el-container>
			<el-aside :width="yon ? '64px' : '200px'">
				<el-menu :collapse="yon" 
					:collapse-transition="false" 
					background-color="#545c64" 
					text-color="#fff" 
					active-text-color="#ffd04b" 
					unique-opened
					:router="true"
					>
					<el-submenu :index="item.path" 
						v-for="item in rotue" 
						:key="item.path">
						<!-- <router-link :to = "item.path"> -->
						<template slot="title"> 
							 <i :class="item.meta.icon"></i>
							<span>{{ item.meta.title }}</span>
						</template>
						<!-- </router-link> -->
						<!-- //二级菜单 -->
						<router-link :to="item.path + '/' + zim.path" v-for="zim in item.children" :key="zim[path]">
							<el-menu-item :index="item.path + '/' + zim.path">
								<span slot="title">{{ zim['meta']['title'] }}</span>
							</el-menu-item>
						</router-link>
					</el-submenu>
				</el-menu>
				<!-- <leftMuns /> -->
			</el-aside>
			<el-container>
				<el-main>
					<div class="zdfg clear">
						<span @click="zhd" :class="yon ? 'btnn' : 'btnnz'">折叠左侧菜单</span>
						<!-- <div :class="yon ? 'navtbdv  rgyu' : 'navtbdv ltyu'">
							<span class="bttxy">想做个</span>
							<span class="activb">子导航栏</span>
							<span class="bttxy">未完成</span>
						</div> -->
					</div>
					<router-view  />
				</el-main>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
import { removeStore } from '../components/utils/mty.js';
// import leftMuns from './home/letfMuns'
import munArr from '../router/munsList.js';
import rotue from '../router/routecd.js';

munArr.forEach((v, i) => {
	console.log(v[1].length ? true : false);
});

//console.log(munArr) ;
export default {
	// components:{leftMuns},
	data() {
		return {
			munArr,
			rotue,
			yon: false
		};
	},
	methods: {
		logout() {
			removeStore('token');
			this.$router.push('/login');
		},
		zhd() {
			this.yon = this.yon ? false : true;
		}
	},
	watch: {
		$route(to, from) {
			
		}
	}
};
</script>

<style lang="scss" scoped>
.lgouttl {
	float: right;
	@include txtgl;
	margin-right: 1em;
	cursor: pointer;
}
.lgouttl:hover {
	@include txtglhv;
}
.home_container {
	height: 100%;
}
.el-header {
	background-color: #000066;
	line-height: 60px;
}
.el-aside {
	background-color: #545c64;
}
.el-main {
	padding: 0;
}
.zdfg {
	width: 100%;
	/**height: 50px;*/
	line-height: 50px;
	padding-left: 20px;
	box-sizing: border-box;
	/** margin-left: 20px; */
	background: #d3959b; /* fallback for old browsers */
	background: -webkit-linear-gradient(to right, #bfe6ba, #d3959b); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(to right, #bfe6ba, #d3959b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.btnn,
.btnnz {
	cursor: pointer;
	float: left;
	opacity: 0.5;
}
.btnn {
	@include btnn($mg: 0);
	z-index: 2;
}
.btnn::before {
	@include btnnbf(-30deg);
}
.btnnz {
	@include btnn($mg: 0);
	z-index: 2;
}
.btnnz::before {
	@include btnnbf;
}

.navtbdv {
	float: left;
	margin-left: 2em;
	@include tabnavbsdv;
	span {
		cursor: pointer;
		@include tabnavbstx;
		border: 0;
	}
	.activb {
		@include tabnavbstxbfact;
		&::before {
			@include tabnavbstxbfactbf;
		}
	}
}
.ltyu span::before {
	@include xztabtxbfys(1);
}

.rgyu span::before {
	@include xztabtxbfys(3);
}
</style>
