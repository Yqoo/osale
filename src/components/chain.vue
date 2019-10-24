<!--
 * @Date: 2019-10-23 17:20:56
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-24 17:28:59
 * @Desc: 服装连锁网络版
 -->
<template>
  <div class="chain">
    <img :src="require('@/assets/image/chain/banner-1.png')" alt="" class="heartBeat animated">
    <div class="main">
      <div id="box_1" :class="{box_1:true, fadeInRight: box_1, animated: true}">
        <div class="outside">
          <div class="inside">
            <h3>互联网时代</h3>
            <h3>与客户共同进步</h3>
            <div class="line"></div>
            <p class="desc">
              灵析服装连锁网络版采用总部与i ]店两级架构,更加简便、更加贴近自创品牌店的发展趋势,
              通过后台统一管理各分店的库存、 及销售数据的服装连锁销售软件,服装库存连锁管理软件。
              在互联网+时代,与客户共同进步,助力客户实现数据信息化管理。
            </p>
          </div>
        </div>
        <div class="outside">
          <img :src="require('@/assets/image/chain/hulianwang.png')" alt="">
        </div>
      </div>
      <div id="box_2" :class="{box_2:true, fadeInLeft:box_2, animated:true}">
        <h3>适用于中小型服装企业</h3>
        <div class="line"></div>
        <ul class="outside">
          <li>
            <img :src="require('@/assets/image/chain/fuzhuanglliansuo.png')" alt="">
            <p>服装连锁经营模式</p>
          </li>
          <li>
            <img :src="require('@/assets/image/chain/shangchanglianying.png')" alt="">
            <p>商场联营店柜模式</p>
          </li>
          <li>
            <img :src="require('@/assets/image/chain/pinpaishangmao.png')" alt="">
            <p>服装品牌商贸公司</p>
          </li>
          <li>
            <img :src="require('@/assets/image/chain/zhiyingpinpai.png')" alt="">
            <p>自营品牌工作室</p>
          </li>
        </ul>
      </div>
      <div id="box_3" :class="{box_3:true, fadeInRight:box_3, animated: true}">
        <h3>主要特性、应用价值</h3>
        <div class="line"></div>
        <div class="outside">
          <ul>
            <li v-for="(item,index) in box3.left" :key="index">
              <div>
                <img :src="item.img" alt="">
              </div>
              <div>
                <h4>{{item.title}}</h4>
                <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
          <ul>
           <li v-for="(item,index) in box3.right" :key="index">
              <div>
                <img :src="item.img" alt="">
              </div>
              <div>
                <h4>{{item.title}}</h4>
                <p>{{item.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div id="box_4" :class="{box_4:true, zoomIn:box_4, animated:true}">
        <h3>产品功能简介</h3>
        <div class="line"></div>
        <div class="outside">
          <div class="left">
            <img :src="require('@/assets/image/chain/houtaiguanli.png')" alt="">
          </div>
          <div class="right">
            <h2>后台管理端</h2>
            <p class="desc">后台管理人员（操作员）使用。实现对多店铺业务管理（例如用户权限控制：采购进货、条码打印、库存管理、调货、门店促销方案制定、统计数据查询等），不带收银功能</p>
            <ul>
              <li v-for="(item,index) in box4" :key="index">
                <img :src="item.img" alt="">
                <div>{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div> 
      </div>
      <div id="box_6" :class="{box_4: true, tada: box_6, animated:true}">
        <div class="outside">
          <div class="right">
            <h2>店铺收银端</h2>
            <p class="desc">门店销售收银、会员查询、库存盘点等，一个门店安装一个端口。</p>
            <ul>
              <li v-for="(item,index) in box5" :key="index">
                <img :src="item.img" alt="">
                <div>{{item.name}}</div>
              </li>
            </ul>
          </div>
          <div class="left">
            <img :src="require('@/assets/image/chain/dianpushouyin.png')" alt="">
          </div>
        </div> 
      </div>
      <div id="box_5" :class="{box_5: true, lightSpeedIn: box_5, animated: true}">
        <h3>店铺日常事务介绍</h3>
        <div class="line"></div> 
        <ul class="outside">
          <li v-for="(item,index) in box6" :key="index" class="hvr-forward">
            <img :src="item.img" alt="">
            <h4>{{item.title}}</h4>
            <ul>
              <ol v-for="(ol,i) in item.desc" :key="i">
                {{ol}}
              </ol>  
            </ul>  
          </li>
        </ul>  
      </div>
    </div>
  </div>
</template>

<script>
import { closeSync } from 'fs';
export default {
  name: 'chain',
  data(){
    return {
      box3: {
        left: [
          { img: require('@/assets/image/chain/hulianwangjishu.png'), title: '互联网技术', desc: '基于互联网技术开发，实现同城异地办公，用户可自建服务器或云服务数据库；' },
          { img: require('@/assets/image/chain/tongyijiandang.png'), title: '统一建档', desc: '管理员规划建立档案信息、分配角色权限、门店仓库登记、VIP等级设定等；' },
          { img: require('@/assets/image/chain/quanxianfenming.png'), title: '权限分明', desc: '用户登录时系统判定权限后自动显示/隐藏相应的功能模块；' },
          { img: require('@/assets/image/chain/liuchengqingxi.png'), title: '流程清晰', desc: '操作员采购货品入库总仓，将货品调出给分店，分店确认入库；分店也可单独采购入库；' },
        ],
        right: [
          { img: require('@/assets/image/chain/shishichakn.png'), title: '实时查看', desc: '店长可随时查看商品库存分布，方便各店之间相互调货；查看总部公告信息；' },
          { img: require('@/assets/image/chain/shixiaoshijie.png'), title: '实销实结', desc: '库存随时变化，管理员可实时查看所有门店的销售情况，库存情况；复查并审核各门店月末盘点差异情况；' },
          { img: require('@/assets/image/chain/huiyuanguanli.png'), title: '会员管理', desc: 'VIP会员资料共享,会员充值后、可到异地各分店储值消费，统一打折积分，(同步微信公众号会员卡,消费、充值.积分变动实时通过公众号发送推送消息)；' },
          { img: require('@/assets/image/chain/lixianshouyin.png'), title: '离线收银', desc: '门店可用离线模式登录收银台，断网或网络不通时也能作收银结算（同步支持微信扫码支付）；' },
        ],
      },
      box4: [
        { img: require('@/assets/image/chain/jinhuocaigou.png'), name: '采购进货' },
        { img: require('@/assets/image/chain/diaohuoguanli.png'), name: '调货管理' },
        { img: require('@/assets/image/chain/kucunguanli.png'), name: '库存管理' },
        { img: require('@/assets/image/chain/cuxiaoguanli.png'), name: '促销管理' },
        { img: require('@/assets/image/chain/yonghujiaose.png'), name: '用户角色配置' },
        { img: require('@/assets/image/chain/shangpindangan.png'), name: '商品档案' },
        { img: require('@/assets/image/chain/mendianguanli.png'), name: '门店管理' },
        { img: require('@/assets/image/chain/yuangongdangan.png'), name: '员工档案' },
        { img: require('@/assets/image/chain/yuangongbanbiao.png'), name: '员工班表' },
        { img: require('@/assets/image/chain/gongyingshang.png'), name: '供应商应收应付管理' },
        { img: require('@/assets/image/chain/lingshouyejitongji.png'), name: '零售业绩统计' },
        { img: require('@/assets/image/chain/jinxiaocuntongji.png'), name: '进销存统计' },
        { img: require('@/assets/image/chain/xitonggonggao.png'), name: '系统公告' },
        { img: require('@/assets/image/chain/tiaomadayin.png'), name: '条码打印' },
        { img: require('@/assets/image/chain/piaojudaying.png'), name: '票据打印' },
      ],
      box5: [
        { img: require('@/assets/image/chain/shouyintai.png'), name: '收银台' },
        { img: require('@/assets/image/chain/weixinzhifu.png'), name: '微信支付' },
        { img: require('@/assets/image/chain/zhifubaozhifu.png'), name: '支付宝支付' },
        { img: require('@/assets/image/chain/posxiaopiao.png'), name: 'POS小票' },
        { img: require('@/assets/image/chain/saomaqiang.png'), name: '扫描枪' },
        { img: require('@/assets/image/chain/huopindiaoru.png'), name: '货品调入' },
        { img: require('@/assets/image/chain/kucunfenbuchaxun.png'), name: '库存分布查询' },
        { img: require('@/assets/image/chain/lingshoumingxi.png'), name: '零售明细表' },
        { img: require('@/assets/image/chain/yingyeyuanyejipaiming.png'), name: '营业员业绩排名' },
        { img: require('@/assets/image/chain/yuangongbanbiao.png'), name: '排班表' },
        { img: require('@/assets/image/chain/jiaojieban.png'), name: '交接班' },
        { img: require('@/assets/image/chain/fanxiudengji.png'), name: '返修登记' },
        { img: require('@/assets/image/chain/shouzhidengji.png'), name: '收支登记' },
        { img: require('@/assets/image/chain/kehudingdan.png'), name: '客户订货' },
        { img: require('@/assets/image/chain/huiyuanjifen.png'), name: '会员积分' },
        { img: require('@/assets/image/chain/huiyuancongzhi.png'), name: '会员充值' },
        { img: require('@/assets/image/chain/weixinhuiyuan.png'), name: '微信会员' },
      ],
      box6: [
        { img: require('@/assets/image/chain/dashouyintai.png'), title: '收银台', desc: [
          '支持断网收银',
          '支持款号以及条码扫描销售',
          '支持挂单、提单',
          '支持营业员业绩销售',
          '支持客人预订商品',
          '支持商品退货、换贷处理',
          '支持小票打印',
          '支持多种结算方式记账支付宝、',
          '微信、银行卡、储值卡',
        ] },
        { img: require('@/assets/image/chain/dahuyuanguanli.png'), title: '会员管理', desc: [
          '支持店面添加新会员，维护会员信息',
          '支持微信会员绑定',
          '支持直接授权店员给会员充值功能',
          '支持会员年费卡，购卡功能',
        ] },
        { img: require('@/assets/image/chain/dakuchunguanli.png'), title: '库存查询', desc: [
          '支持店面库存，跨店库存查询',
          '支持畅销商品，实现更快速销售'
        ] },
        { img: require('@/assets/image/chain/dakucunpandian.png'), title: '库存盘点', desc: [
          '支持在线盘点，无需停业盘点',
          '支持按区域划分、分类盘点',
          '支持扫描枪、盘点机。手机移动盘点',
          '支持漏盘末盘、盘亏、盘盈实时查看'
        ] },
      ],
      box_1: true,
      box_2: true,
      box_3: true,
      box_4: true,
      box_5: true,
      box_6: true,
    }
  },
  created(){
    window.addEventListener('scroll', this.scroll)
  },
  methods: {
    elementIsVisibleInViewport (el , partiallyVisible = false){
      const { top, left, bottom, right } = el.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      return partiallyVisible
        ? ((top > 0 && top < innerHeight + 100) || (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    },
    scroll(){
      let arr = ['box_1','box_2','box_3','box_4','box_5','box_6'];
      arr.forEach( item => {
        let box = document.getElementById(item);
        let res = this.elementIsVisibleInViewport(box,true);
        res && (this[item] = true) || (this[item] = false);
      })
    },
    
  },
}
</script>

<style lang="less" scoped>
  .chain {
    color: #373839;
    & img.heartBeat {
      width: 100%;
    }
    & .line {
      border: 4px solid #4E7EF9;
      width: 60px;
      margin: 20px 0px 30px 0px;
      border-radius: 4px;
    }
    & .main {
      width: 70%;
      margin: 0 auto;
    }
    & .box_1 {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      padding-top: 90px;
      & .outside{
        width:568px;
        height: 492px;
        position: relative;
        & .inside {
          position: absolute;
          top: 30%;
          & h3 {
            font-size: 28px;
          }
          & p {
            line-height: 26px;
            color: #373839;
          }
        }
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
    & .box_2 {
      text-align: center;
      padding-top: 90px;
      height: 440px;
      & h3 {
        font-size: 28px;
      }
      & .line {
        margin: 20px auto 30px;
      }
      & ul.outside {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        padding-top: 30px;
        & p {
          padding-top: 20px;
          font-size: 18px;
          color: #373839;
        }
      }
    }
    & .box_3 {
      text-align: center;
      height: 686px;
      & h3 {
        font-size: 28px;
      }
      & .line {
        margin: 20px auto 30px;
      }
      & .outside {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        & ul {
          width: 560px;
        }
        & li {
          display: flex;
          flex-flow: row wrap;
          margin-top: 10px;
          height : 110px;
          & div:last-child{
            padding-left: 20px;
            text-align: left;
            width: 70%;
            & h4 {
              padding-bottom: 10px;
              font-size: 18px;
            }
            & p {
              font-size: 14px;
              color: #6c6e73;
              line-height: 23px;
            }
          }
        }
      }
    }
    & .box_4 {
      padding-top: 90px;
      & h3 {
        text-align: center;
        font-size: 28px;
      }
      & .line {
        margin: 20px auto 30px;
      }
      & div.outside {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        & .left {
          width: 389px;
          height: 370px;
          margin-top: 20px;
          & img {
            width: 100%;
            height: 100%;
          }
        }
        & .right {
          width: 650px;
          & h2 {
            font-size: 24px;
            color: #219ae9;
            padding-bottom: 14px;
          }
          & p.desc {
            line-height: 23px;
          }
          & ul {
            display: flex;
            flex-flow: row wrap;
            & li {
              width: 33.3%;
              display: flex;
              flex-flow: row nowrap;
              margin-top: 20px;
              height : 52px;
              & img {
                height: 100%;
              }
              & div {
                line-height: 52px;
                padding-left: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 120px;
              }
            }
          }
        }
      }
    }
    & .box_5 {
      padding: 90px 0px;
      & h3 {
        text-align: center;
        font-size: 28px;
        color: #219ae9;
      }
      & .line {
        margin: 20px auto 30px;
      }
      & .outside {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        & li {
          width: 295px;
          //height: 386px;
          margin-top: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0px 0px 10px #ddd;
          & img {
            padding: 20px 0px;
          }
          & h4 {
            font-size: 22px;
            padding-bottom: 10px;
          }
          text-align: center;
          & ul {
            width: 70%;
            text-align: left;
            margin: 0 auto;
            & ol {
              padding: 5px 0px;
              font-size: 14px;
              color: #6c6e73;
            }
          }
        }
      }

    }
  }
</style>