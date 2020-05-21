 
 import ax from 'axios' ;
 
 ax.defaults.timeout = 5000 ;
 ax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' ;
 ax.defaults.baseURL = '';
 
 //请求拦截器
 ax.interceptors.request.use( req=>{
	 //todo 发送前
	 if(req.method === 'post'){
		//  console.log(req)
		 req.data = JSON.stringify(req.data)
	 }else{
		 req.data = JSON.stringify(req.params)
	 }
	 return req ;
 } , er => {
	 console.log('参数错误');
	 return Promise.reject(er)
 })
 
 //响应拦截器
 ax.interceptors.response.use( resp => {
	 //todo 接收前
	//  console.log(resp.data.code)
	 if(resp.data.code !== 200){
		 return Promise.reject(resp.data) ;
	 }
	//  console.log(resp)
	 return resp.data ;
	 
 } , er =>{
	 console.log('网络异常');
	 return Promise.reject(er)
 })
 
 
 // 发送post请求
 
 function Apost (url , params){
	 return new Promise( (res , rej)=>{
		 ax.post(url , params)
		 .then(response => {
			 res(response.data)
		 }, err => {
			 rej(err)
		 })
		 .catch( err=>{
			 reject(err)
		 })
	 })
 }
 
 //get请求
 
 function Aget(url , param){
	 return new Promise( (res , rej)=>{
	 		 ax.get(url , {params:param})
	 		 .then(response => {
	 			 res(response)
	 		 }, err => {
	 			 rej(err)
	 		 })
	 		 .catch( err=>{
	 			 reject(err)
	 		 })
	 })
 }
 
 
 
 export default {
	 Apost ,
	 Aget ,
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 