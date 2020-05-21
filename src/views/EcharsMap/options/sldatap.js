export const option = {
  //  鼠标提示
  tooltip : {
      trigger: 'item',
      // formatter : function(params){
      //     var val = params.data
      //     return '名称：'+val.name+'，个数：'+val.value[2]+'<br/>'+'总数：'+val.tol+'，个数：'+val.un
      // },
  },
  
  //  不同颜色的点
  visualMap: [
      {
          min: 0,
          max: 1,
          show : false,
          inRange: {
              color: ['#01cae2', '#e63136',]
          },
          dimension : 3,
      },
  ],

  // 地图样式
  geo: {
      map: 'china',   // 地图样式，当为‘北京’时，会显示北京地图   
      roam : true,    
      label: {
          emphasis: {
              show: true
          }
      },
      zoom : 1.2,     //  初始大小
      scaleLimit : {
          min : 1.2,  //  最小缩放
          max : 6     //  最大缩放
      },
      regions : regions(data)     // 省份样式方法
  },

  series : [
      {
          name: '分布',
          type: 'scatter',
          coordinateSystem: 'geo',    //  地图配置
          data: convertData(data.sort(function (a, b) {   //  数据方法
              return b.value - a.value;
          })),
          encode: {
              value : 2
          },
          hoverAnimation: true,
          itemStyle: {
              normal: {
                  // color: '#FF3030',
                  shadowBlur: 1,
              }
          },
      }
  ]
};
