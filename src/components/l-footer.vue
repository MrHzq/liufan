/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-09 17:24:33
 * @文件说明: 首页-尾部组件
 */
<template>
    <div class='home-footer'>
        <div class="contact-me">
            <div class="me-text">联系我</div>
            <div class="me-line"></div>
        </div>
        <div class="contact-way">
            <ul class="left">
                <li class="left-li">电话：15283819858</li>
                <li class="left-li">QQ：627317307</li>
                <li class="left-li">邮箱：liufan94@163.com</li>
            </ul>
            <div class="right">
                <l-button width="1.66666rem" v-if="$route.name==='home'">我的简历</l-button>
                <div v-else class="to-top" @click="toTop">
                    <img class="img" src="../assets/commom/to-top.png" alt="">
                    <div class="text">回到顶部</div>
                </div>
            </div>
        </div>
        <div class="footer-tips">
            <span>如果刘帆的作品站没有带给你一个好心情，请通过上面的联系方式进行投诉哦</span>
            <img class="smile" src="../assets/commom/smile.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-footer',
        methods: {
            toTop() {
                let top1 = 0;
                let top2 = 0;
                let scrollToptimer = setInterval(() => {
                    top1 =
                        document.body.scrollTop ||
                        document.documentElement.scrollTop;
                    let speed = top1 / 10;
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
            }
        }
    };
</script>

<style lang='less' scoped>
    .home-footer {
        position: relative;
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 110px;
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
        .contact-way {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 240px;
            border: 2px solid #cccccc;
            border-radius: 10px;
            .left {
                margin-right: 130px;
                .left-li {
                    margin-bottom: 20px;
                    font-size: 24px;
                    color: #333;

                    &:nth-child(2) {
                        margin-left: 70px;
                    }
                    &:last-child {
                        margin-left: 140px;
                        margin-bottom: 0;
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
                }
            }
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
    }
</style>
