/*
 * @Author: hzq
 * @Date: 2018-09-08 12:18:18
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-13 00:09:46
 * @文件说明: 手绘-展示页面-默认展示【大鱼海棠】
 */
<template>
    <div class='hand-index'>
        <l-side-nav></l-side-nav>
        <l-banner class="banner" bg="#0E3851">
            <div class="banner-content">
                <div class="banner-title">手绘</div>
                <div class="banner-name">
                    <span class="line"></span>
                    <span class="text">大鱼海棠主题图标</span>
                </div>
                <div class="banner-info">
                    <div class="info">
                        所有活着的人类，都是海里的一条巨大的鱼；<br>出生的时候他们从海的此岸出发······<br>他们的生命就像横越大海，有时相遇，有时分开······<br>死的时候，他们便到了岸，各去各的世界。
                    </div>
                </div>
            </div>
            <img class="banner-img" src="../assets/hand/banner.png">
        </l-banner>
        <div class="bgImg">
            <img class="img" src="../assets/hand/bg1.png">
            <img class="img" src="../assets/hand/bg2.png">
            <img class="img" src="../assets/hand/bg3.png">
            <img class="img" src="../assets/hand/bg4.png">
            <img class="img" src="../assets/hand/bg5.png">
            <img class="img" src="../assets/hand/bg6.png">
            <img class="img" src="../assets/hand/bg7.png">
            <img class="img" src="../assets/hand/bg8.png">
            <img class="img" src="../assets/hand/bg9.png">
            <img class="img" src="../assets/hand/bg10.png">
        </div>
        <div class="introduce">
            <div class="title">大鱼海棠</div>
            <div class="info">
                北冥有鱼，其名为鲲，鲲之大，不知其几千里也。<br>化而为鸟，其名为鹏。鹏之背，不知其几千里也；<br>怒而飞，其翼若垂天之云。
            </div>
            <div class="iconImg">
                <img class="img" src="../assets/hand/icon1.png">
                <div class="textDiv">
                    <span class="textSpan">电话</span>
                    <span class="textSpan">电子书</span>
                    <span class="textSpan">计算器</span>
                </div>
                <img class="img" src="../assets/hand/icon2.png">
                <div class="textDiv">
                    <span class="textSpan">联系人</span>
                    <span class="textSpan">浏览器</span>
                    <span class="textSpan">录音机</span>
                </div>
                <img class="img" src="../assets/hand/icon3.png">
                <div class="textDiv">
                    <span class="textSpan">日历</span>
                    <span class="textSpan">设置</span>
                    <span class="textSpan">时钟</span>
                </div>
                <img class="img" src="../assets/hand/icon4.png">
                <div class="textDiv">
                    <span class="textSpan">收音机</span>
                    <span class="textSpan">手电筒</span>
                    <span class="textSpan">天气</span>
                </div>
                <img class="img" src="../assets/hand/icon5.png">
                <div class="textDiv">
                    <span class="textSpan">便签</span>
                    <span class="textSpan">相册</span>
                    <span class="textSpan">信息</span>
                </div>
                <img class="img" src="../assets/hand/icon6.png">
                <div class="textDiv">
                    <span class="textSpan">音乐</span>
                    <span class="textSpan">应用商店</span>
                    <span class="textSpan">邮箱</span>
                </div>
                <img class="img last" src="../assets/hand/icon7.png">
                <div class="textDiv">
                    <span class="textSpan">指南针</span>
                    <span class="textSpan">主题</span>
                </div>
            </div>
        </div>
        <div class="info2">
            人生是一场旅程。我们经历了几次轮回，才换来这个旅程。<br>而这个旅程很短，因此不妨大胆一些，不妨大胆一些去爱一个人，去攀一座山，去追一个梦……<br>有很多事我都不明白。但我相信一件事。上天让我们来到这个世上，就是为了让我们创造奇迹。
        </div>
        <img class="btImg1" src="../assets/hand/bt1.png">
        <img class="btImg2" src="../assets/hand/bt2.png">
        <l-footer></l-footer>
    </div>
</template>

<script>
    export default { name: 'hand-index' };
</script>

<style lang='less' scoped>
    .hand-index {
        .banner {
            margin-bottom: 500px;
            .banner-content {
                margin-right: 58px;
                text-align: right;
                color: #fff;
                overflow: hidden;
                .banner-title {
                    margin-top: 88px;
                    margin-bottom: 60px;
                    font-size: 56px;
                    font-weight: bold;
                }
                .banner-name {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    margin-bottom: 28px;
                    .line {
                        width: 58px;
                        height: 4px;
                        margin-right: 15px;
                        background-color: #fff;
                    }
                    .text {
                        font-size: 28px;
                    }
                }
                .banner-info {
                    display: flex;
                    justify-content: flex-end;
                    .info {
                        font-size: 20px;
                        line-height: 2;
                        text-align: right;
                    }
                }
            }
            .banner-img {
                position: absolute;
                left: -125px;
                top: 150px;
                width: 715px;
            }
        }
        .bgImg {
            position: absolute;
            top: 0;
            z-index: -1;
            .img {
                display: block;
                width: 100%;
            }
        }

        .introduce {
            margin-top: 2100px;
            text-align: center;
            color: #fefefe;
            .title {
                font-size: 44px;
                font-weight: bold;
            }
            .info {
                margin: 85px auto 132px;
                font-size: 24px;
                line-height: 2;
            }
            .iconImg {
                width: 870px;
                margin: 0 auto;
                .img {
                    display: block;
                    width: 100%;
                }
                .last {
                    width: 520px;
                }
                .textDiv {
                    display: flex;
                    align-items: center;
                    padding: 30px 0;
                    margin-bottom: 40px;
                    .textSpan {
                        width: 170px;
                        text-align: center;
                        font-size: 28px;
                        &:nth-child(2) {
                            margin: 0 180px;
                        }
                    }
                }
            }
        }
        .info2 {
            margin: 330px auto 130px;
            text-align: center;
            color: #fefefe;
            font-size: 24px;
            line-height: 2;
        }
        .btImg1 {
            display: block;
            width: 987px;
            margin-left: 512px;
        }
        .btImg2 {
            display: block;
            width: 981px;
            margin: 96px auto;
        }
    }
</style>
