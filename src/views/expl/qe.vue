<template>
	<div>
		<!-- <h3> {{$route.params.username}}</h3> -->
		<span v-for="(val, ind) in mapi">{{ val }}</span>
		<h2>canvas植物分形</h2>
		<div id="ddiv" @click="animend">
			<div tabindex="1" class="cloiu">植物形状1</div>
			<div tabindex="2" class="cloiu">植物形状2</div>
			<div tabindex="3" class="cloiu">植物形状3</div>
			<div tabindex="4" class="cloiu">植物形状4</div>
		</div>
		<div id="amindis" @click="animstart">
			<div tabindex="1" class="cloiu">显示动画1</div>
			<div tabindex="2" class="cloiu">显示动画2</div>
			<div tabindex="3" class="cloiu">显示动画3</div>
			<div tabindex="4" class="cloiu">显示动画4</div>
		</div>
		<canvas width="800" height="800" ref="tutorial">不支持</canvas>
	</div>
</template>

<script>
import { Chart } from '@antv/g2';
import { dataks } from '../kshjson/gg2.js';

import { baseChar } from '../EcharsMap/Echarsbase.js';
import cjsn from 'echarts/map/json/china.json';

// import { setdtmap } from '../EcharsMap/dT/index.js'
// import { option, jzdata } from "../EcharsMap/options/lineData.js";
let csarr = []

