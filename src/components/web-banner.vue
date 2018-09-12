/*
 * @Author: hzq
 * @Date: 2018-09-08 21:11:11
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-11 22:25:59
 * @文件说明: web-banner组件
 */
<template>
    <div class='web-banner' :style="{'background-color':bg}">
        <slot></slot>
        <div class="banner-content">
            <div class="banner-title">Web</div>
            <div class="banner-name">
                <span class="line"></span>
                <span class="text">{{text}}</span>
            </div>
            <div class="banner-info">
                <div class="info">{{info}}</div>
            </div>
        </div>
        <img v-if="$route.name==='web-xlf'" class="xlf-banner" src="../assets/web/xlf-banner.png">
        <img v-else class="yxy-banner" src="../assets/web/yxy-banner.png">
    </div>
</template>

<script>
    export default {
        name: 'web-banner',
        data() {
            return {};
        },
        props: {
            text: {
                type: String,
                default: ''
            },
            info: {
                type: String,
                default: ''
            },
            bg: {
                type: String,
                default: '#aac2de'
            }
        }
    };
</script>

<style lang='less' scoped>
    .web-banner {
        position: relative;
        width: 1006px;
        height: 592px;
        margin-left: 554px;
        .banner-content {
            margin-right: 58px;
            text-align: right;
            color: #fff;
            overflow: hidden;
            .banner-title {
                margin-top: 120px;
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
                    width: 460px;
                    font-size: 20px;
                    line-height: 2;
                    text-align: right;
                }
            }
        }
        .xlf-banner {
            position: absolute;
            left: -83px;
            top: 341px;
            width: 756px;
        }
        .yxy-banner {
            position: absolute;
            left: -73px;
            top: 380px;
            width: 760px;
        }
    }
</style>
