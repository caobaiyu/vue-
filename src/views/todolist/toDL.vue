<!--  -->
<template>
  <div class=''>
    <Input @add= "addHandler"/>
    <List @delt= "dellt" :listp= "list"  />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Input from './inputadd' 
import List from './listdel'


export default {
components: {Input,List},
data() {
  return {
    list:[
      {id: 'list-0',title:'标题0'},
      {id: 'list-1',title:'标题1'},
      {id: 'list-2',title:'标题2'},
    ]
  };
},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addHandler(tttt){
      console.log(tttt)
      let ll = this.list.length 
      this.list.push({id: "list-"+ Date.now() ,title:tttt})
    },
    dellt(id){
      this.list = this.list.filter(v => v.id !== id)
      // console.log(arguments)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  
  },
  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  //updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  //destroyed() {}, //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

</style>