import echarts from 'echarts' ;

function baseChar({id,theme='shine' , option}){
  // console.log(id)
  let myChar = echarts.init(document.getElementById(id) , theme) ;

  // let option = {},

  // option = option ;

  if(option && typeof option === 'object'){
    myChar.setOption(option , true)
  }
}

export {
  baseChar ,
}








