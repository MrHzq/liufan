/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-04 21:41:23
 * @文件说明: 首页-头部组件
 */
<template>
    <div class='home-header'>
        <div class="left">
            <p class="wel">welcome to</p>
            <img class="title-name" src="../assets/home/title-name.png" alt="">
            <div class="ui">
                <span class="duty">ui - designer</span>
                <span class="line"></span>
            </div>
        </div>
        <div class="right">
            <l-button router="/about-me">关于我</l-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home-header',
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .home-header {
        display: flex;
        justify-content: space-between;
        .left {
            .wel {
                font-size: 28px;
                color: #666;
                text-transform: uppercase;
            }
            .title-name {
                width: 330px;
                margin-bottom: 50px;
                margin-top: 30px;
            }
            .ui {
                display: flex;
                align-items: center;
                font-size: 36px;
                color: #333;
                text-transform: uppercase;
                .line {
                    width: 100px;
                    height: 4px;
                    margin-left: 23px;
                    background-color: #22ddbb;
                }
            }
        }
        .right {
            margin-top: 119px;
        }
    }
</style>
