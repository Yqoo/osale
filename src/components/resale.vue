<!--
 * @Date: 2019-10-14 15:43:11
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-21 09:22:26
 * @Desc: 服装零售组件
 -->
<template>
    <div class="resale">
        <img :src="require('@/assets/image/resale/banner-1.png')" alt="" class="heartBeat animated">
        <div class="box flipInX animated">
            <div class="inSideBox">
                <div class="desc">
                    <h2>灵析服装销售管理软件<br/>服装店收银系统</h2>
                    <div class="line"></div>
                    <p class="p1">灵析服装销售管理软件(服装店收银系统)是一款基于服装、鞋帽行业多年经
                    验基础上、结合其特性采用C\S架构重新设计的全新-代服装专卖店管理软
                    件,服装店销售软件,服装进销存。以业务管理为导向，以操作简单为目标将
                    软件划分为七个功能模块;
                    </p>
                    <div>
                        <ul>
                            <li v-for="index in [0,1,2,3]" :key="index">
                                <img :src="modules[index].img">
                                <span>{{modules[index].name}}</span>
                            </li>
                        </ul>
                        <ul>
                           <li v-for="index in [4,5,6]" :key="index">
                                <img :src="modules[index].img">
                                <span>{{modules[index].name}}</span>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
            <div class="inSideBox">
                <img class="img2" :src="require('@/assets/image/resale/fuzhuangruanjian.png')" alt="">
            </div>
        </div>
        <div style="background:#fff;" class="flipInY animated">
            <div class="box">
            <div class="inSideBox">
                <img class="img2" :src="require('@/assets/image/resale/zhuyaotentezheng.png')" alt="">
            </div>
            <div class="inSideBox">
                <div class="desc">
                    <h2>主要特性、应用价值</h2>
                    <div class="line"></div>
                    <p class="p2">1. 界面美观，流程清晰，功能全面，简单易用(15分钟内学会收银);</p>
                    <p class="p2">2.服装特性的品类、颜色、尺码、品牌等元素管理，支持各类盘点方式;</p>
                    <p class="p2">3.计算机化管理，采用实销实结的库存方式,使库存不再混乱;</p>
                    <p class="p2">4.即时提供销售分析报表，让您随时了解企业经营情况;</p>
                    <p class="p2">5.条码自动按流水号生成，支持条码吊牌打印。收银台完美兼容POS硬件;</p>
                    <p class="p2">6.单机版无须网络支持，也可使用;升级为网络版，数据仍可使用。</p>
                    <p class="p2">7.适用于小型服装门店、新开店用户。</p>
                </div>
            </div>
        </div>
        </div>
        <div class="bottom">
            <h2>功能亮点</h2>
            <div class="line"></div>
            <ul class="bottomUl">
                <li class="outSideLi fadeInUp animated hvr-wobble-vertical" v-for="(item,index) in fns" :key="index">
                    <div>
                        <img :src="item.img" alt="">
                    </div>
                    <h3>{{item.title}}</h3>
                    <ul>
                        <li v-for="(li,i) in item.children" :key="i">{{li}}</li>
                    </ul>
                </li>
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
                { name: '进货管理', img: require('@/assets/image/resale/jinhuoguanli.png') },
                { name: '销售管理', img: require('@/assets/image/resale/xiaoshouguanli.png') },
                { name: '库存管理', img: require('@/assets/image/resale/kucunguanli.png') },
                { name: '财务分析', img: require('@/assets/image/resale/caiwufenxi.png') },
                { name: '统计分析', img: require('@/assets/image/resale/tongjifenxi.png') },
                { name: '基础信息', img: require('@/assets/image/resale/jichuxinxi.png') },
                { name: '系统设置', img: require('@/assets/image/resale/xitongshezi.png') },
            ],
            fns: [
                { img: require('@/assets/image/resale/dajinhuoguanlida.png'), title: '进货管理', children: [
                    '采购进货入库',
                    '自动生成商品编号（即条码编号）',
                    '即时打印条码标签',
                    '供应商管理'
                ] },
                { img: require('@/assets/image/resale/dalingshouguanli.png'), title: '零售管理', children: [
                    '收银台销售出库（退换货）',
                    '即时打印票据',
                    '店铺费用流水登记',
                    '日销售明细查询及日结存打印'
                ] },
                { img: require('@/assets/image/resale/dakucunguanli.png'), title: '库存管理', children: [
                    '库存出入明细查询',
                    '库存调整、库存盘点',
                    '库存价格及数量修改功能',
                    '商品图片上传与查看'
                ] },
                { img: require('@/assets/image/resale/huiyuanguanli.png'), title: '会员管理', children: [
                    '定义VIP等级及折扣方案',
                    'VIP预存储值',
                    'VIP消费打折与积分',
                    '积分抵扣现金'
                ] },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
    .resale {
        background: #F6FAFC;
        font-family: "Microsoft YaHei";
        & .box {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            width: 70%;
            margin: 0 auto;
            padding: 90px 0px;
          & div.inSideBox {
              box-sizing: border-box;
              width: 500px;
              & img1 {
                width: 503px;
                height: 466px;
              }
              & img2 {
                width: 520px;
                height: 452px;
              }
              & div.desc {
                width:464px;
                & div.line {
                    border: 4px solid #4E7EF9;
                    width: 60px;
                    margin: 20px 0px 30px 0px;
                    border-radius: 4px;
                }
                & h2 {
                    padding: 10px 0px;
                    line-height: 28px;
                    font-size: 20px;
                    font-family: "Microsoft YaHei";
                }
                 & p.p1 {
                    color: #6c6f63;
                    font-size: 14px;
                    line-height: 20px;
                }
                & p.p2 {
                    color: #6c6f63;
                    font-size: 14px;
                    line-height: 36px;
                }
                & div {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                    & li {
                        width: 200px;
                        height: 48px;
                        border: 1px solid #ddd;
                        border-radius: 6px;
                        line-height: 48px;
                        text-align: center;
                        font-size: 16px;
                        color: #6c6e73;
                        margin-top: 20px;
                        & img {
                           width: 20px;
                           height: 20px;
                           padding-right: 10px;
                           vertical-align: sub;
                        }
                    }
                }
              }
          }  
        }
        & .box2 {
            background: #fff;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
        }
        & .bottom {
            width: 70%;
            margin: 0 auto;
            & div.line {
                border: 4px solid #4E7EF9;
                width: 60px;
                margin: 20px auto 30px;
                border-radius: 4px;
            }
            & h2 {
                text-align: center;
                padding-top: 90px;
                line-height: 28px;
                font-size: 20px;
                font-family: "Microsoft YaHei";
            }
            & ul.bottomUl {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                padding-bottom: 90px;
                & li.outSideLi {
                    width: 295px;
                    height: 386px;
                    & img{
                        padding: 40px;
                    }
                    & div {
                        text-align: center;
                    }
                    & h3 {
                        text-align: center;
                        padding-bottom: 20px;
                        font-size: 18px;
                    }
                    width: 20%;
                    background: #fff;
                    margin: 10px;
                    border-radius: 5px;
                    box-shadow: 0px 0px 12px #ddd;
                    & li {
                        line-height: 28px;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>