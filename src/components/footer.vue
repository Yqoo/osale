<!--
 * @Date: 2019-10-12 16:30:05
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-18 15:44:46
 * @Desc: 
 -->
<template>
    <div class="footer">
        <div class="main">
            <div class="box">
                <div class="insideBox">
                    <p v-for="( item,index) in products" :key="index">{{item.name}}</p>
                </div>
                <div class="insideBox">
                    <p>客户案例</p>
                    <div class="displayDiv">
                        <ul>
                            <li v-for="(item,index) in scheme1" :key="index">{{item.name}}</li>
                        </ul>
                        <ul>
                            <li v-for="(item,index) in scheme2" :key="index">{{item.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="insideBox">
                    <p>联系我们</p>
                    <p v-for="(item,index) in contact" :key="index">
                        <i :class="item.icon"></i>
                        <span class="first">{{item.name}}:</span>
                        <span>{{item.value}}</span>
                    </p>
                </div>
                <div class="insideBox">
                    <p>官方微信公众号</p>
                    <img :src="require('@/assets/image/index/qr.png')" alt="">
                </div>
            </div>
            
        </div>
        <div class="bottom">
            <span v-for="(item,key) in app" :key="key">{{item.name}}</span>
        </div>
        <div class="bottomDesc">
            Copyright 2016深圳网中网科技有限公司 ALL Rights Reserved 粤ICP备12079848号-2 灵析软件 版权所有
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            products: [
                { name: '灵析产品', url: ''},
                { name: '服装零售版', url: ''},
                { name: '服装连锁版', url: ''},
                { name: '服装分销版', url: ''},
            ],
            scheme1: [
                { name: '服装行业', url: ''},
                { name: '箱包饰品', url: ''},
                { name: '内衣家居', url: ''},
            ],
            scheme2: [
                { name: '母婴用品', url: ''},
                { name: '家访用品', url: ''},
                { name: '五金灯饰', url: ''},
            ],
            contact: [
                { icon: 'el-icon-mobile-phone',name: '电话', value: '0755-82234180'},
                { icon: 'el-icon-s-custom', name: '企业QQ', value: '4008774777'},
                { icon: 'el-icon-message', name: '邮箱', value: 'osalesoft@163.com'},
            ],
            app: [
                { name: '服装进销存', url: '' },
                { name: '服装软件', url: '' },
                { name: '服装管理软件', url: '' },
                { name: '服装连锁管理软件', url: '' },
                { name: '鞋业软件', url: '' },
                { name: '服装进销存软件', url: '' },
                { name: '销售管理软件', url: '' },
                { name: '服饰零售管理软件', url: '' },
                { name: '服装行业进销存软件', url: '' },
            ]
        }
    },
}
</script>

<style lang="less" scoped>
    .footer {
        background: #131418;
        color:#fff;
        font-family: "Microsoft YaHei";
        & .main {
            width: 70%;
            margin: 0 auto;
            & .box {
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                & .insideBox{
                    & p:first-child {
                        font-size: 16px;
                        color: #7a7a7b;
                        padding:60px 0px 30px 0px;
                    }
                    & p:not(:first-child){
                        font-size: 14px;
                        line-height: 36px;
                        font-family: "Microsoft YaHei";
                        & i {
                            padding-right: 15px;
                        }
                        & span.first {
                            width: 70px;
                            display: inline-block;
                        }
                    }
                    & .displayDiv {
                        display: flex;
                        & ul:first-child{
                            margin-right: 20px;
                        }
                        & li {
                            line-height: 36px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
         & .bottom {
            text-align: center;
            padding: 30px 0px 20px 0px;
            border-bottom: 1px solid #444446;
            font-size: 14px;
            color:#fff;
            & span {
                padding: 0px 10px;
            }
        }
        & .bottomDesc {
            text-align: center;
            font-size: 12px;
            padding:14px 0px;
        }
    }
</style>