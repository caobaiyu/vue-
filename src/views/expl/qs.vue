<template>
	<div>
		<h1>收支统计</h1>
		<h2>用户列表</h2>
		<div class="maint">
			<el-table :data="dataLis" :fit="true" stripe v-loading="loading" border highlight-current-row header-cell-class-name="table-header-class">
				<!-- <el-table-column label="hhju" width="0"></el-table-column> -->
				<div v-for="(v, i) in usrl" :key="v['property']">
					<el-table-column v-if="v['property']" :prop="v['property']" :label="v['label']" :width="v['width']" align="center" />
					<el-table-column v-else :label="v['label']" :width="v['width']" align="center">
						<template slot-scope="scope">
							<span>{{ scope.$index + (paginations.pageIndex - 1) * paginations.pageSize + 1 }}</span>
						</template>
					</el-table-column>
				</div>
			</el-table>
		</div>

		<el-row>
			<el-col :span="12" :offset="6">
				<el-pagination
					v-if="paginations.total > 0"
					:page-sizes="paginations.pageSizes"
					:page-size="paginations.pageSize"
					:layout="paginations.layout"
					:total="paginations.total"
					:current-page="paginations.pageIndex"
					@current-change="handleCurrentChange"
					@size-change="handleSizeChange"
				></el-pagination>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import { usrl } from '../../components/utils/userListpx.js';
console.log(usrl);
// this.$qq.Apost("/login" ,this.lg_form )
export default {
	data() {
		return {
			usrl,
			 loading:true,
			dataLis: null,
			paginations: {
				total: 0, // 总数
				pageIndex: 1, // 当前位于哪页
				pageSize: 20, // 1页显示多少条
				pageSizes: [5, 10, 15, 20], //每页显示多少条
				layout: 'total, sizes, prev, pager, next, jumper' // 翻页属性
			}
		};
	},
	methods: {
		getUserList() {
			let para = {
				limit: this.paginations.pageSize,
				page: this.paginations.pageIndex
			};
			this.$qq
				.Aget('/user/list/get', para)
				.then(req => {
					this.loading = false;
					console.log(req.data.userList);
					this.paginations.total = req.data.total;
					this.dataLis = req.data.userList;
				})
				.catch(err => {
					this.$message.error('网络错误');
				});
			// getUserList(para).then(res => {
				
			// 	this.paginations.total = res.data.total;
			// 	this.tableData = res.data.userList;
			// });
		},
		// 每页多少条切换
		handleSizeChange(pageSize) {
			this.paginations.pageSize = pageSize;
			this.getUserList();
			// document.body.scrollTop = document.documentElement.scrollTop = 0;
		},
		// 上下分页
		handleCurrentChange(page) {
			this.paginations.pageIndex = page;
			this.getUserList();
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	},
	mounted() {
		this.getUserList();
		let obj = { limit: 5, page: 1 };
		
	}
};
</script>

<style lang="sass" scoped>
	.maint{
		width: 100%;
	}
</style>
