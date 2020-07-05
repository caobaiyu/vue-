<template>
	<!-- <el-container class="home_container">
		<el-header><span class="lgouttl" @click="logout">退出</span></el-header>
		<el-container>
			<el-aside :width="yon ? '64px' : '200px'">
				<leftMuns />
			</el-aside>
			<el-container>
				<el-main>
					<div class="zdfg clear">
						<span @click="zhd" :class="yon ? 'btnn' : 'btnnz'">折叠左侧菜单</span>
						
					</div>
					<router-view  />
				</el-main>
			</el-container>
		</el-container>
	</el-container> -->
	<div class="home">
		<div class="top">
			<div :class="['top-left',{'top-left-shrink':isCollapse}]">
        <img  class="top-img" src="../components/mtu.jpg" alt="">
        <span class="top-name" v-if="isCollapse">vue-demo</span>
      </div>
      <span class="top-shrink" @click="spreadShrink">
        <i v-if="isCollapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </span>
      <span class="top-crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item,index) in crumbData" :key="index">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
      </span>
			<div class="top-right">
        <span class="lgouttl" @click="logout">退出</span>
      </div>
		</div>	
		<div :class="['tab',{'tab-collapse':!isCollapse}]">
      <leftMuns @tabsRoute="tabsRoute" 
            @presentRoute="presentRoute" />
    </div>
		<!-- 副导航 -->
    <div class="nav-level">
      <span v-for="(tag,index) in tags" 
      :key="index" @click="clickTag(index)">
        <el-tag closable 
          @close="handleClose(tag)" 
          :type="tag.type">
            {{tag.name}}
        </el-tag>
      </span>
    </div>

    <div :class="['router-child',{'router-child-shrink':!isCollapse}]">
      <router-view />
    </div>
	</div>





</template>

<script>
import { removeStore } from '../components/utils/mty.js';
import leftMuns from './home/letfMuns'
// import munArr from '../router/munsList.js';
// import rotue from '../router/routecd.js';

import { mapState } from 'vuex' ;


// munArr.forEach((v, i) => {
// 	console.log(v[1].length ? true : false);
// });

//console.log(munArr) ;
export default {
	components:{leftMuns},
	data() {
		return {
			tags: [{ name: "用户管理", routerData: "comEcharts", type: "info" }],
			crumbData: ["用户管理"],
		};
	},
	methods: {
		logout() {
			removeStore('token');
			this.$router.push('/login');
		},
		spreadShrink() {
			let lsbl = this.isCollapse
			this.$store.commit("changeIsCollapseD", !lsbl)
		}
	},
	watch: {
		$route(to, from) {
			
		}
	},
	computed:{
    ...mapState({isCollapse: 'isCollapse'})
  }
};
</script>

<style lang="scss" scoped>
.lt {
  float: left;
}
.home {
  width: 100%;
  height: 100%;
  .top {
    display: flex;
    width: calc(100% - 20px);
    height: 60px;
    font-size: 30px;
    line-height: 60px;
    text-align: left;
    color: rgb(64, 158, 255);
  }
  .top-name{
    float:left;
    width: 140px;
    text-align: left;
    font-size:20px;
    margin-left:4px;
  }
  .top-img{
    width:30px;
    height:30px;
    float:left;
    margin:15px 0 0 10px;
    border-radius: 6px;
  }

  .tab {
    float: left;
    height: calc(100% - 60px);
    overflow-y:auto;
    overflow-x:hidden;
   background-color: rgb(48, 65, 86);

    // 导航未折叠
    .tabs {
      width:200px;
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }

    // 导航折叠
    .tabs-collapse{
      width:55px;
    }
    .tab-collapse{
      width:55px;
    }
  }
  .router-child {
    float: right;
    width: calc(100% - 211px);
    height: calc(100% - 96px);
    padding:20px;
    box-sizing: border-box;
    overflow: auto;
  }
  .router-child-shrink {
    width: calc(100% - 61px);
  }
  .el-tag {
    cursor: pointer;
  }
}

//顶部样式
.home {
  .top {
    position: relative;
  }

  //左侧标题和logo
  .top-left{
    width:200px;
    background:#1f2d3d;
  }
  .top-left-shrink{
    width:54px;
  }
  .top-name{
    color:#FFFFFF;
  }

  //收缩导航
  .top-shrink {
    margin-left:8px;
    cursor: pointer;
    color: #303133;
    line-height: 60px;
    .more-sanhengxian {
      font-weight: 700;
    }
    .iconfont {
      font-size: 22px;
    }
  }

  //面包屑
  .top-crumbs {
    margin-left: 20px;
    .el-breadcrumb {
      line-height: 60px;
    }
  }

  //右侧内容
  .top-right {
    height: 60px;
    position: absolute;
    right: 0;
    .right-full {
      position: absolute;
      right: 100px;
      cursor: pointer;
      span {
        font-size: 26px;
        color: #909399;
      }
    }
    .login-img {
      position: absolute;
      right: 20px;
      width: 40px;
      height: 40px;
      margin-top: 8px;
      border-radius: 6px;
      cursor: pointer;
    }
    .login-text{
      color:#FFFFFF;
    }
  }
}

//横向导航
.nav-level {
  text-align: left;
  border-bottom: 1px solid #d8dce5;
  border-top: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .el-tag {
    height: 26px;
    line-height: 26px;
    margin: 4px 0 4px 4px;
    .el-tag__close:hover {
      background: #409eff;
    }
  }
}
</style>
