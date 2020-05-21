<template>
  <div>
    <p>用mockjs模拟实时数据更新,mockjs不支持websocket,只能用定时器</p>
    <div>
      <div id="line"></div>
      <div id="mapp"></div>
    </div>
    <p>点击右键切换地图</p>
    <baidu-map-cs></baidu-map-cs>
  </div>
</template>

<script>
import { baseChar } from "../EcharsMap/Echarsbase.js";
import { option, jzdata } from "../EcharsMap/options/lineData.js";
// import  {option as opmap }  from '../EcharsMap/options/mapCharl.js' ;
//定时器
import { dingahi } from "@utils/singahiq.js";
import baiduMapCs from "../EcharsMap/echarsPage/mapcs.vue";

export default {
  components: { baiduMapCs },
  data() {
    return {
      lineDate: {},
      pdtj: true ,
      setinid: null 
    };
  },
  methods: {
    getlindat() {
      this.$qq
        .Aget("/map/line/get", {})
        .then(req => {
          //  console.log("ttttttttt")
          // console.log(req.data);
          this.lineDate = req.data;
          baseChar({ id: "line", theme: "dark", option:jzdata(req.data)  });
         
        })
        .catch(err => {
          // this.$message.error("网络错误");
        });
    }
  },
  mounted() {
    this.getlindat()
    let _that = this ;
    // setTimeout(function() {
    //   console.log("---------");
    //   console.log(arguments.callee.id);
    //   _that.getlindat()
    //   if (_that.pdtj) {
    //     console.log(arguments.callee.id);
    //     setTimeout(arguments.callee, 1000);
    //   }
    // }, 1000);

    this.setinid = setInterval( () => {
      _that.getlindat()
    },500)
  },
  beforeDestroy() {
    console.log("**-**--**");
    this.pdtj = false;
    clearInterval(this.setinid)
  }
};
</script>

<style lang="scss" scoped>
#line {
  width: 500px;
  height: 300px;
}

p {
  padding: 2px 10px;
  margin: 5px 10px;
  color: blueviolet;
  @include vintage;
}
</style>
