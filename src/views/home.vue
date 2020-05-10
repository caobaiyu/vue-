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
	  <el-header>
		  <el-button type="info" @click = "logout">退出</el-button>
	  </el-header>
	  <el-container>
	    <el-aside width="200px">
			<el-menu
			  @open="handleOpen"
			  background-color="#545c64"
			  text-color="#fff"
			  active-text-color="#ffd04b" unique-opened>
			  
			 <!-- <template :index="item[0][0]" v-for="(item , inde) in munArr" :key="item[0][0]">
				  <el-menu-item v-if="item[1].length"  :index="zim[0]" v-for="(zim , zid) in item[1]" :key="zim[0]">
				    <i class="el-icon-location"></i>
					<span slot="title">{{zim[1]}}</span>
				  </el-menu-item>
				  <el-menu-item v-if="item[1].length"  :index="zim[0]" v-for="(zim , zid) in item[1]" :key="zim[0]">
				    <span slot="title">{{zim[1]}}</span>
				  </el-menu-item>
			  </template> -->
			  
			  <el-submenu :index="item[0][0]" v-for="(item , inde) in munArr" :key="item[0][0]">
			    
				<template  slot="title">
					<!-- <router-link :to = "item[0][0]"> -->
			      <i class="el-icon-location"></i>
			      <span>{{item[0][1]}}</span>
				  <!-- </router-link> -->
			    </template>
				
				<!-- //二级菜单 -->
				<router-link  v-if="item[1].length"  :to="item[0][0] + '/' + zim[0]"   :index="zim[0]" v-for="(zim , zid) in item[1]" :key="zim[0]">
			    <el-menu-item @open="handleOpenz">
			      <span slot="title">{{zim[1]}}</span>
			    </el-menu-item>
				</router-link>
			  </el-submenu>
			</el-menu>
		</el-aside>
	    <el-container>
	      <el-main>
			  <router-view/>
		  </el-main>
	      <el-footer>Footer</el-footer>
	    </el-container>
	  </el-container>
	</el-container>
</template>

<script>
	import {removeStore} from '../components/utils/mty.js'
	import munArr from '../router/munsList.js'
	munArr.forEach(
		(v,i)=>{
			console.log(v[1].length?true:false)
			//console.log(v[1]?true:false)
		}
	)
	
	//console.log(munArr) ;
	export default {
		data(){
			return {
				munArr,
			}
		},
		methods:{
			logout(){
				removeStore("token") ;
				this.$router.push("/login") ;
			},
			handleOpen(key, keyPath){
				console.log(key)
				this.$router.push(key)
			},
			handleOpenz(key, keyPath){
				console.log(key)
			}
			
		}
	}
</script>

<style lang="sass"  scoped>
	.home_container{
		height: 100%;
	}
	.el-header{
		background-color: #000066;
	}
	.el-aside{
		background-color: #545c64;
	}
	
</style>
