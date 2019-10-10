<!--
 * @Date: 2019-10-09 11:54:22
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-10 15:18:04
 * @Desc: 
 -->
<template>
  <el-container>
    <el-main>
      <div class="main animated slideInDown">
        <div class="title">灵析软件 专注服装行业 深耕每一个细节</div>
				<div class="box  animated pluse">
					<div class="boxChild hvr-grow-shadow" v-for="(box,index) in boxs" :key="index">
						<div>
							<img :src="box.img">
						</div>
						<p>{{box.name}}</p>
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
				{ img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', name: '服装零售版'},
				{ img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', name: '服装连锁网络版'},
				{ img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', name: '服装加盟分销版'},
				{ img: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', name: 'o2o微信会员'},
			],
		}
	},
};
</script>

<style lang="less" scoped>
.el-container {
	background: #F6FAFC;
  & .main {
		border: 1px solid #ddd;
		border-radius: 	4px;
		width: 70%;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0px 0px 10px #ddd;
    & .title {
      font-size: 16px;
			text-align: center;
			padding: 10px 0px;
		}
		& .box{
			display: flex;
			flex-flow: row wrap;
			justify-content: space-around;
			padding: 10px 0px;
			& .boxChild {
				width: 20%;
				text-align: center;
				font-size: 12px;
				& div {
					border-radius: 50%;
					& img {
						width: 100%;
					}
				}
			}
		}
  }
}
</style>