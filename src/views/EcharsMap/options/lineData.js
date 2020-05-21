
function jzdata(dansh){
  if(dansh){
    option.series[0].data = dansh.hao
    option.series[1].data = dansh.huai
  }
  return option ;
}

export const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  legend: {
    align: 'right',
    x: 'right',
    top: 25,
    selecteMode: 'single',
    data: ['好', '坏']
  },
  series: [{
      name: '好',
      data: [150, 132, 201, 534, 290, 530, 820],
      type: 'line',
      smooth: true, //  是否平滑曲线
      areaStyle: {},
    },
    {
      name: '坏',
      data: [82, 93, 90, 93, 129, 333, 432],
      type: 'line',
      smooth: true,
      areaStyle: {},
    }
  ]
}


export { jzdata  } ;