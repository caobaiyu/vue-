<template>
  <div :class="['tabs',{'tabs-collapse':isCollapse}]">
    <el-menu default-active="1-1" 
             class="el-menu-vertical-demo" 
             :collapse="isCollapse"
             background-color="rgb(48, 65, 86)" 
             text-color="rgb(191, 203, 217)" 
             active-text-color="rgb(64, 158, 255)" 
             :collapse-transition="false"
             @select="handleSel" 
             :router="true"
             unique-opened
    >
      <div v-for="item in rotue" 
						:key="item.path">
        <el-submenu :index="item.path"  v-if="item.childFlag">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title" v-if="!isCollapse">{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item 
              v-for="zim in item.children" 
              :index="item.path + '/' + zim.path"
              :key="zim[path]"
            >
             <span slot="title">{{ zim['meta']['title'] }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.path" v-else>
          <i :class="item.meta.icon"></i>
            <span slot="title" >{{ item.meta.title }}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import rotue from '../../router/routecd.js' ;

import { mapState } from 'vuex' ;

export default {
  // props:{
  //   rotue,
  // },
  data(){
    return {
      rotue,
    }
  },
  methods:{
    handleSel(key, keyPath){
      console.log(keyPath)
      console.log(keyPath.length)
    }
  },
  mounted(){
    
  },
  computed:{
    ...mapState({isCollapse: 'isCollapse'})
  }
}


</script>

<style lang="scss" scoped>
/*覆盖组件样式*/
.el-menu-vertical-demo {
  height: 600px;
  width: 54px;
  text-align: left;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-item:hover,
.el-submenu__title:hover {
  background-color: #1f2d3d !important;
}
.el-menu-item-group__title {
  display: none;
}
.tabs {
  .open-tabs {
    @include wh(180px, 56px);
    line-height: 56px;
    text-align: 56px;
    color: rgb(191, 203, 217);
    background-color: rgb(48, 65, 86);
    padding-left: 10px;
    cursor: pointer;
  }
  .close-tabs {
    width: 34px;
  }
  .tabs-content {
    margin-left: 10px;
  }
}
.tabs-collapse {
  width: 55px;
}
</style>
