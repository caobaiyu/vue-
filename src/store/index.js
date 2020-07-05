import Vue from "vue" ;
import Vuex from "vuex" ;

Vue.use(Vuex) ;

const mutations = {
	changezhangsan (state){
		state.name = "李四"
	},
	changewithzs (state ,payload){
		state.name = payload.name
	},
	changeIsCollapseD(state ,payload){
		state.isCollapse = payload
	}
}

const actions = {
	asynccn(context){
		let _name = context.state.name ;
		console.log("----_name---")
		console.log(_name)
		setTimeout(()=>{
			context.commit('changezhangsan')
		},1000)
	},
	asynccnyc(context,payload){
		setTimeout(()=>{
			context.commit('changewithzs',payload)
		},1000)
	}
}


const getters = {
	formtn:state => {
		let qz = '' ;
		if(state.name == '张三'){
			qz = "全局getters前缀"
		}
		return qz+state.name 
	},
	cutFor: state => val =>{
		let qz = '' ;
		if(state.name == '张三'){
			qz = val ;
		}
		return qz+state.name 
	}
}


const state = {
	name: "张三",
	isCollapse:false ,
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})