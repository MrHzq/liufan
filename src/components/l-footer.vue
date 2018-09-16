/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-16 15:51:55
 * @文件说明: 首页-尾部组件
 */
<template>
    <div class='home-footer' :style="{'padding-bottom':$route.name==='hand-index'?'0':'0.57rem'}">
        <div class="contact-me" :class="{'hand-me':hand}" :style="{background:color}">
            <div class="me-text">联系我</div>
            <div class="me-line"></div>
        </div>
        <div class="contact-way" :class="{'hand-way':hand}">
            <ul class="left">
                <li class="left-li">电话：15283819858</li>
                <li class="left-li">
                    <span>微信：627317307</span>
                    <img class="weixin" src="../assets/commom/weixin.jpg" alt="">
                </li>
                <li @click="copy" class="left-li email" data-clipboard-text='liufan94@163.com' title="点击复制邮箱">邮箱：liufan94@163.com</li>
            </ul>
            <div class="right">
                <l-button width="1.66666rem" v-if="$route.name==='home'||$route.name==='about-me'" @click.native="goto">我的简历</l-button>
                <div v-else class="to-top" @click="toTop(10)">
                    <img v-if="hand" class="img" src="../assets/commom/to-top2.png">
                    <img v-else class="img" src="../assets/commom/to-top.png">
                    <div class="text" :class="{'hand-text':hand}">回到顶部</div>
                </div>
            </div>
        </div>
        <div class="footer-tips" :class="{'hand-tips':hand}">
            <span>如果刘帆的作品站没有带给你一个好心情，请通过上面的联系方式进行投诉哦</span>
            <img v-if="hand" class="smile" src="../assets/commom/smile2.png">
            <img v-else class="smile" src="../assets/commom/smile.png">
        </div>
        <div class="copy-tips" v-if="showCopy">{{showCopy}}</div>
    </div>
</template>

<script>
    import Clipboard from 'clipboard';
    export default {
        name: 'home-footer',
        props: {
            color: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                showCopy: ''
            };
        },
        computed: {
            hand() {
                return this.$route.name === 'hand-index';
            }
        },
        deactivated() {
            this.toTop(1);
        },
        methods: {
            toTop(rate = 10) {
                let top1 = 0;
                let top2 = 0;
                let scrollToptimer = setInterval(() => {
                    top1 =
                        document.body.scrollTop ||
                        document.documentElement.scrollTop;
                    let speed = top1 / rate;
                    if (document.body.scrollTop != 0) {
                        document.body.scrollTop -= speed;
                    } else {
                        document.documentElement.scrollTop -= speed;
                    }

                    if (top1 == 0) {
                        clearInterval(scrollToptimer);
                    }
                    top2 =
                        document.body.scrollTop ||
                        document.documentElement.scrollTop;
                }, 50);
            },
            goto() {
                let href = location.href;
                href = href.replace('about-me', 'resume');
                window.open(href);
            },
            copy() {
                var clipboard = new Clipboard('.email');
                clipboard.on('success', e => {
                    this.showCopy = '复制成功';
                    // 释放内存
                    clipboard.destroy();
                    setTimeout(() => {
                        this.showCopy = '';
                    }, 1000);
                });
                clipboard.on('error', e => {
                    // 不支持复制
                    this.showCopy = '该浏览器不支持自动复制';
                    // 释放内存
                    clipboard.destroy();
                    setTimeout(() => {
                        this.showCopy = '';
                    }, 1000);
                });
            }
        }
    };
</script>

<style lang='less' scoped>
    .home-footer {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        .contact-me {
            position: absolute;
            top: -23px;
            left: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            padding: 0 30px;
            background-color: #fff;
            .me-text {
                margin-right: 20px;
                color: #22ddbb;
                font-size: 36px;
            }
            .me-line {
                width: 100px;
                height: 4px;
                background-color: #22ddbb;
            }
        }
        .hand-me {
            background-color: #01242a;
            .me-text {
                color: #fff;
            }
            .me-line {
                background-color: #fff;
            }
        }
        .contact-way {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 240px;
            border: 2px solid #cccccc;
            border-radius: 10px;
            color: #333;
            .left {
                margin-right: 130px;
                .left-li {
                    position: relative;
                    margin-bottom: 20px;
                    font-size: 24px;
                    &:nth-child(2) {
                        margin-left: 70px;
                        &:hover {
                            cursor: pointer;
                            .weixin {
                                display: block;
                            }
                        }
                        .weixin {
                            display: none;
                            position: absolute;
                            top: -210px;
                            left: 0;
                            width: 200px;
                            height: 200px;
                            box-shadow: 0 0 10px #ccc;
                        }
                    }
                    &:last-child {
                        margin-left: 140px;
                        margin-bottom: 0;
                        cursor: pointer;
                    }
                }
            }
            .right {
                .to-top {
                    position: relative;
                    cursor: pointer;
                    .img {
                        display: flex;
                        width: 252px;
                    }
                    .text {
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        line-height: 1.5;
                        text-align: center;
                        font-size: 36px;
                        color: #22ddbb;
                        letter-spacing: 3px;
                    }
                    .hand-text {
                        color: #fff;
                    }
                }
            }
        }
        .hand-way {
            color: #fff;
            border: 2px solid #fff;
        }
        .footer-tips {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 24px;
            font-size: 20px;
            color: #333;
            .smile {
                width: 51px;
                margin-left: 10px;
            }
        }
        .hand-tips {
            color: #ccc;
        }
        .copy-tips {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100px;
            height: 30px;
            margin: auto;
            font-size: 24px;
            pointer-events: all;
            padding: 16px 48px;
            border-radius: 4px;
            color: #22ddbb;
            box-shadow: 0 0 1px 3px #22ddbb;
            background: #fff;
        }
    }
</style>
