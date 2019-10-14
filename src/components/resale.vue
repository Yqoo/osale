<!--
 * @Date: 2019-10-14 15:43:11
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-14 17:18:14
 * @Desc: 服装零售组件
 -->
<template>
    <div class="resale">
        <div class="box">
            <div class="inSideBox">
                <div class="desc">
                    <h2>灵析服装销售管理软件<br/>服装店收银系统</h2>
                    <p>灵析服装销售管理软件(服装店收银系统)是一款基于服装、鞋帽行业多年经
                    验基础上、结合其特性采用C\S架构重新设计的全新-代服装专卖店管理软
                    件,服装店销售软件,服装进销存。以业务管理为导向，以操作简单为目标将
                    软件划分为七个功能模块;
                    </p>
                    <div>
                        <ul>
                            <li v-for="index in [0,1,2,3]" :key="index">
                                <i :class="modules[index].icon"></i>
                                <span>{{modules[index].name}}</span>
                            </li>
                        </ul>
                        <ul>
                           <li v-for="index in [4,5,6]" :key="index">
                                <i :class="modules[index].icon"></i>
                                <span>{{modules[index].name}}</span>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
            <div class="inSideBox">

            </div>
        </div>
        <div class="box">
            <div class="inSideBox"></div>
            <div class="inSideBox">
                <div class="desc">
                    <h2>主要特性、应用价值</h2>
                    <p>1. 界面美观，流程清晰，功能全面，简单易用(15分钟内学会收银);</p>
                    <p>2.服装特性的品类、颜色、尺码、品牌等元素管理，支持各类盘点方式;</p>
                    <p>3.计算机化管理，采用实销实结的库存方式,使库存不再混乱;</p>
                    <p>4.即时提供销售分析报表，让您随时了解企业经营情况;</p>
                    <p>5.条码自动按流水号生成，支持条码吊牌打印。收银台完美兼容POS硬件;</p>
                    <p>6.单机版无须网络支持，也可使用;升级为网络版，数据仍可使用。</p>
                    <p>7.适用于小型服装门店、新开店用户。</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <h2>功能亮点</h2>
            <ul class="bottomUl">
                <li class="outSideLi">
                    <h2>进货管理</h2>
                    <ul>
                        <li>采购进货入库</li>
                        <li>自动生成商品编号（即条码编号）</li>
                        <li>即时打印条码标签</li>
                        <li>供应商管理</li>
                    </ul>
                </li>
                <li class="outSideLi">2</li>
                <li class="outSideLi">3</li>
                <li class="outSideLi">4</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'resale',
    data(){
        return {
            modules: [
                { name: '进货管理', icon: 'el-icon-menu' },
                { name: '销售管理', icon: 'el-icon-menu' },
                { name: '库存管理', icon: 'el-icon-menu' },
                { name: '财务分析', icon: 'el-icon-menu' },
                { name: '统计分析', icon: 'el-icon-menu' },
                { name: '基础信息', icon: 'el-icon-menu' },
                { name: '系统设置', icon: 'el-icon-menu' },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
    .resale {
        background: #F6FAFC;
        & .box:nth-child(2) {
            background: #fff;
        }
        & .box {
            display: flex;
            flex-flow: row wrap;
          & div.inSideBox {
              width: 50%;
              box-sizing: border-box;
              & div.desc {
                width: 30%;
                margin: 0 auto;
                & h2 {
                    padding: 10px 0px;
                }
                & p {
                    color: #52616b;
                }
                & div {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    & li {
                        padding: 10px 20px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        margin: 10px 0px;
                    }
                }
              }
          }  
        }
        & .bottom {
            width: 70%;
            margin: 0 auto;
            & h2 {
                text-align: center;
            }
            & ul.bottomUl {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                & li.outSideLi {
                    & h2 {
                        text-align: center;
                    }
                    width: 20%;
                    background: #fff;
                    margin: 10px;
                    border-radius: 5px;
                    padding: 20px;
                    box-shadow: 0px 0px 12px #ddd;
                    & li {
                        padding: 10px;
                    }
                }
            }
        }
    }
</style>