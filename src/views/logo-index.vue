/*
 * @Author: hzq
 * @Date: 2018-09-08 12:18:18
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-12 23:52:53
 * @文件说明: logo-展示页面 （铲屎官||云玺印）
 */
<template>
    <div class='logo-index' :style="logoIndex">
        <l-side-nav></l-side-nav>
        <div class="banner" :class="{'yxy-banner':yxy}">
            <div class='banner-tab'>
                <ul class="tab-ul">
                    <router-link v-for="i in tab" :key="i.router" :to="i.router" class="tab-li" active-class="tab-curr-li" tag="li">
                        <div class="tab-name">{{i.name}}</div>
                        <div class="tab-line"></div>
                    </router-link>
                </ul>
            </div>
            <div class="banner-info">
                <div class="logo">LOGO</div>
                <div class="title">
                    <span class="line"></span>
                    <span class="text">{{bannerInfo.text}}</span>
                    <span class="line"></span>
                </div>
                <div class="info" :class="{'yxy-info':yxy}">
                    {{bannerInfo.info}}
                </div>
            </div>
        </div>
        <div class="yxy" v-if="yxy">
            <img class="content1" src="../assets/logo/yxy/content1.png">
            <div class="content-title">
                <span class="line"></span>
                <span class="text">设计灵感</span>
                <span class="line"></span>
            </div>
            <div class="content2">
                <img class="left" src="../assets/logo/yxy/content2.png">
                <div class="right">
                    <div class="title">云玺印公司形象</div>
                    <div class="text">专业、高效、自信</div>
                    <div class="empty"></div>
                    <div class="title">LOGO设计形式</div>
                    <div class="text">公司名称——云玺印中文名、YUNXIYIN英文名<br>图形——跟公司业务、形象相关联
                    </div>
                </div>
            </div>
            <div class="content-title">
                <span class="line"></span>
                <span class="text">设计规范</span>
                <span class="line"></span>
            </div>
            <img class="content3" src="../assets/logo/yxy/content3.png">
            <div class="content-title">
                <span class="line"></span>
                <span class="text">色彩诠释</span>
                <span class="line"></span>
            </div>
            <div class="content4">
                <img class="left" src="../assets/logo/yxy/content4.png">
                <div class="right">
                    <div class="title">色彩诠释</div>
                    <div class="text">因为公司业务涉及印刷业务<br>所以色彩配置来源于印刷的色彩空间CMYK<br>CMYK分别为：青色Cyan、洋红色Magenta、黄色Yellow、黑色Black<br>黑色取最后一个字母,之所以不取首字母,是为了避免与蓝色Blue混淆
                    </div>
                </div>
            </div>
            <div class="content-title">
                <span class="line"></span>
                <span class="text">黑白情况</span>
                <span class="line"></span>
            </div>
            <div class="content5">
                <img class="img2" src="../assets/logo/yxy/content5_2.png">
                <img class="img1" src="../assets/logo/yxy/content5_1.png">
            </div>
            <div class="content-title">
                <span class="line"></span>
                <span class="text">应用场景</span>
                <span class="line"></span>
            </div>
            <img class="content6" src="../assets/logo/yxy/content6_1.png">
            <img class="content6" src="../assets/logo/yxy/content6_2.png">
            <img class="content6" src="../assets/logo/yxy/content6_3.png">
            <img class="content6" src="../assets/logo/yxy/content6_4.png">
        </div>
        <div class="csg" v-else>
            <img class="content1" src="../assets/logo/csg/content1.png">
            <div class="content-title">
                <span class="line"></span>
                <span class="text">设计灵感</span>
                <span class="line"></span>
            </div>
            <div class="content2">
                <div class="line1">
                    <div class="left">
                        世人问我猫喜怒无常，为何爱猫？<br>我言，正因随心所欲，猫才是猫。
                    </div>
                    <img class="center" src="../assets/logo/csg/content2.png">
                    <div class="right">狗若爱你，就会永远爱你，<br>不论你做了什么事，发生什么事，<br>经历了多少时光。
                    </div>
                </div>
                <div class="line2">
                    <div class="title">你是我的宠物，但也是我的朋友</div>
                    <div class="info">
                        此LOGO根据猫和狗的形态结合宠物店名字“COOC”为灵感设计，<br>猫和狗本是宠物代表，也是铲屎官们选择最多的宠物
                    </div>
                </div>
            </div>
            <div class="content-title">
                <span class="line"></span>
                <span class="text">设计规范</span>
                <span class="line"></span>
            </div>
            <img class="content3" src="../assets/logo/csg/content3.png">
            <div class="content-title">
                <span class="line"></span>
                <span class="text">排布方式</span>
                <span class="line"></span>
            </div>
            <img class="content4" src="../assets/logo/csg/content4.png">
            <div class="content-title">
                <span class="line"></span>
                <span class="text">黑白情况</span>
                <span class="line"></span>
            </div>
            <div class="content5">
                <img class="img" src="../assets/logo/csg/content5_2.png">
                <img class="img" src="../assets/logo/csg/content5_1.png">
            </div>
            <div class="content-title">
                <span class="line"></span>
                <span class="text">应用场景</span>
                <span class="line"></span>
            </div>
            <img class="content6" src="../assets/logo/csg/content6_1.png">
            <img class="content6" src="../assets/logo/csg/content6_2.png">
            <img class="content6" src="../assets/logo/csg/content6_3.png">
        </div>
        <div class="empty"></div>
        <l-footer :color="color"></l-footer>
    </div>
</template>

