/*
 * @Author: hzq
 * @Date: 2018-09-09 14:06:37
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-11 23:07:55
 * @文件说明: 手机端展示页面
 */
<template>
    <div class='mobile-index'>
        <l-side-nav></l-side-nav>
        <l-banner class="banner" bg="#22ddbb">
            <div class="banner-content">
                <div class="banner-title">手机端</div>
                <div class="banner-name">
                    <span class="line"></span>
                    <span class="text">知音APP</span>
                </div>
                <div class="banner-info">
                    <div class="info" v-html="info">

                    </div>
                </div>
            </div>
            <img class="banner-img" src="../../assets/mobile/banner.png"></l-banner>
        <div class="logo">
            <img class="logo-img" src="../../assets/mobile/logo.png">
            <div class="logo-info">
                <div class="item-title">知音LOGO</div>
                <div class="item-text">运用布尔运算绘制，简化字体，遵循LOGO<br>易辨性原则和特殊以及唯一性设计
                </div>
            </div>
        </div>
        <div class="classify">
            <img class="classify-img" src="../../assets/mobile/classify.png">
            <div class="classify-info">
                <div class="item-title">推荐分类</div>
                <div class="item-text">不错过任何经典作品；每日新鲜内容按时更新；<br>还有更多免费书籍等你来阅读
                </div>
                <div class="item-line"></div>
            </div>
        </div>
        <div class="recommend">
            <img class="recommend-img" src="../../assets/mobile/recommend.png">
            <div class="recommend-info">
                <div class="item-line"></div>
                <div class="item-title">智能推荐</div>
                <div class="item-text">根据个人爱好每天智能推荐音频，<br>随时随地收听最爱新资讯
                </div>
            </div>
        </div>
        <div class="bookshelf">
            <img class="bookshelf-img" src="../../assets/mobile/bookshelf.png">
            <div class="bookshelf-info">
                <div class="item-title">书架内容
                    <div class="item-line"></div>
                </div>
                <div class="item-text">记录你最近收听或阅读的书籍，<br>随时随地查看阅读进度
                </div>
            </div>
        </div>
        <div class="playback">
            <img class="playback-img" src="../../assets/mobile/playback.png">
            <div class="playback-info">
                <div class="item-title">播放栏</div>
                <div class="item-line"></div>
                <div class="item-text">方便随时操作播放状态，<br>点击即可快速进入播放页面
                </div>
            </div>
        </div>
        <div class="app">
            <img class="app-img" src="../../assets/mobile/app.png">
            <div class="app-info">
                <div class="item-title">知音App
                    <div class="item-line"></div>
                </div>
                <div class="item-text">爱很静，不妨碍彼此的生活，<br>只在精神领域共鸣。<br>这就是知音！
                </div>
            </div>
        </div>
        <img class="bottom-img" src="../../assets/mobile/bottom.png">
    </div>
</template>

<script>
    export default {
        name: 'mobile-index',
        data() {
            return {
                info:
                    '<b>《知音》</b>针对现在的青少年人群所设计的一款轻松学习和放松心情的音频APP。<br> 它是合理的利用你的碎片化时间去学习和充实自己。内设<b>随时听</b>功能，随时随地<b>智能<br>推荐</b>最新热点，让你不会错过任何感兴趣的生活细节。'
            };
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .mobile-index {
        .banner {
            .banner-content {
                margin-right: 58px;
                text-align: right;
                color: #fff;
                overflow: hidden;
                .banner-title {
                    margin-top: 88px;
                    margin-bottom: 67px;
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
                top: 400px;
                width: 933px;
            }
        }
        .item-title {
            position: relative;
            font-size: 36px;
            color: #333;
            margin-bottom: 45px;
        }
        .item-text {
            color: #666;
            font-size: 28px;
        }
        .item-line {
            width: 60px;
            height: 4px;
            background-color: #20baa7;
        }
        .logo {
            display: flex;
            align-items: center;
            margin-top: 500px;
            .logo-img {
                width: 274px;
                margin-left: 454px;
                margin-right: 210px;
            }
            .logo-info {
                .item-title {
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        left: -21px;
                        top: -15px;
                        width: 4px;
                        height: 37px;
                        background-color: #20baa7;
                    }
                }
            }
        }
        .classify {
            position: relative;
            margin-top: 100px;
            .classify-img {
                display: block;
                width: 100%;
            }
            .classify-info {
                position: absolute;
                top: 317px;
                left: 330px;
                .item-line {
                    margin-top: 43px;
                }
            }
        }
        .recommend {
            display: flex;
            align-items: center;
            margin-top: 105px;
            .recommend-img {
                width: 635px;
                margin-left: 360px;
                margin-right: 190px;
            }
            .item-line {
                margin-bottom: 25px;
            }
        }
        .bookshelf {
            position: relative;
            .bookshelf-img {
                display: block;
                width: 100%;
            }
            .bookshelf-info {
                position: absolute;
                top: 320px;
                left: 361px;
                .item-line {
                    position: absolute;
                    bottom: 4px;
                    left: 167px;
                }
            }
        }
        .playback {
            display: flex;
            align-items: center;
            margin-top: 107px;
            .playback-img {
                display: block;
                width: 973px;
                margin-left: 258px;
                margin-right: 20px;
            }
            .playback-info {
                .item-title {
                    margin-bottom: 30px;
                }
                .item-line {
                    margin-bottom: 60px;
                }
            }
        }
        .app {
            position: relative;
            margin-top: 50px;
            .app-img {
                display: block;
                width: 100%;
            }
            .app-info {
                position: absolute;
                top: 420px;
                left: 361px;
                .item-line {
                    position: absolute;
                    left: -21px;
                    top: -15px;
                    width: 4px;
                    height: 37px;
                }
            }
        }
        .bottom-img {
            display: block;
            width: 1488px;
            margin: -400px auto 150px;
        }
    }
</style>
