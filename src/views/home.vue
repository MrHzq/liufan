/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-08 22:50:50
 * @文件说明: 首页页面
 */
<template>
    <div class="home">
        <div class="content">
            <home-header class="home-header"></home-header>
            <div class="five-module">
                <div class="module">
                    <div class="web m" @click="$router.push('/web-xlf')">
                        <div class="title">Web</div>
                        <div class="line"></div>
                        <img src="../assets/home/m-web.png" class="img">
                    </div>
                    <div class="mobile m" @click="$router.push('/mobile-index')">
                        <div class="title">手机端</div>
                        <div class="line"></div>
                        <img src="../assets/home/m-mobile.png" class="img">
                    </div>
                </div>
                <div class="module">
                    <div class="plane m" @click="$router.push('/plane-index')">
                        <div class="title">平面</div>
                        <div class="line"></div>
                        <img src="../assets/home/m-plane.png" class="img">
                    </div>
                    <div class="hand m" @click="$router.push('/hand-index')">
                        <div class="title">手绘</div>
                        <div class="line"></div>
                        <img src="../assets/home/m-hand.png" class="img">
                    </div>
                    <div class="logo m" @click="$router.push('/logo-index')">
                        <div class="title">LOGO</div>
                        <div class="line"></div>
                        <img src="../assets/home/m-logo.png" class="img">
                    </div>
                </div>
            </div>
            <home-footer></home-footer>
        </div>
    </div>
</template>

<script>
    import homeHeader from '../components/home-header';
    export default {
        name: 'home',
        components: {homeHeader},
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .home {
        background-image: url('../assets/home/home-bg.png');
        background-position: left bottom;
        background-size: cover;
        .home-header {
            margin-top: 153px;
        }
        .content {
            width: 1200px;
            margin: 0 auto;
            .five-module {
                margin: 160px 0;
                .module {
                    display: flex;
                    justify-content: space-between;
                    &:last-child {
                        margin-top: 64px;
                    }
                    .m {
                        .title {
                            position: absolute;
                            font-size: 56px;
                            color: #ffffff;
                            font-weight: bold;
                        }
                        .line {
                            position: absolute;
                            width: 40px;
                            height: 4px;
                            background-color: #fff;
                        }
                        &:hover {
                            cursor: pointer;
                            .img {
                                opacity: 1;
                                transition: all 0.5s linear;
                            }
                        }
                    }
                    .web {
                        position: relative;
                        width: 664px;
                        height: 340px;
                        background: linear-gradient(-52deg, #8adedd, #6cf3da);
                        border-radius: 10px;
                        box-shadow: 4px 0px 20px rgba(10, 198, 164, 0.2);
                        .title {
                            top: 120px;
                            left: 90px;
                        }
                        .line {
                            top: 103px;
                            left: 249px;
                        }

                        .img {
                            opacity: 0;
                            position: absolute;
                            left: 252px;
                            top: -29px;
                            width: 353px;
                            height: 374px;
                        }
                    }
                    .mobile {
                        position: relative;
                        width: 480px;
                        height: 296px;
                        background: linear-gradient(-52deg, #87d6ca, #90eccd);
                        border-radius: 10px;
                        box-shadow: 4px 0px 20px rgba(10, 198, 164, 0.2);
                        .title {
                            top: 54px;
                            left: 107px;
                            font-size: 52px;
                        }
                        .line {
                            top: 118px;
                            left: 45px;
                        }

                        .img {
                            opacity: 0;
                            position: absolute;
                            left: 148px;
                            top: 86px;
                            width: 372px;
                            height: 234px;
                        }
                    }
                    .plane {
                        position: relative;
                        width: 430px;
                        height: 332px;
                        background: linear-gradient(-52deg, #e9b3cb, #f6d5dd);
                        border-radius: 10px;
                        box-shadow: 4px 0px 20px rgba(10, 198, 164, 0.2);
                        .title {
                            top: 166px;
                            left: 122px;
                            width: 55px;
                            font-size: 52px;
                        }
                        .line {
                            top: 124px;
                            left: 76px;
                        }
                        .img {
                            opacity: 0;
                            position: absolute;
                            left: 198px;
                            top: 62px;
                            width: 280px;
                            height: 294px;
                        }
                    }
                    .hand {
                        position: relative;
                        width: 434px;
                        height: 280px;
                        background: linear-gradient(-52deg, #a4dfb9, #cdf1da);
                        border-radius: 10px;
                        box-shadow: 4px 0px 20px rgba(10, 198, 164, 0.2);
                        .title {
                            top: 75px;
                            left: 64px;
                            font-size: 52px;
                        }
                        .line {
                            top: 132px;
                            left: 186px;
                        }
                        .img {
                            opacity: 0;
                            position: absolute;
                            left: 182px;
                            top: 67px;
                            width: 294px;
                            height: 234px;
                        }
                    }
                    .logo {
                        position: relative;
                        width: 212px;
                        height: 356px;
                        background: linear-gradient(-52deg, #ecb1bd, #f5d3d8);
                        border-radius: 10px;
                        box-shadow: 4px 0px 20px rgba(10, 198, 164, 0.2);
                        .title {
                            top: 28px;
                            left: 56px;
                            width: 50px;
                            font-size: 52px;
                            word-break: break-all;
                        }
                        .line {
                            bottom: 35px;
                            right: 69px;
                        }
                        .img {
                            opacity: 0;
                            position: absolute;
                            left: 103px;
                            top: -38px;
                            width: 148px;
                            height: 336px;
                        }
                    }
                }
            }
        }
    }
</style>
