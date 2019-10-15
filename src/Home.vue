<!--
 * @Date: 2019-10-09 16:12:51
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-15 15:05:47
 * @Desc: 
 -->
<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="6">logo</el-col>
          <el-col :span="10" v-if="pc">
						<el-menu 
							mode="horizontal" 
							background-color="#4E7EF9" 
							text-color="#eee" 
							active-text-color="#00b8a9"
							@select="selectNav">
							<div v-for="(menu,index) in menus" :key="index" style="float:left">
								<el-menu-item v-if="!menu.children" :index="menu.index">
									<i :class="menu.icon"></i>
									<span slot="title">{{menu.name}}</span>
								</el-menu-item>
								<el-submenu v-else index="aa">
									<template slot="title">
										<i :class="menu.icon"></i>
										<span>{{menu.name}}</span>
									</template>
									<el-menu-item v-for="(sub,index) in menu.children" :key="index" :index="sub.index">
										<i :class="sub.icon"  style="color:#fff;font-size:14px;"></i>
										<span>{{sub.name}}</span>
									</el-menu-item>
								</el-submenu>
							</div>
						</el-menu>
          </el-col>
					<el-col :span="8" v-else>
						<el-menu
							background-color="#4E7EF9" 
							text-color="#eee" 
							active-text-color="#00b8a9"
							@select="selectNav">
							<el-submenu index="">
								<template slot="title">
									<i class="el-icon-menu" style="color:#eee"></i>
									<span>菜单</span>
								</template>
								<div v-for="(menu,index) in menus" :key="index" style="float:left;width:150px">
								<el-menu-item v-if="!menu.children" :index="menu.index">
									<i :class="menu.icon"></i>
									<span slot="title">{{menu.name}}</span>
								</el-menu-item>
								<el-submenu v-else index="aa">
									<template slot="title">
										<i :class="menu.icon"></i>
										<span>{{menu.name}}</span>
									</template>
									<el-menu-item v-for="(sub,index) in menu.children" :key="index" :index="sub.index">
										<i :class="sub.icon"></i>
										<span>{{sub.name}}</span>
									</el-menu-item>
								</el-submenu>
							</div>
							</el-submenu>
						</el-menu>
					</el-col>
          <el-col :span="8">
            <el-button class="phoneBtn" type="normal" size="small" icon="el-icon-phone">0755-82779639</el-button>
          </el-col>
        </el-row>
     	</el-header>
			<el-carousel :interval="5000" arrow="always" height="660px">
				<el-carousel-item v-for="( banner,index) in banners" :key="index">
					<img :src="banner" alt="" style="width:100%;height:100%;">
				</el-carousel-item>
			</el-carousel>
		<component :is="current"></component>
		<Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import globalComp from './assets/js/globalComp';
export default {
	name: "Home",
	components: {
		...globalComp,
	},
	data(){
		return {
			screenWidth: '',
			pc: true,
			menus: [
				{ index: 'index', name: '首页', icon:'el-icon-s-home' },
				{ index: 'product', name: '产品介绍', icon:'el-icon-s-promotion', children:[
					{ index: 'resale', name: '服装零售版', icon:'el-icon-shopping-cart-full' },
					{ index: 'cloud', name: '云服务', icon:'el-icon-partly-cloudy' },
					{ index: 'app', name: '手机APP', icon:'el-icon-mobile-phone' },
					{ index: 'wx', name: 'o2o微信会员', icon:'el-icon-user' },
				]},
				{ index: 'scheme', name: '解决方案', icon:'el-icon-document' },
				{ index: 'down', name: '下载中心', icon:'el-icon-sold-out' },
			],
			current: 'Index',
			banners: [
				require('@/assets/image/index/banner-1.png'),
				require('@/assets/image/index/banner-2.png'),
				require('@/assets/image/index/banner-3.png'),
			]
		}
	},
	methods: {
		selectNav( nav ){
			this.current = nav;
		},
	},
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
@color: #4E7EF9;
@fontColor: #00b8a9;
.home {
  font-family: "Microsoft YaHei","Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "微软雅黑", Arial, sans-serif;
  & .el-container {
    & .el-header {
      background-color: @color;
			line-height: 60px;
			& .el-menu{
				border-right: none;
				& .el-menu-item {
					& i {
						color: #eee;
						font-size: 14px;
					}
				}
				& .el-submenu {
					& i {
						color: #eee;
						font-size: 14px;
					}
				}
			}
		}
  }
  & .phoneBtn {
    background: @color;
    color: #eee;
	}
}
</style>