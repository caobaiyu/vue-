<template>
	<div class="lgbg">
		<section class="center">
			<div class="tit_img">
				<img src="../../public/img/mtu.jpg" />
			</div>
			<el-form ref="ref_lgform" :model="lg_form" :rules="lg_rules" label-width="80px" class="login_form">
			  <el-form-item label="用户名" prop = "username">
			    <el-input v-model="lg_form.username"
					prefix-icon="iconfont icon-yonghu"
				></el-input>
			  </el-form-item>
			  <el-form-item label="密码" prop = "psd">
			    <el-input v-model="lg_form.psd"
					prefix-icon="iconfont icon-mima"
					type="password"
				></el-input>
			  </el-form-item>
			  <el-form-item  class="lg_btn">
			    <el-button type="primary" @click="lgn_lgform">登录</el-button>
				<el-button type="info" @click="reset_lgform">重置</el-button>
			  </el-form-item>
			 </el-form>
		</section>
	</div>
</template>

<script>
	import {setStore} from '../components/utils/mty.js'
	
	export default {
		data(){
			return {
				//表单数据绑定对象
				lg_form:{
					username: 'admin',
					psd: '123456'
				},
				//表单验证规则
				lg_rules:{
					//验证用户名。密码，这里的验证规则好像要和上面的数据绑定的名字一样
					username:[
						 { required: true, message: '请输入用户名', trigger: 'blur' },
						 { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
					],
					psd:[
						{ required: true, message: '请输入密码', trigger: 'blur' },
						{ min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
					]
				}
			}
		},
		methods:{
			reset_lgform(){
				//resetFields整个表单重置，resetField单项重置
				this.$refs.ref_lgform.resetFields();
			},
			lgn_lgform(){
				this.$refs.ref_lgform.validate(B => {
					if(!B) return ;
					this.$qq.Apost("/login" ,this.lg_form )
					.then( data => {
						console.log(data)
						setStore("token" ,data.userList.token)
						//code: 200data: userList: {token: "edtir", name: "caobaiyu"}
						// this.$message.error(data.msg)
						
						this.$router.push("/home")
					})
					.catch( (er)=>{
						console.log(er.data)
						this.$message.error(er.data.msg)
						
					})
				}) 
			}
		}
	}
</script>

<style lang="scss">
	.lgbg{
		@include wh(100vw,100vh) ;
		@include checkerboard(30px ,#58a ,tan) ;
	}
	.center{
		padding: 1em 1.5em;
		min-width: 430px;
		background: tan;
		@include jzpt;
		@include brd ;	
	}
	.tit_img{
		$igx: 130px ;
		@include wh($igx,$igx) ;
		position: absolute;
		left: 50%;
		top: -$igx/2;
		transform: translateX(-$igx/2);
		img{
			@include wh ;
			@include lx ;
			&:hover{
				@include hy ;
			}
		}
		
	}
	.login_form{
		margin-top: 65px;
		.lg_btn{
			text-align: center;
		}
	}
</style>
