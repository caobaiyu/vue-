<template>
	<div>
	<h1>vuex测试使用</h1>
	<h2>yyyy888</h2>
	<h2>store中的name数据：{{formatName}}</h2>
	<div>
		<h3>计算前缀</h3>
		<el-button type="primary" @click = "setMdef"> 默认无参</el-button>
		<el-input v-model="name"></el-input>
		<el-button type="primary" @click = "setName"> 提交</el-button>
	</div>
	<div>
		<h3>通过Vuex的getters计算前缀</h3>
		<h5>{{this.$store.getters.formtn}}</h5>
		<!-- <el-button type="primary" @click = "fobcsetMdef"> 默认无参</el-button> -->
		<el-input v-model="fname"></el-input>
		<h5>{{this.$store.getters.cutFor(this.fname)}}</h5>
		<!-- <el-button type="primary" @click = "sysetName"> 提交</el-button> -->
	</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				name:'',
				fname:''
			}
		},
		methods:{
			setMdef(){
				this.$store.commit('changezhangsan')
			},
			setName(){
				this.$store.commit('changewithzs',{
					name:this.name
				})
			},
			// sysetName(){
				
			// },
			// sysetName(){
			// 	console.log(this.fname)
				
			// }
		},
		computed:{
			formatName(){
				let poxfix = '';
				if(this.$store.state.name == '张三'){
					poxfix = "计算前缀"
				}
				return poxfix + this.$store.state.name
			}
		}
	}
</script>

<style>
</style>
