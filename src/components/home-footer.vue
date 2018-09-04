/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-04 22:17:34
 * @文件说明: 首页-尾部组件
 */
<template>
    <div class='home-footer'>
        <div class="contact-way">
            <ul class="left">
                <li class="left-li">电话：15283819858</li>
                <li class="left-li">QQ：627317307</li>
                <li class="left-li">邮箱：liufan94@163.com</li>
            </ul>
            <div class="right">
                <l-button width="320px">我的简历</l-button>
            </div>
        </div>
        <div class="contact-p">
            <span>如果刘帆的作品站没有带给你一个好心情，请通过上面的联系方式进行投诉哦</span>
            <img class="smile" src="../assets/commom/smile.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-footer',
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .home-footer {
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
        }
        .contact-p {
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
