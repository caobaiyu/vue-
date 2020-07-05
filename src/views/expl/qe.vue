<template>
  <div>
    <!-- <h3> {{$route.params.username}}</h3> -->
    <span v-for = '(val ,ind) in mapi'>{{val}}</span>
    <h2>G2使用开始示例</h2> 
    <div id="gg2ks"></div>
    <!-- <div id="gg3ks"></div> -->
		<div> 用d3 写的地图，数据是topojson格式，不全，提示标签在移入移出时效果很差，不用vue的时候没问题，</div>
		<!-- <div id="gg4ks"></div> -->
  </div>
</template>

<script>
import { Chart } from "@antv/g2";
import { dataks } from "../kshjson/gg2.js";

import { baseChar } from "../EcharsMap/Echarsbase.js";
import cjsn from "echarts/map/json/china.json";

// import { setdtmap } from '../EcharsMap/dT/index.js'
// import { option, jzdata } from "../EcharsMap/options/lineData.js";

export default {
  data() {
    return {
      mapi:this.$route.params || {}
    };
  },
  methods: {
    getGtwo() {
      const char = new Chart({
        container: "gg2ks",
        autoFit: false,
        width: 700,
        height: 300,
        padding: [0, 100, 0, 40]
      });
      console.log(dataks);
      //载入数据源
      char.data(dataks);
      //创建图形语法，绘制图形
      // char
      // 	// .point()
      // 	// .area()
      // 	.line()
      // 	.adjust('stack')  //调整数据，让数据以层叠的方式展示
      // 	.position('feature*value')
      // 	.color('phone')    //根据phone字段设置颜色
      // 	.shape('phone',['circle','square','triangle'])
      // 	// .size(6)
      //
      // char.coordinate('polar') ;
      //rect分面
      char.scale({
        value: {
          sync: true
        }
      });
      char.facet("rect", {
        fields: [null, "phone"],
        rowTitle: {
          style: {
            textAlign: "start",
            fontSize: 12
          }
        },
        eachView(view) {
          view.area().position("feature*value");
          view.line().position("feature*value");
          view
            .point()
            .position("feature*value")
            .shape("circle");
        }
      });

      //渲染图形
      char.render();
    },
    getChinamap() {
      baseChar({
        id: "gg3ks",
        option: {
          series: [
            {
              type: "map",
              map: "china"
            }
          ]
        }
      });
		},
		// getdtmap(){
		// 	setdtmap({id:'#gg4ks',csstit:"tooltip"})
		// }
  },
  mounted() {
    this.getGtwo();
		// this.getChinamap();
		// this.getdtmap() ;
  }
};
</script>

<style lang='scss'>
#gg4ks{
	position:relative ;
	margin-bottom :2em ;
}
.tooltip {
      position: absolute;
      width: 120px;
      height: auto;
      text-align: center;
      font-family: simsun;
      font-size: 14px;
      color: white;
      background-color: black;
      border-width: 2px solid black;
      border-radius: 5px;
      // opacity: 0;
			display:none ;
    }
.tooltip:after {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 20%;
      margin-left: -8px;
      width: 0;
      height: 0;
      border-bottom: 12px solid #000000;
      border-right: 12px solid transparent;
      border-left: 12px solid transparent;
    }
</style>
