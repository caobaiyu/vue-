<template>
	<div>
		<h2>
			G2使用开始示例
		</h2>
		<div id="gg2ks">
		</div>
	</div>
	
</template>

<script>
	import { Chart } from '@antv/g2' ;
	import  {dataks} from '../kshjson/gg2.js'
	export default {
		data(){
			return {
				
			}
		},
		mounted(){
			const char = new Chart({
				container:'gg2ks' ,
				autoFit:false ,
				width:700,
				height:300,
				padding:[0,100,0,40]
			})
			console.log(dataks)
			//载入数据源
			char.data(dataks) ;
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
				value:{
					sync:true,
				}
			})
			char.facet('rect', {
				fields:[null,'phone'],
				rowTitle:{
					style:{
						textAlign:'start',
						fontSize:12,
					},
				},
				eachView(view){
					view.area().position('feature*value');
					view.line().position('feature*value');
					view.point().position('feature*value')
						.shape('circle');
				},
			})
			
			
			 //渲染图形
			char.render() ;
		}
	}
</script>

<style>
</style>
