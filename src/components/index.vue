<!--
 * @Date: 2019-10-09 11:54:22
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-18 15:48:17
 * @Desc: 
 -->
<template>
  <el-container>
    <el-main>
      <div class="main animated slideInDown">
        <div class="title">灵析软件 专注服装行业 深耕每一个细节</div>
				<div class="line"></div>
		<div class="box  animated pluse">
			<div class="boxChild hvr-grow-shadow" v-for="(box,index) in boxs" :key="index" @click=" pane = box.pane ">
				<div>
					<img :src="box.img">
					<p>{{box.name}}</p>
				</div>
			</div>
		</div>
		<div class="boxDesc">
			<div class="boxDiv fadeInLeft animated">
				<img :src="desc[pane].img" alt="">
			</div>
			<div class="boxDiv">
				<p>
					{{desc[pane].context}}
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
			  <div class="myFont">
					<div>专注于为服装行业提供信息化解决方案的软件服务商，拥有自主知识权。在互联网时代，</div>
					<div>与客户共同进步，助力客户实现企业信息化管理</div>
				</div>
		  </div>
		  <div class="desc_box fadeInRightBig animated">
			  <div  v-for="(item,index) in skill" :key="index" class="desc_outSideBox hvr-float ">
				  <div class="desc_inSideBox">
						<img :src="item.img" alt="">
						<p class="desc_first">{{item.title}}</p>
						<p class="desc_second">{{item.desc}}</p>
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
				{ img: require('@/assets/image/index/fuzhunaglingshou.png'), name: '服装零售版', pane: 'resale' },
				{ img: require('@/assets/image/index/wangluolians.png'), name: '服装连锁网络版', pane: 'chain' },
				{ img: require('@/assets/image/index/fuwujiameng.png'), name: '服装加盟分销版', pane: 'distribution' },
				{ img: require('@/assets/image/index/O2Oweixin.png'), name: 'o2o微信会员', pane:'wx' },
			],
			desc: {
				resale: { img: require('@/assets/image/resale/fuzhuangruanjian.png'), context: '灵析服装销售管理软件(服装店收银系统)是-款基于服装、鞋帽行业多年经验基础上、结合其特性采用C\S架构重新设计的全新-代服装专卖店管理软件,服装店销售软件,服装进销存。以业务管理为导向，以操作简单为目标将软件划分为七个功能模块:进货管理、销售管理、库存管理、财务费用、统计分析、基础信息、系统设置。' },
				chain: { img: require('@/assets/image/chain/houtaiguanli.png'), context: '灵析服装连锁网络版采用总部与门店两级架构，更加简便、更加贴近自创品牌店的发展趋势，通过后台统一管理各分店的库存、及销售数据的服装连锁销售软件，服装库存连锁管理软件。在互联网+时代，与客户共同进步，助力客户实现数据信息化管理。' },
				distribution: { img: require('@/assets/image/distribution/fenxiaoxitong.png'), context: '灵析服装加盟分销系统（服装连锁分销管理软件）适用于目前流行的 总部统一管理， 批发加盟、 专卖销售、分公司自主经营等的多种经营模式。通过完善的进销存管理控制，实现企业经营信息的电脑全程记录，传递、分析和决策。' },
				wx: { img: require('@/assets/image/cloud/shouji.png'), context: '整合企业微信公众号平台，专为灵析用户提供线上+线上一体化会员、实现自主营销，线上商城与线下店铺相互支撑，为会员提供多渠道购物平台，双管齐下为店铺创收。线上线下会员完美对接：商家显示出商家的公众号二维码，顾客通过手机微信扫一扫，即可看到商家的公众号关注，按照提示即可注册会员，顾客可以实时掌握会员积分或者余额情况。' },
			},
			pane: 'resale',//默认展示服装零售版
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
			skill: [
				{ img: require('@/assets/image/index/duocenwangluo.png'), title: '多层网络架构，让管理无处不在', desc: '只需要部署后台,前台就可随意链接,去除繁琐的设置。采用流行的WebService通讯技术,数据无中转,部署更方便简单,网络开销比传统VPN高出N倍。Web Service技术,能使得运行在不同机器上的不同应用无须借助附加的、专门的第三方软件或硬件,就可相互交换数据或集成。' },
				{ img: require('@/assets/image/index/yizhanshi.png'), title: '一站式网络管理平台', desc: '经测试软件可以支持上达2000 家以上企业使用,无需要考虑网络连接问题,输入传输快,安全可靠、稳定。公司电脑、店铺电脑、加盟商、分公司、代理商、渠道商统-系统管理。软件使用多层架构,可分布式布局，电信、移动、网通、铁通等网络无障碍通讯。' },
				{ img: require('@/assets/image/index/shejifengge.png'), title: '独特的设计风格，让结构更清晰明了', desc: '最潮界面风格，让软件更有活力,最新合理布局,让客户更易懂,最科学的颜色搭配,让您的眼睛不再疲劳。C/S富客户端技术,完全超越传统风格与B/S结构。无计算机操作常识的人员均可很快上手,不怕经常换营业员对软件不熟。' },
				{ img: require('@/assets/image/index/sql2015.png'), title: '采用SQL2005数据库，试数据更流畅更安全', desc: '本产品主要数据库为SqlServer,安装软件时,自助安装，您无需动手配置。SqlServer 为微软旗下产品,数据海量,效率极高,基本可满足所有客户需求。软件 会定时对数据进行备份存储,及时系统崩溃了,也不会丢失数据。' },
				{ img: require('@/assets/image/index/jianrongxing.png'), title: '超高兼容性与扩展性，减少配置烦恼', desc: '全面支持平台: POS机, Window任何版本, Intel 处理器，AMD处理器(需安装升级包) ,条码打印机,小票打印机,扫描枪,盘点器。,' },
				{ img: require('@/assets/image/index/duoyanghua.png'), title: '自定义，多样化', desc: '软件大部分信息都是自定义的,例如角色、会员等级、款式商品统一、报表、Excel.表格、条码生成方式等都位用户自定义。没有强制,随心所欲。' },
			],
		}
	},
	methods: {
		
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
				cursor: pointer;
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
			justify-content: space-around;
			padding: 0px 20px;
			& div.boxDiv{
				width: 600px;
				& img {
					width:598px;
					height: 360px;
				}
				& p{
					font-size: 16px;
					font-family: "Microsoft YaHei";
					color:#373839;
					line-height: 28px;
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
				padding-top:90px;
			}
			& .myFont {
				font-size: 16px;
				padding-bottom: 40px;
				color: #373839;
				font-family: "Microsoft YaHei";
				line-height: 28px;
			}
		}
		& .desc_box {
			display: flex;
			flex-flow: row wrap;
			justify-content:space-around;
			& div.desc_outSideBox {
				& div.desc_inSideBox {
					border: 1px solid #ddd;
					box-shadow: 0px 0px 10px #ddd;
					margin:10px;
					background: #fff;
					text-align: center;
					border-radius: 5px;
					width: 402px;
					height:480px;
					& img {
						width: 74px;
						height:70px;
						margin-top:60px;
					}
					& p.desc_first {
						padding: 30px 0px;
						font-size: 20px;
						color: #0a1220;
						font-family: "Microsoft YaHei";
					}
					& p.desc_second {
						padding: 0px 20px;
						font-size: 14px;
						line-height: 24.5px;
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