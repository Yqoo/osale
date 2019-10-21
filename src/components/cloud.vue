<!--
 * @Date: 2019-10-21 09:31:12
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-21 12:06:34
 * @Desc: 云服务组件
 -->
<template>
  <div class="cloudServe">
    <img :src="require('@/assets/image/cloud/banner.png')" alt="" class="topImg heartBeat animated">
    <div class="main">
      <div class="box_1 bounceIn animated">
        <div v-for="(item,index) in box1" :key="index" class="outside hvr-grow">
          <div>
            <img :src="item.img" alt="">
            <p class="pf">{{item.title}}</p>
            <p class="sf">{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="box_2 flipInX animated">
        <div class="outside">
          <h3>手机APP</h3>
          <div class="line"></div>
          <p>手机APP是基于移动互联网技术的高效率协同办公系统,是一个便捷高效的运营数据查询平
            台,用户通过手机APP,能随时随地轻松联网查询,让经营管理者对店铺日常业务数据的了
            解,实现数据信息全过程的监管。
          </p>
        </div>
        <div class="outside">
          <img :src="require('@/assets/image/cloud/shouji.png')" alt="">
        </div>
      </div>
      <div class="box_3 flipInY animated">
        <h2>主要特性、应用价值</h2>
        <div class="line"></div>
        <div class="outside">
          <ul>
            <li>
              <img :src="require('@/assets/image/cloud/49.png')" alt="">
              <span>手机、平台即可实时掌握各门店的营业情况</span>
            </li>
            <li>
              <img :src="require('@/assets/image/cloud/48.png')" alt="">
              <span>全实时数据，为经营决策提供强大的数据支持</span>
            </li>
            <li>
              <img :src="require('@/assets/image/cloud/47.png')" alt="">
              <span>商品的品名、规格、各门店库存、销量等数据</span>
            </li>
          </ul>
          <ul>
            <li>
              <img :src="require('@/assets/image/cloud/37.png')" alt="">
              <span>配置简单、使用方便，支持账户查询权限控制，有利于保护企业机密</span>
            </li>
            <li>
              <img :src="require('@/assets/image/cloud/46.png')" alt="">
              <span>支持在线查询商品信息，通过手机扫描或输入商品二维码，即可查询</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="box_4">
        <div class="lineImg line_1">
          <div class="outside hvr-grow-rotate">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/kucunchaxun.png')" alt="">
              <p>库存查询</p>
            </div>
          </div>
          <div class="outside hvr-bounce-out">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/6bianxin_1.png')" alt="">
            </div>
          </div>
          <div class="outside hvr-grow-rotate">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/diaohuocaxun.png')" alt="">
              <p>调货查询</p>
            </div>
          </div>
          <div class="outside hvr-bounce-out">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/6bianxin_1.png')" alt="">
            </div>
          </div>
          <div class="outside hvr-grow-rotate">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/mendianyeji.png')" alt="">
              <p>门店业绩</p> 
            </div>
          </div>
        </div>
        <div class="lineImg line_2">
          <div class="outside hvr-wobble-to-bottom-right">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/shujufenxi.png')" alt="">
              <p>数据分析</p>
            </div>
          </div>
          <div class="outside hvr-wobble-to-bottom-right">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/yingyeyuanyeji.png')" alt="">
              <p>营业员业绩</p>
            </div>
          </div>
          <div class="outside hvr-wobble-to-bottom-right">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/zonglanxiangqing.png')" alt="">
              <p>总览详情</p>
            </div>
          </div>
          <div class="outside hvr-wobble-to-bottom-right">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/xiaoshoushuju.png')" alt="">
              <p>销售数据</p>
            </div>
          </div>
        </div>
        <div class="lineImg line_3">
          <div class="outside hvr-wobble-vertical">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/huiyuanxinxi.png')" alt="">
              <p>会员信息</p>
            </div>
          </div>
          <div class="outside hvr-bounce-out">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/6bianxin_1.png')" alt="">
            </div>
          </div>
          <div class="outside hvr-wobble-vertical">
            <img :src="require('@/assets/image/cloud/6bianxin.png')" alt="">
            <div>
              <img :src="require('@/assets/image/cloud/shishixiaoxituisong.png')" alt="">
              <p>信息通知</p>
            </div>
          </div>
        </div>
      </div>
      <div class="box_2 rotateIn animated">
        <div class="outside">
          <img :src="require('@/assets/image/cloud/shouji.png')" alt="">
        </div>
        <div class="outside">
          <h3>微信会员</h3>
          <div class="line"></div>
          <p>整合企业微信公众号平台,专为灵析用户提供线上+线下一体化会员、实现自主营销,线上商城
            与线下店铺相互支撑，为会员提供多渠道购物平台，双管齐下为店铺创收。
            线上线下会员完美对接:商家显示出商家的公众号二维码，顾客通过手机微信扫一扫,即可看
            到商家的公众号关注,按照提示即可注册会员，顾客可以实时掌握会员积分或者余额情况。
          </p>
        </div>
      </div>
      <div class="box_5 zoomInUp animated">
        <h2>会员线上+线下完美对接</h2>
        <div class="line"></div> 
        <div class="outside">
          <div v-for="(item,index) in box5" :key="index" class="inside hvr-wobble-vertical">
            <div class="pos">
              <div>
                <img :src="item.img" alt="">
              </div>
              <div>
                <h3>{{item.title}}</h3>
                <p>{{item.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cloud',
  data(){
    return {
      box1: [
        { img: require('@/assets/image/cloud/yunduanchucun.png'), title: '云端存储', desc: '用户无须自建服务器，由本公司提供云服务端，真正实现多线网络连接访问。' },
        { img: require('@/assets/image/cloud/houtaiguanliduan.png'), title: '后台管理端', desc: '后台管理人员(操作员)使用，实现对多店铺业务管理，无收银功能。' },
        { img: require('@/assets/image/cloud/dianmianshouyingduan.png'), title: '店面收银端', desc: '门店销售收银、会员查询、库存盘点等，按店面数量每年收费。' },
        { img: require('@/assets/image/cloud/shoujiapp.png'), title: '手机APP', desc: '随时查看店铺日常业务数据，实时数据信息全过程的监管。' },
        { img: require('@/assets/image/cloud/weixinhuiyuan.png'), title: '微信会员', desc: '线上线下会员完美对接、消费、充值、折扣' },
      ],
      box5: [
        { img: require('@/assets/image/cloud/saomazhuce.png'), title: '扫码注册', desc: '快速注册会员，直接微信扫一扫注册' },
        { img: require('@/assets/image/cloud/weixinhuiyuanka.png'), title: '微信会员卡', desc: '替代实体会员卡，节约成本' },
        { img: require('@/assets/image/cloud/zhuanshuerweima.png'), title: '专属二维码', desc: '到店消费扫一扫，立享会员优惠' },
        { img: require('@/assets/image/cloud/chuzhixiaofei.png'), title: '储值消费', desc: '微会员在线充值，即时到账' },
        { img: require('@/assets/image/cloud/shishitongbu.png'), title: '实时同步', desc: '线上线下会员信息实时同步显示' },
        { img: require('@/assets/image/cloud/xinxitongzhi.png'), title: '实时消息推送', desc: '消费信息，积分变动，储值余额自动推送给微信会员' },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
  .cloudServe {
    font-family: "Microsoft YaHei";
    background: #F6FAFC;
    & .topImg{
      width: 100%;
    }
    & .main {
      width: 70%;
      margin: 0 auto;
    }
    & .line {
      border: 4px solid #4E7EF9;
      width: 60px;
      margin: 20px 0px 30px 0px;
      border-radius: 4px;
    }
    & .box_1 {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      padding-top: 80px;
      & div.outside {
        width: 238px;
        height: 336px;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0px 0px 10px #ddd;
        background: #fff;
        margin-top: 10px;
        position: relative;;
        & div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 100%;
          & p.pf{
            font-size: 18px;
            line-height: 58px;
          }
          & p.sf {
            line-height: 28px;
            padding: 0px 20px;
            color:#373839;
          }
        }
      }
    }
    & .box_2 {
      padding-top: 90px;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      & div.outside {
        & h3 {
          font-size: 28px;
        }
        & p {
          width: 470px;
          line-height: 26px;
          font-size: 14px;
          color: #373839;
        }
        & img {
          width: 470px;
          height: 450px;
        }
      }
    }
    & .box_3 {
      text-align: center;
      padding-top: 90px;
      & h2 {
        font-size: 28px;
      }
      & div.line {
        margin: 20px auto 30px;
      }
      & .outside {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        & li {
          text-align: left;
          padding: 20px 0px;
          & span {
            padding: 20px;
          }
          & img{
            vertical-align: middle;
          }
        }
      }
    }
    & .box_5 {
      padding: 90px 0px;
      & div.line {
        margin: 20px auto 30px;
      }
      & h2 {
        text-align: center;
        font-size: 28px;
      }
      & div.outside {
        display: flex;
        flex-flow: row wrap;
        & div.inside {
          width: 410px;
          height: 138px;
          position: relative;
          border: 1px solid #ddd;
          box-shadow: 0px 0px 10px #ddd;
          margin: 10px;
          border-radius: 8px;
          & div.pos {
            display: flex;
            position: absolute;
            top:50%;
            left: 20%;
            transform: translate(-20%,-50%);
            & div:last-child {
              padding-left: 20px;
              & h3 {
                font-size: 20px;
                padding-bottom: 20px;
              }
              & p {
                color: #373839;
              }
            }
          }
        }
      }
    }
    & .box_4 {
      & .lineImg {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        & div.outside {
          position: relative;
          & div {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            & p {
              padding-top: 10px;
            }
          }
        }
      }
      & .line_2 {
        padding: 0px 160px;
      }
      & .line_3 {
        padding: 0px 260px;
      }
    }
  }
</style>