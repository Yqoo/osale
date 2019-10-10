<!--
 * @Date: 2019-10-09 16:12:51
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-10 13:40:52
 * @Desc: 
 -->
<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="6">logo</el-col>
          <el-col :span="10" v-if="pc">
						<el-menu mode="horizontal" background-color="#3490de" text-color="#eee" active-text-color="#00b8a9">
							<el-menu-item v-for="(item,key) in menus " :key="key" :index="key">{{item.name}}</el-menu-item>
						</el-menu>
          </el-col>
					<el-col :span="8" v-else>
						<el-menu  background-color="#3490de" text-color="#eee" active-text-color="#00b8a9">
							<el-submenu >
								<template slot="title">
									<i class="el-icon-menu" style="color:#eee"></i>
									<span>菜单</span>
								</template>
								<el-menu-item v-for="(item,key) in menus " :key="key" :index="key">{{item.name}}</el-menu-item>
							</el-submenu>
						</el-menu>
					</el-col>
          <el-col :span="8">
            <el-button class="phoneBtn" type="normal" size="small" icon="el-icon-phone">0755-82779639</el-button>
          </el-col>
        </el-row>
      </el-header>
      <el-main>12</el-main>
      <el-footer>3</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
	name: "Home",
	data(){
		return {
			screenWidth: '',
			pc: true,
			menus: {
				index: { name: '首页'},
				product: { name: '产品介绍'},
				scheme: { name: '解决方案'},
				down: { name: '下载中心'},
			},
		}
	},
	methods: {},
	mounted(){
		this.screenWidth = document.body.clientWidth;
		window.onresize = () => {
			this.screenWidth = document.body.clientWidth;
		}
	},
	watch:{
		screenWidth( newV,oldV ){
			if( newV < 1200 ){
				this.pc = false
			} else this.pc = true;
		}
	},
};
</script>

<style lang="less" scoped>
@color: #3490de;
@fontColor: #00b8a9;
.home {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  & .el-container {
    & .el-header {
      background-color: @color;
			line-height: 60px;
			& .el-menu{
				border-right: none;
			}
    }
  }
  & .phoneBtn {
    background: @color;
    color: #eee;
  }
}
</style>