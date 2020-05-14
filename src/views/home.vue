<template>
	<!-- <el-row>
	  <el-col :span="24">
		  <div class="bg">
			   </div>
	  </el-col>
	</el-row>
	<el-row>
	  <el-col :span="12">
		  <div class="bg1"></div>
	  </el-col>
	  <el-col :span="12">
		  <div class="bg2"></div>
	  </el-col>
	</el-row> 
	<el-col :span="12">
	    <h5>自定义颜色</h5>
	    <el-menu
	      default-active="2"
	      class="el-menu-vertical-demo"
	      @open="handleOpen"
	      @close="handleClose"
	      background-color="#545c64"
	      text-color="#fff"
	      active-text-color="#ffd04b">
	      <el-submenu index="1">
	        <template slot="title">
	          <i class="el-icon-location"></i>
	          <span>导航一</span>
	        </template>
	        <el-menu-item-group>
	          <template slot="title">分组一</template>
	          <el-menu-item index="1-1">选项1</el-menu-item>
	          <el-menu-item index="1-2">选项2</el-menu-item>
	        </el-menu-item-group>
	        <el-menu-item-group title="分组2">
	          <el-menu-item index="1-3">选项3</el-menu-item>
	        </el-menu-item-group>
	        <el-submenu index="1-4">
	          <template slot="title">选项4</template>
	          <el-menu-item index="1-4-1">选项1</el-menu-item>
	        </el-submenu>
	      </el-submenu>
	      <el-menu-item index="2">
	        <i class="el-icon-menu"></i>
	        <span slot="title">导航二</span>
	      </el-menu-item>
	      <el-menu-item index="3" disabled>
	        <i class="el-icon-document"></i>
	        <span slot="title">导航三</span>
	      </el-menu-item>
	      <el-menu-item index="4">
	        <i class="el-icon-setting"></i>
	        <span slot="title">导航四</span>
	      </el-menu-item>
	    </el-menu>
	  </el-col>
	</el-row>

	-->

	<el-container class="home_container">
		<el-header><span class="lgouttl" @click="logout">退出</span></el-header>
		<el-container>
			<el-aside :width="yon ? '64px' : '200px'">
				<!-- <el-menu
			  @open="handleOpen"
			  :collapse="yon"
			  :collapse-transition='false'
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b" unique-opened>
			  <el-submenu :index="item[0][0]" v-for="(item , inde) in munArr" :key="item[0][0]">
			    
				<template  slot="title">
					<router-link :to = "item[0][0]">
			      <i class="el-icon-location"></i>
			      <span>{{item[0][1]}}</span>
				  </router-link>
			    </template>
				
				//二级菜单
				<router-link  v-if="item[1].length"  :to="item[0][0] + '/' + zim[0]"   :index="zim[0]" v-for="(zim , zid) in item[1]" :key="zim[0]">
			    <el-menu-item>
			      <span slot="title">{{zim[1]}}</span>
			    </el-menu-item>
				</router-link>
			  </el-submenu>
			</el-menu>
			 -->
				<!-- <el-menu
			  :collapse="yon"
			  :collapse-transition='false'
			  background-color="#545c64"
			  text-color="#fff"
			  :router="true"
			  active-text-color="#ffd04b" unique-opened>		  
			  <el-submenu :index="item.path" v-for="item in rotue" :key="item.path">

				<template  slot="title">
			      <i :class="item.meta.icon"></i>
			      <span>{{item.meta.title}}</span>
			    </template>

			    <el-menu-item  :index="item.path + '/' + zim.path" v-for="zim  in item.children" :key="zim[path]">
			      <span slot="title">{{zim['meta']['title']}}</span>
			    </el-menu-item>

			  </el-submenu>
			</el-menu> -->

				<el-menu :collapse="yon" :collapse-transition="false" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened>
					<el-submenu :index="item.path" v-for="item in rotue" :key="item.path">
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
			</el-aside>
			<el-container>
				<el-main>
					<div class="zdfg clear">
						<span @click="zhd" :class="yon ? 'btnn' : 'btnnz'">折叠左侧菜单</span>
						<div :class="yon ? 'navtbdv  rgyu' : 'navtbdv ltyu'">
							<span class="bttxy">想做个</span>
							<span class="activb">子导航栏</span>
							<span class="bttxy">未完成</span>
						</div>
					</div>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
import { removeStore } from '../components/utils/mty.js';
import munArr from '../router/munsList.js';
import rotue from '../router/routecd.js';

munArr.forEach((v, i) => {
	console.log(v[1].length ? true : false);
});

//console.log(munArr) ;
export default {
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
			console.log('**********');
			console.log('------------');
			console.log(this.$route.path);
			console.log('------------');
			console.log('***********');
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
