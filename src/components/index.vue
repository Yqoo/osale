<!--
 * @Date: 2019-10-09 11:54:22
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-15 15:46:39
 * @Desc: 
 -->
<template>
  <el-container>
    <el-main>
      <div class="main animated slideInDown">
        <div class="title">灵析软件 专注服装行业 深耕每一个细节</div>
				<div class="line"></div>
		<div class="box  animated pluse">
			<div class="boxChild hvr-grow-shadow" v-for="(box,index) in boxs" :key="index">
				<div>
					<img :src="box.img">
					<p>{{box.name}}</p>
				</div>
			</div>
		</div>
		<div class="boxDesc">
			<div class="boxDiv fadeInLeft animated">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570871900194&di=005b4acfd7871b1c8ebdf77a252ef9b5&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201408%2F27%2F20140827224748_NTKdG.thumb.700_0.png" alt="">
			</div>
			<div class="boxDiv">
				<p>
					灵析服装销售管理软件（服装店收银系统）是一款基于服装、鞋帽行业多年的经验基础上、结合其特性
					采用C\S架构重新设计的全新一代服装专卖店管理软件、服装店销售软件、服装进销存。
					以业务管理为导向，以操作简单为目标将软件划分为七个功能模块：进货管理、销售管理、
					库存管理、财务费用、统计分析、基础信息、系统设置。
				</p>
				<div class="btnMore  wobble animated">
					<el-button type="primary" size="mini" icon="el-icon-zoom-in">查看更多</el-button>
				</div>
			</div>
		</div>
      </div>
	  <div class="desc">
		  <div class="desc_title">
			  <p>技术和产品优势</p>
				<div class="line"></div>
			  <p>专注于为服装行业提供信息化解决方案的软件服务商，拥有自主知识权。在互联网时代，与客户共同进步，助力客户实现企业信息化管理</p>
		  </div>
		  <div class="desc_box fadeInRightBig animated">
			  <div  v-for="index in 6" :key="index" class="desc_outSideBox hvr-float ">
				  <div class="desc_inSideBox">
					<i class="el-icon-menu"></i>
					<p class="desc_first">多层网络架构，让管理无处不在</p>
					<p class="desc_second">	
						只需要部署后台,前台就可随意链接,去除繁琐的设置。
						采用流行的WebService通讯技术,数据无中转,部署更
						方便简单,网络开销比传统VPN高出N倍。Web Service
						技术,能使得运行在不同机器上的不同应用无须借助附
						加的、专门的第三方软件或硬件,就可相互交换数据或
						集成。
					</p>
				  </div>
			  </div>
		  </div>
		  <div class="sevreBox fadeInUpBig animated">
			  <div v-for="(ser,index) in serves" :key="index" class="outSide hvr-sink">
					<div>
						<img :src="ser.img" alt="">
						<p class="pFirst">{{ser.name}}</p>
				  	<p class="pSecond">{{ser.desc1}}</p>
				  	<p class="pSecond">{{ser.desc2}}</p>
					</div>
			  </div>
		  </div>
	  </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
	name: "index",
	data(){
		return {
			boxs: [
				{ img: require('@/assets/image/index/fuzhunaglingshou.png'), name: '服装零售版'},
				{ img: require('@/assets/image/index/wangluolians.png'), name: '服装连锁网络版'},
				{ img: require('@/assets/image/index/fuwujiameng.png'), name: '服装加盟分销版'},
				{ img: require('@/assets/image/index/O2Oweixin.png'), name: 'o2o微信会员'},
			],
			serves: [
				{ img: require('@/assets/image/index/mianfeigengxin.png'), name: '免费更新', desc1: '同版本软件', desc2: '可随时更新体验最新功能' },
				{ img: require('@/assets/image/index/lingfuwufei.png'), name: '零服务费',desc1: '销售只是开始', desc2: '服务永无止境' },
				{ img: require('@/assets/image/index/zhongshengzhi.png'), name: '终生制', desc1: '软件是一次付费购买', desc2: '终身使用，免费升级' },
				{ img: require('@/assets/image/index/shiyong.png'), name: '免费试用' , desc1: '免费试用30天', desc2: '购买后数据不会丢失' },
				{ img: require('@/assets/image/index/yuntiyan.png'), name: '15天免费云体验', desc1: '所有网络版客户', desc2: '可免费体验15天云服务' },
				{ img: require('@/assets/image/index/kedingzhi.png'), name: '可定制', desc1: '可以定制', desc2: '您需要的所有功能' },
				{ img: require('@/assets/image/index/jiekoukaifang.png'), name: '接口开放', desc1: '提供软件内部所有接口', desc2: '任何软件可以调用' },
				{ img: require('@/assets/image/index/shujulingdiushi.png'), name: '数据零丢失', desc1: '数据全天自动备份', desc2: '拒绝数据丢失' },
			],
		}
	},
};
</script>

<style lang="less" scoped>
.el-container {
	background: #F6FAFC;
	& .line {
		border: 4px solid #4E7EF9;
		width: 60px;
		margin: 20px auto 30px;
		border-radius: 4px;
	}
	& .main {
		border: 1px solid #ddd;
		border-radius: 	4px;
		width: 70%;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0px 0px 10px #ddd;
		& .title {
			font-size: 36px;
			text-align: center;
			padding: 60px 0px 0px 0px;
			font-family: "Microsoft YaHei";
			color:#373839;
		}
		
		& .box{
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			padding:0px 60px 30px 60px;
			& .boxChild {
				width: 265px;
				text-align: center;
				font-size: 12px;
				height: 218px;
				border: 1px solid #ddd;
				box-shadow: 0px 0px 12px #dddee5;
				border-radius: 8px;
				position: relative;
				& div {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%,-50%);
					& p {
						margin-top:20px;
						font-size: 18px;
						color: #373839;
						font-family: "Microsoft YaHei";
					}
				}
			}
		}
		& .boxDesc {
			display: flex;
			flex-flow: row wrap;
			padding: 20px;
			max-height: 400px;
			& div.boxDiv{
				width: 50%;
				height: 100%;
				& img {
					width: 90%;
				}
				& p{
					padding: 0px 30px;
					font-size: 14px;
					font-family: sans-serif;
					overflow: auto;
					max-height: 200px;
				}
				& .btnMore{
					position: absolute;
					right: 20px;
					bottom: 20px;
				}
			}
		}
	}
	& .desc {
		width: 70%;
		margin: 0 auto;
		& .desc_title{
			text-align: center;
			& p:nth-child(1){
				font-size: 20px;
				padding: 10px 0px;
			}
		}
		& .desc_box {
			display: flex;
			flex-flow: row wrap;
			justify-content:space-around;
			& div.desc_outSideBox {
				width: 33.3%;
				
				& div.desc_inSideBox {
					border: 1px solid #ddd;
					box-shadow: 0px 0px 10px #ddd;
					margin:10px;
					background: #fff;
					padding: 20px;
					text-align: center;
					border-radius: 5px;
					& p.desc_first {
						padding: 10px 0px;
						font-size: 16px;
					}
					& p.desc_second {
						padding: 10px 0px 40px 0px;
					}
				}
			}
		}
		& .sevreBox{
			display: flex;
			flex-flow: row wrap;
			margin: 90px 0px;
			justify-content: space-between;
			& div.outSide {
				width: 295px;
				height:282px;
				text-align: center;
				box-sizing: border-box;
				& p.pFirst {
					padding: 10px 0px;
					font-size: 16px;
				}
				& p.pSecond {
					padding-top: 5px;
					color:#373839;
				}
			}
		}
	}
}
</style>