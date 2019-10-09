<!--
 * @Date: 2019-10-09 16:12:51
 * @LastEditors: Yqoo
 * @LastEditTime: 2019-10-09 17:05:07
 * @Desc: 
 -->
<template>
    <div class="home">
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="10">
                        logo
                    </el-col>
                    <el-col :span="8">
                        2
                    </el-col>
                    <el-col :span="6">
                        <el-button
                           type="normal" 
                           size="small" 
                           icon="el-icon-phone"
                           class="phoneBtn">0755-82779639</el-button>
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
    name: 'Home'
}
</script>

<style lang="less" scoped>
    @media screen and (max-width: 1365px) {
        body {
            font-size: 10px;
        }
    }
    @color:#3490de;
    @fontColor:#00b8a9;
    .home {
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        & .el-container {
            & .el-header {
                background-color: @color;
                line-height: 60px;
                & .el-menu {
                    background-color: @color;
                    & li{
                        color: #eee;
                    }
                    & li.is-active{
                        color : @fontColor;
                        background: @color;
                        border-bottom: 1px solid #eee;
                    }
                    & li:hover {
                        background: @color;
                        color:  @fontColor;
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