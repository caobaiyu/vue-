<template>
	<div class="gtht">
		<h1>G2环图功能一天作息，仅修改中间24小时</h1>
		<div id="dayg"></div>
	</div>
	
</template>

<script>
	import DataSet from '@antv/data-set' ;
	import { Chart} from '@antv/g2' ;
	
	export default {
		data(){
			return {
				// name:''
			}
		},
		mounted() {	
			const text = ['子时','丑时','寅时','卯时','辰时','巳时','午时','未时','申时','酉时','戌时','亥时']
			const data = [] ;
			for(let i = 0 ; i<24 ;i++){
				data.push({
					type:i + '',
					value: 10 
				})
			}
			
			
			const { DataView } = DataSet ;
			const dv = new DataView() ;
		
			dv.source(data).transform({
				type: 'percent',
				field: 'value' ,
				dimension: 'type' ,
				as: 'percent' ,
			})
		console.log(dv) ;
			const chart = new Chart({
				container: 'dayg' ,
				autoFit: true ,
				height : 500 ,
				padding: 40 
			})
		
			chart.legend(false) ;
			chart.tooltip({
				showTitle:false ,
				showMarkers:false,
			})
		
		
		
			const bgView = chart.createView() ;
			bgView.coordinate('theta',{
				radius: 0.8,
				innerRadius: 0.7 ,
			})
		
			bgView.interval()
				.adjust('stack')
				.position('percent')
				.color('type',['rgba(255,255,255,0)'])
				//.color('type',['red'])
				.style({
					stroke:'#444',
					lineWidth:1 ,
				}).tooltip(false) ;
				
			bgView.annotation().text({
				position:['50%','50%'],
				content:'12个时辰',
				style:{
					lineHeight: '240px' ,
					fontSize: '30' ,
					fill: '#262626' ,
					textAlign: 'center',
				}
			})
				
					
			const intervalView = chart.createView();
			intervalView.data(data);
			intervalView.coordinate('polar', {
			   radius: 0.8,
			   innerRadius: 0.85,
			});
			intervalView.axis(false);
			intervalView
			  .interval()
			  .position('type*value')
			  .size('type', (val) => {
			    if (val % 2 === 0) {
			      return 1;
			    }
			    return 4;
			  })
			  .color('#444')
			  .tooltip(false)
			  .label(
			    'type',
			    (val) => {
			      return {
			        content: val % 2 === 0 ? text[val / 2] : '',
			      };
			    },
			    {
			      offset: -30,
			      style: {
			        fontSize: 12,
			        fontWeight: 'bold',
			        fill: '#bfbfbf',
			      },
			    }
			  );



			
			const userData = [
			  { type: '睡眠', value: 70 },
			  { type: '淡茶 & 烟斗 & 冥想', value: 10 },
			  { type: '写作', value: 10 },
			  { type: '教课', value: 40 },
			  { type: '酒吧吃肉配白酒', value: 40 },
			  { type: '散步', value: 10 },
			  { type: '拜访马大大', value: 30 },
			  { type: '阅读', value: 30 },
			];
			const userDv = new DataView();
			userDv.source(userData).transform({
			  type: 'percent',
			  field: 'value',
			  dimension: 'type',
			  as: 'percent',
			});
			const pieView = chart.createView();
			pieView.data(userDv.rows);
			pieView.scale('percent', {
			  formatter: (val) => {
			    return (val * 100).toFixed(2) + '%';
			  },
			});
			pieView.coordinate('theta', {
			  innerRadius: 0.75,
			});
			pieView
			  .interval()
			  .adjust('stack')
			  .position('percent')
			  .color('type')
			  .label('type', {
			    offset: 40,
			  });

				
			chart.render();	
				
				
				
				
		// 	const data = [
		// 		 { item: '事例一', count: 40, percent: 0.4 },
		// 		  { item: '事例二', count: 21, percent: 0.21 },
		// 		  { item: '事例三', count: 17, percent: 0.17 },
		// 		  { item: '事例四', count: 13, percent: 0.13 },
		// 		  { item: '事例五', count: 9, percent: 0.09 },
		// 	] ;
		// 	const char = new Chart({
		// 		container:'dayg',
		// 		autoFit:true ,
		// 		height:500 ,
		// 	})
			
		// 	char.data(data) ;
		
		// 	char.scale('percent',{
		// 		formatter: (val) => {
		// 			val = val*100 + '%' ;
		// 			return val ;
		// 		}
		// 	})
		// 	char.coordinate('theta',{
		// 		radius: 0.75 ,
		// 		innerRadius: 0.6
		// 	})
		
		
		
		
		
		// 	char.interval()
		// 		.position('percent')
		// 		.color('item')
		
		
		// 	char.render() ;
		
		}
	}
</script>

<style lang="sass" scoped>
	.gtht{
		width: 100%;
		height: 100%;
	}
</style>
