/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-13 00:08:16
 * @文件说明: 首页-头部组件
 */
<template>
    <div class='home-header'>
        <div class="left" @click="$router.push('/home')">
            <p class="wel">welcome to</p>
            <img class="title-name" src="../assets/home/title-name.png">
            <div class="ui">
                <span class="duty">ui - designer</span>
                <span class="line"></span>
            </div>
        </div>

        <img class="close" v-if="about" src="../assets/commom/close.png" @click="$router.push('/home')">
        <div v-else class="right">
            <l-button router="/home">关于我</l-button>
            <!-- <l-button router="/about-me">关于我</l-button> -->
        </div>

    </div>
</template>

<script>
    export default {
        name: 'home-header',
        props: {
            about: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang='less' scoped>
    .home-header {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-top: 153px;
        .left {
            .wel {
                font-size: 28px;
                color: #666;
                text-transform: uppercase;
            }
            .title-name {
                display: block;
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
        .close {
            position: absolute;
            top: 100px;
            right: 0;
            width: 88px;
            height: 88px;
            cursor: pointer;
            transition: all 0.15s linear;
            &:hover {
                transform: scale(1.1, 1.1);
            }
        }
        .right {
            margin-top: 119px;
        }
    }
</style>
