<template>
	<div class="jl">
		<h1>学习g2</h1>
		<div class="jb">
			<h4>G2 基础概念</h4>
			<div class="fflx">
			<p><b>数据Data</b></p>
			<p><b>图形属性Attribute：</b>将数据中的变量映射至图形空间</p>
			<p><b>几何标记Geometry:</b>图表中实际看到的图形元素，点线多边形等，<span class="bl">每个几何标记对象含有多个图形属性</span>
				<span class="rd">G2的核心就是建立数据中的一系列变量到图形属性的映射</span>
			</p>
			<p>
				<b>度量Scale：</b>
				数据空间到图形属性空间的转换桥梁，每个图形属性都对应着一个或多个度量
			</p>
			<p><b>坐标系Coordinate：</b>
			数据如何映射到图形所在的平面，同一个几何标记在不同的坐标系下有不同的表现
			G2支持笛卡尔坐标系，极坐标，螺旋坐标等
			</p>
			<p><b>可视化组件Component：</b>
			图表辅助元素，G2提供<span class="rd">坐标轴Axis，图例Legend，提示信息Tooltip，图形标记Annotation，滑动条Slider等</span>
			</p>
			<p><b>分面：</b>
			将数据分解为多个子集，以及如何对这些子集作图并联合进行展示，主要用于多维数据分析
			</p>
			</div>
			
			<h4>交互语法</h4>
			<p>触发，反馈</p>
			<h4>View视图</h4>
			
			
			<p>View拥有独立的数据源，并且能绘制多个图形的容器
			包含Geomentry，组件，交互，事件，<span class="rd">
				Chart继承于View，是直接暴露给开发者的便捷使用入口
			</span>Chart也是View。可通过Chart创建子View，子View创建
			子View，作为异构数据以及多维数据的可视化方案。
			</p>
			<h4>图表组成</h4>
			<div class="fflx">
			<p><b>坐标轴Axis</b>
				每个图表通常包括两个坐标轴，笛卡尔坐标系<span class="rd">X轴和Y轴</span>
				极坐标下<span class="rd">为角度和半径</span>两个维度构成
				<br/>
				每个坐标轴由<span class="rd">坐标轴线line，刻度线tickLine，刻度文本label，标题title以及网格线gird</span>组成
			</p>
			
			<p><b>图例Legend</b>
				图表的辅助元素，用于标定不同的数据类型以及数据范围
				帮助用户在图表中进行数据的筛选过滤。
			</p>
			<p><b>几何标记 Geometry</b>
			点、线、面这些几何图形，不同的几何标记都包含对应的图形属性 Attribute。
			</p>
			<p><b>提示信息 Tooltip</b>
			当鼠标悬停在某个点上时，会以提示框的形式显示当前点对应的数据的信息，比如该点的值，数据单位等。
			数据提示框内提示的信息还可以通过格式化函数动态指定。
			</p>
			<p><b>图形标记 Annotation</b>
			当需要在图表上绘制一些辅助线、辅助框或者图片时，比如增加平均值线、最高值线或者标示明显的范围区域时，
			可以使用辅助标记 annotation。
			</p>
			</div>
			
			
		</div>
	</div>
	
</template>

<script>
</script>

<style lang="sass" scoped>
	.bl{
		color: blueviolet;
	}
	.rd{
		color: red;
	}
	p{
		/**@include vintage ; */
		margin-top: 10px;
		margin-left: 5px;
		@include flodedd(20em) ;
	}
	p::before{
		@include flodedb ;
	}
	.fflx{
		display: flex;
		flex-wrap: wrap ;
	}
</style>
