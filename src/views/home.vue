<template>
	<!-- <div> -->
	<div class="home">
		<div class="leftMun">
			<div class="left_top">
				<img  class="left_top_img" src="../components/mtu.jpg" alt="">
				<span class="left_top_title" v-if="!isCollapse">天道有常</span>
			</div>
			<leftMuns @chgRouter="chgRouter" />
			</div>
		<div class="right">
			<div class="header">
				<div>
					<i :class="['header_col',isCollapse?'el-icon-s-unfold':' el-icon-s-fold']" @click="spreadShrink"></i>
					<span class="header_tx_col">{{ topTitle }}</span>
				</div>
				<span class="lgouttl header_col" @click="logout">退出</span>
			</div>
			<!-- <div class="tagMun"><navM /></div> -->
			<div class="chilView"><router-view /></div>
		</div>
	</div>
	<!-- <div class="Muns">
		<leftMuns @chgRouter = "chgRouter" />
	</div> -->
	<!-- </div> -->
</template>

<script>
import { removeStore } from '../components/utils/mty.js';
import leftMuns from './home/letfMuns';
import navM from './home/navM.vue';
// import munArr from '../router/munsList.js';
// import rotue from '../router/routecd.js';

import { mapState } from 'vuex';

// munArr.forEach((v, i) => {
// 	console.log(v[1].length ? true : false);
// });

//console.log(munArr) ;
export default {
	components: { leftMuns, navM },
	data() {
		return {
			tags: [{ name: '用户管理', routerData: 'comEcharts', type: 'info' }],
			crumbData: ['用户管理'],
			topTitle: 'canvas动画'
		};
	},
	methods: {
		logout() {
			removeStore('token');
			this.$router.push('/login');
		},
		spreadShrink() {
			let lsbl = this.isCollapse;
			this.$store.commit('changeIsCollapseD', !lsbl);
		},
		chgRouter(dt) {
			
			let {keyPath,title} = dt;
			let pt = keyPath.length ;
			
			this.$router.push({ path: keyPath[pt - 1] });
			console.log(title)
			// this.topTitle = title
			// this.$route.meta.title
		}
	},
	watch: {
		$route(to, from) {
			this.topTitle = to.meta.title
			console.log("85555555555")
			console.log(to)
			console.log(from)
		}
	},
	computed: {
		...mapState({ isCollapse: 'isCollapse' })
	}
};
</script>

<style lang="scss" scoped>
.home {
	@include wh;
	display: flex;
	margin: 0;
}
$headerH: 70px ;

.leftMun {
	height: 100%;
	// width: 120px;
	background-color: rgb(48, 65, 86);
	.left_top{
		height: $headerH;
		line-height:$headerH;
		padding-left: 20px;
		// background-color: rgb(48, 65, 86);
		display: flex;
		align-items: center ;
		@include txtgl;
	}
	.left_top_img{
		@include wh(30px,30px);
		margin-right: .2em;
	}
	
}
.right {
	// background-color: blue;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
}
.header {
	background-color: #000066;
	height: $headerH;
	display: flex;
	justify-content: space-between;
	line-height: $headerH;
	i{
		margin: 0  1em 0 .2em;
	}
}

.tagMun {
	// background-color: #545c64;
	// height: 50px;
}
.chilView {
	// background-color: #000066;
	flex: auto;
}
.lgouttl {
	margin-right: 1em;
}
.header_col{
	@include txtgl;
	cursor: pointer;
	&:hover {
		@include txtglhv;
	}
}
.header_tx_col{
	@include txtgl;
}
</style>