let bginmar = ['F', 'F', 'X', 'X'];
let roultar = [
	{
		F: 'F[+F]F[-F][F]' //20
	},
	{
		F: 'FF-[-F+F+F]+[+F-F-F]' //22.5
	},
	{
		X: 'F[+X]F[-X]+X',
		F: 'FF'
	},
	{
		X: 'F-[[X]+X]+F[+FX]-X', //22.5 X
		F: 'FF'
	}
];
let jiushidu = (Math.PI / 180) * 90; //初始角度，这个转化为弧度，为了后面统一。
let xxyy = [0, -300, jiushidu];
let qeqe = [];
let quanjuid = 0;
let tree = {
	initArr: function(nm, bginm, roult) {
		let sstr = bginm;
		for (var i = 0; i < nm; i++) {
			let arr = sstr.split('');
			let ddfaar = arr.map(a => {
				if (a == 'F') {
					return roult.F;
				}
				if (a == 'X') {
					return roult.X;
				} else {
					return a;
				}
			});
			sstr = ddfaar.join('');
		}
		return sstr; //字符串
	},
	the: 5
};
export default {
	data() {
		return {
			mapi: this.$route.params || {},
			ctx: null,
			animName: null ,
			width: '800',
			height: '800',
			bgCanvas: 'Gray',
			lineColo: 'LawnGreen'

		};
	},
	methods: {
		canvasInit() {
			const canvas = this.$refs.tutorial;
			// console.log(canvas)
			canvas.width = this.width;
			canvas.height = this.height;
			this.ctx = canvas.getContext('2d');
		},
		canvasDraw(){
			// console.log("iiiiiiiiiiii")
			// let arrD = tree.initArr(7, "X", {
			//   X: "F[+X][-X]FX",
			//   F: "FF"
			// })
			// // console.log(arrD)
			// let arrDL = arrD.length;
			// this.draw(25.7, 2, arrD, arrDL)
			this.ddid(7, "X", {
			  X: "F[+X][-X]FX",
			  F: "FF"
			}, 25.7, 2)
			// this.ctx.fillStyle = this.bgCanvas;
			// this.ctx.fillRect(...this.whArr);
		},
		draw(deg, lengt, strAr, arlth) {
			this.ctx.clearRect(...this.whArr);
			this.ctx.fillStyle = this.bgCanvas;
			this.ctx.fillRect(...this.whArr);
			//获取所有数据的字符串
			let sstr = strAr.slice(0, tree.the);
			qeqe = [];
			xxyy = [0, -300, jiushidu];
			this.drawInit(deg, lengt, sstr);
			if (tree.the < arlth) {
				tree.the += 5;
				this.animName = requestAnimationFrame(() =>{
					// console.log("36666666")
					// console.log(this)
					this.draw(deg, lengt, strAr, arlth);
					// console.log("8222222222")
				});
			} else {
				cancelAnimationFrame(this.animName);
				qeqe = [];
				xxyy = [0, -300, jiushidu];
				this.ctx.clearRect(...this.whArr);
				this.ctx.fillStyle = this.bgCanvas;
				this.ctx.fillRect(...this.whArr);
				this.drawInit(deg, lengt, strAr);
			}
		},
		drawInit(ddeg, cdcf, sstr) {
			let linchan = cdcf;
			this.ctx.lineWidth = 1;
			this.ctx.strokeStyle = this.lineColo;
			this.ctx.beginPath();
			let llth = sstr.length;
			this.ctx.moveTo(this.zbzuabh(xxyy[0], xxyy[1])[0], this.zbzuabh(xxyy[0], xxyy[1])[1]);
			// console.log(this.zbzuabh(xxyy[0], xxyy[1])[0], this.zbzuabh(xxyy[0], xxyy[1])[1])
			for (let i = 0; i < llth; i++) {
				try {
					this.onedw(this.ctx, sstr[i], ddeg, linchan);
				} catch (error) {
					console.log('错误');
				}
			}
			this.ctx.stroke();
		},
		ddid(nm, bginm, roult, ddeg, cdcf) {
			this.ctx.fillStyle = this.bgCanvas;
			this.ctx.fillRect(...this.whArr);
			//获取所有数据的字符串
			let sstr = tree.initArr(nm, bginm, roult);
			// console.log(sstr)
			let linchan = cdcf;
			this.ctx.lineWidth = 1;
			this.ctx.strokeStyle = this.lineColo;
			this.ctx.beginPath();
			let llth = sstr.length;
			let corot = 0;
			this.ctx.moveTo(this.zbzuabh(xxyy[0], xxyy[1])[0], this.zbzuabh(xxyy[0], xxyy[1])[1]);
			for (let i = 0; i < llth; i++) {
				try {
					this.onedw(this.ctx, sstr[i], ddeg, linchan);
				} catch (error) {}
			}
			this.ctx.stroke();
		},
		onedw(ctx, str, ddeg, xc_linchan) {
			let linchan = xc_linchan;
			switch (str) {
				case 'F':
					xxyy = this.dddzb(xxyy, 0, linchan);
					let xzz = this.zbzuabh(xxyy[0], xxyy[1]);
					ctx.lineTo(xzz[0], xzz[1]);
					break;
				case '[':
					qeqe.push(xxyy);
					break;
				case ']':
					if (qeqe.length > 0) {
						let dyg = qeqe.pop();
						ctx.moveTo(this.zbzuabh(dyg[0], dyg[1])[0], this.zbzuabh(dyg[0], dyg[1])[1]);
						xxyy = dyg;
					}
					break;
				case '+':
					xxyy = this.dddzb(xxyy, ddeg, linchan, true);
					break;
				case '-':
					xxyy = this.dddzb(xxyy, -ddeg, linchan, true);
					break;
				default:
					break;
			}
		},
		dddzb(znar, deg, r, zgjd = false) {
			//角度转化
			let jdhhd = (Math.PI / 180) * deg;
			let xx = znar[0];
			let yy = znar[1];
			let qq = znar[2];
			let xzjd = jdhhd + qq;
			let xyxzxx = xx + Math.cos(xzjd) * r;
			let xyxzyy = yy + Math.sin(xzjd) * r;
			csarr.push([deg, Math.ceil((qq * 180) / Math.PI), Math.ceil((xzjd * 180) / Math.PI)]);
			return zgjd ? [xx, yy, xzjd] : [xyxzxx, xyxzyy, xzjd];
		},
		zbzuabh(a, b) {
			return [this.width/2 + a, this.height/2 - b];
		},
		//点击事件，动画完成与显示
		animend(e){
			this.double(e,  (a, b, c, d, f)=>{
			  this.ddid(a, b, c, d, f)
			})
		},
		animstart(e){
			this.double(e, (a, b, c, d, f)=> {
			  let adm = tree.initArr(a, b, c)
			  let admDL = adm.length;
			  this.draw(d, f, adm, admDL)
			})
		},
		double(e,callback){
			cancelAnimationFrame(this.animName);
			let etr = e.target;
			let sxz = etr.getAttribute("tabindex")
			if(sxz == null){
				return 
			}
			let numm = parseInt(sxz) - 1
			
			let degggf = [
			  [5, 20],
			  [4, 22.5],
			  [8, 20],
			  [7, 22.5]
			]
			let linchan = [10, 10, 1, 2]
			// bginmar
			this.ctx.clearRect(...this.whArr)
			tree.the = 5
			xxyy = [0, -300, jiushidu];
			qeqe = [];
			quanjuid = numm + 1;
			//执行回调
			// callback() ;
			callback(degggf[numm][0], bginmar[numm], roultar[numm], degggf[numm][1], linchan[numm])
		}

	},

	mounted() {
		this.canvasInit();
		// console.log(this.ctx)
		this.canvasDraw() ;
		// this.getChinamap();
		// this.getdtmap() ;
	},
	computed:{
		whArr(){
			return [0,0,this.width,this.height]
		}
	}

};
</script>

<style lang="scss">
#ddiv,
#amindis {
	display: flex;
}
.cloiu {
	width: 150px;
	height: 80px;
	font-size: 25px;
	margin-left: 30px;
	background-color: rgb(0, 110, 255);
	border-radius: 5px;
	text-align: center;
	line-height: 80px;
	cursor: pointer;
	color: #fff;
	margin-bottom: 10px;
}

#ddiv div {
	background-color: #0696ff;
}

#amindis div {
	background-color: #be95ff;
}

#ddiv div:hover {
	background-color: #dabdba;
}

#ddiv div:focus {
	background-color: red;
	border: none;
}

#amindis div:hover {
	background-color: #9f1853;
}

#amindis div:focus {
	background-color: #667798;
}

/* 
	.btnn {
		@include btnn($mg: 0);
		z-index: 2;
	}
	.btnn::before {
		@include btnnbf(-30deg);
	}
	.btnnz {
		@include btnn($mg: 0);
		z-index: 2;
	}
	.btnnz::before {
		@include btnnbf;
	} */
</style>
