/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-03 22:46:14
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
        <div class="right"></div>
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
        .left {
            .wel {
                font-size: 28px;
                color: #666;
                text-transform: uppercase;
            }
            .title-name {
                width: 330px;
            }
            .ui {
                font-size: 36px;
                color: #333;
                text-transform: uppercase;
            }
        }
    }
</style>