<script>
    export default {
        name: 'logo-index',
        data() {
            return {
                tab: [
                    {
                        name: '铲屎官LOGO',
                        router: 'logo-csg'
                    },
                    {
                        name: '云玺印LOGO',
                        router: 'logo-yxy'
                    }
                ]
            };
        },
        computed: {
            bannerInfo() {
                let info = {
                    'logo-csg': {
                        text: '铲屎官LOGO',
                        info:
                            '宠物店LOGO设计，铲屎官COOC是一家专为宠物服务的店铺，所以LOGO以宠物中最有代表的猫和狗展开设计，结合店铺名称“COOC”形态让猫和狗的形态以名称展现。整个LOGO设计以布尔运算和黄金比例分割法来设计，切割严谨、细致，LOGO形态趣味十足。'
                    },
                    'logo-yxy': {
                        text: '云玺印LOGO',
                        info:
                            '根据公司产品需求，以为印刷行业服务的软件为前提，设计结合印刷元素，所以提出印刷四原色CMYK为LOGO颜色，为让LOGO的辨识度更高，LOGO以字体形式设计，以软件名称“云玺印”简化和结合来设计，为体现出科技软件的高效，快捷和科技感，LOGO风格简单、干练。'
                    }
                };
                return info[this.$route.name];
            },
            yxy() {
                return this.$route.name === 'logo-yxy';
            },
            logoIndex() {
                return {
                    color: this.yxy ? '#fff' : '#333333',
                    backgroundColor: this.yxy ? '#fff' : '#f0f2f5'
                };
            },
            color() {
                return this.yxy ? '#fff' : '#f0f2f5';
            }
        }
    };
</script>

<style lang='less' scoped>
    .logo-index {
        .banner {
            position: relative;
            width: 1006px;
            height: 592px;
            margin-left: 554px;
            background-color: #d9dad9;
            .banner-tab {
                padding-top: 40px;
                .tab-ul {
                    display: flex;
                    justify-content: space-around;
                    .tab-li {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        cursor: pointer;
                        &:first-child {
                            margin-right: 115px;
                        }
                        &:hover {
                            .tab-line {
                                opacity: 1;
                            }
                        }
                        .tab-name {
                            font-size: 28px;
                        }
                        .tab-line {
                            opacity: 0;
                            width: 100px;
                            height: 4px;
                            margin-top: 20px;
                            background-color: currentColor;
                            transition: all 0.5s;
                        }
                    }
                    .tab-curr-li {
                        .tab-line {
                            opacity: 1;
                        }
                    }
                }
            }
            .banner-info {
                text-align: center;
                .logo {
                    margin-top: 90px;
                    font-size: 56px;
                    font-weight: bold;
                }
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 80px auto 40px;
                    .line {
                        width: 50px;
                        background-color: currentColor;
                        border: 2px solid currentColor;
                    }
                    .text {
                        margin: 0 28px;
                        font-size: 28px;
                    }
                }
                .info {
                    width: 720px;
                    margin: 0 auto;
                    font-size: 20px;
                    color: #666666;
                    line-height: 1.5;
                }
                .yxy-info {
                    color: #e6e6e6;
                }
            }
        }
        .yxy-banner {
            background-color: #00a1ec;
        }
        .content-title {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 90px;
            color: #666666;
            .line {
                width: 50px;
                border: 1px solid currentColor;
            }
            .text {
                margin: 0 28px;
                font-size: 36px;
            }
        }
        .yxy {
            .content1 {
                display: block;
                width: 575px;
                margin: 190px auto;
            }
            .content2 {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 250px;
                .left {
                    width: 512px;
                    margin-right: 140px;
                }
                .right {
                    .title {
                        font-size: 26px;
                        color: #333;
                        font-weight: bold;
                    }
                    .empty {
                        height: 40px;
                    }
                    .text {
                        margin-top: 10px;
                        font-size: 22px;
                        color: #666;
                    }
                }
            }
            .content3 {
                display: block;
                width: 893px;
                margin: 0 auto 180px;
            }
            .content4 {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 250px;
                .left {
                    width: 530px;
                    margin-right: 50px;
                }
                .right {
                    .title {
                        font-size: 28px;
                        color: #333;
                        font-weight: bold;
                    }
                    .text {
                        margin-top: 15px;
                        font-size: 20px;
                        color: #666;
                        line-height: 1.5;
                    }
                }
            }
            .content5 {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 280px;
                .img2 {
                    width: 482px;
                    margin-right: 130px;
                }
                .img1 {
                    width: 482px;
                }
            }
            .content6 {
                display: block;
                width: 100%;
                margin-bottom: 40px;
            }
        }
        .csg {
            .content1 {
                display: block;
                width: 674px;
                margin: 200px auto 120px;
            }
            .content2 {
                margin-bottom: 150px;
                .line1 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                    .center {
                        width: 480px;
                        margin: 0 36px;
                    }
                }
                .line2 {
                    text-align: center;
                    margin-top: 86px;
                    .title {
                        margin-bottom: 46px;
                        font-size: 28px;
                        font-weight: bold;
                    }
                    .info {
                        font-size: 22px;
                        line-height: 2;
                    }
                }
            }
            .content3 {
                display: block;
                width: 819px;
                margin: 0 auto 245px;
            }
            .content4 {
                display: block;
                width: 1100px;
                margin: 0 auto 245px;
            }
            .content5 {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 250px;
                .img {
                    width: 434px;
                    &:last-child {
                        margin-left: 200px;
                    }
                }
            }
            .content6 {
                display: block;
                width: 100%;
                margin-bottom: 40px;
            }
        }
        .empty {
            height: 245px;
        }
    }
</style>
