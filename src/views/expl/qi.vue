<template>
	<div class="gtht">
		<h1>G2环图功能一天作息，仅修改中间24小时</h1>
		<div id="dayg"></div>
		<!-- <div id="gg2ks"></div> -->
	</div>
</template>

<script>
import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

export default {
	data() {
		return {
			// name:''
		};
	},
	mounted() {
		const text = ['子时', '丑时', '寅时', '卯时', '辰时', '巳时', '午时', '未时', '申时', '酉时', '戌时', '亥时'];
		const data = [];
		for (let i = 0; i < 24; i++) {
			data.push({
				type: i + '',
				value: 10
			});
		}

		const { DataView } = DataSet;
		const dv = new DataView();

		dv.source(data).transform({
			type: 'percent',
			field: 'value',
			dimension: 'type',
			as: 'percent'
		});
		const chart = new Chart({
			container: 'dayg',
			autoFit: true,
			height: 500,
			padding: 40
		});

		chart.legend(false);
		chart.tooltip({
			showTitle: false,
			showMarkers: false
		});

		const bgView = chart.createView();
		bgView.coordinate('theta', {
			radius: 0.8,
			innerRadius: 0.7
		});

		bgView
			.interval()
			.adjust('stack')
			.position('percent')
			.color('type', ['rgba(255,255,255,0)'])
			//.color('type',['red'])
			.style({
				stroke: '#444',
				lineWidth: 1
			})
			.tooltip(false);

		bgView.annotation().text({
			position: ['50%', '50%'],
			content: '12个时辰',
			style: {
				lineHeight: '240px',
				fontSize: '30',
				fill: '#262626',
				textAlign: 'center'
			}
		});

		const intervalView = chart.createView();
		intervalView.data(data);
		intervalView.coordinate('polar', {
			radius: 0.8,
			innerRadius: 0.85
		});
		intervalView.axis(false);
		intervalView
			.interval()
			.position('type*value')
			.size('type', val => {
				if (val % 2 === 0) {
					return 1;
				}
				return 4;
			})
			.color('#444')
			.tooltip(false)
			.label(
				'type',
				val => {
					return {
						content: val % 2 === 0 ? text[val / 2] : ''
					};
				},
				{
					offset: -30,
					style: {
						fontSize: 12,
						fontWeight: 'bold',
						fill: '#bfbfbf'
					}
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
			{ type: '阅读', value: 30 }
		];
		const userDv = new DataView();
		userDv.source(userData).transform({
			type: 'percent',
			field: 'value',
			dimension: 'type',
			as: 'percent'
		});
		const pieView = chart.createView();
		pieView.data(userDv.rows);
		pieView.scale('percent', {
			formatter: val => {
				return (val * 100).toFixed(2) + '%';
			}
		});
		pieView.coordinate('theta', {
			innerRadius: 0.75
		});
		pieView
			.interval()
			.adjust('stack')
			.position('percent')
			.color('type')
			.label('type', {
				offset: 40
			});

		chart.render();
	},
	methods: {
		getGtwo() {
			const char = new Chart({
				container: 'gg2ks',
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
			char.facet('rect', {
				fields: [null, 'phone'],
				rowTitle: {
					style: {
						textAlign: 'start',
						fontSize: 12
					}
				},
				eachView(view) {
					view.area().position('feature*value');
					view.line().position('feature*value');
					view.point()
						.position('feature*value')
						.shape('circle');
				}
			});
		}
	}
};
</script>

<style lang="sass" scoped>
.gtht{
	width: 100%;
	height: 100%;
}
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
