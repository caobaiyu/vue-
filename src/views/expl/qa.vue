<template>
	<div>
	<h1>vuex测试使用</h1>
	<h2>yyyy888</h2>
	<h2>store中的name数据：{{this.$store.state.name}}</h2>
	<div>
		<h3>同步</h3>
		<el-button type="primary" @click = "setMdef"> 默认无参</el-button>
		<el-input v-model="name"></el-input>
		<el-button type="primary" @click = "setName"> 提交</el-button>
	</div>
	<div>
		<h3>异步</h3>
		<el-button type="primary" @click = "aysetMdef"> 默认无参</el-button>
		<el-input v-model="ayname"></el-input>
		<el-button type="primary" @click = "aysetName"> 提交</el-button>
	</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				name:"" ,
				ayname:''
			}
		},
		mounted() {
			console.log(this.$store)
		},
		methods:{
			setMdef(){
				this.$store.commit('changezhangsan')
				// 异步	
			},
			setName(){
				this.$store.commit('changewithzs',{
					name:this.name
				})
				console.log(333333)
				// this.$store.commit({
				// 	type:'changewithzs' ,
				// 	name:this.name
				// })
				
				
			},
			aysetMdef(){
				this.$store.dispatch('asynccn') ;
			},
			aysetName(){
				// 异步
				this.$store.dispatch('asynccnyc',{
					name:this.ayname
				})
				// this.$store.dispatch({
				// 	type:'changewithzs' ,
				// 	name:this.name
				// })
			}
			// handcm(){
			// 	this.name
			// }
		},
		
		
	}
</script>

<style>
</style>
