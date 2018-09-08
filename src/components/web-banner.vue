/*
 * @Author: hzq
 * @Date: 2018-09-08 21:11:11
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-08 23:04:51
 * @文件说明: web-banner组件
 */
<template>
    <div class='web-banner'>
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
        <img v-if="$route.name==='web-xlf'" class="xlf-banner" src="../assets/web/xlf-banner.png" alt="">
        <img v-else class="yxy-banner" src="../assets/web/yxy-banner.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'web-banner',
        data() {
            return {};
        },
        computed: {
            text() {
                let text = {
                    'web-xlf': '熊来疯设计大赛官网',
                    'web-yxy': '云玺印官网'
                };

                return text[this.$route.name];
            },
            info() {
                let info = {
                    'web-xlf':
                        '熊来疯设计大赛报名官网，设计围绕熊来疯主题进行设计，风格不限。由于需求比较抽象化，整个官网由名称“熊来疯”展开设计。',
                    'web-yxy':
                        '为公司软件产品设计的官网，与公司官网有一定的区别，云玺印是一个专为快印行业打造的SaaS系统，其设计风格就围绕着科技和办公来设计的。'
                };

                return info[this.$route.name];
            }
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .web-banner {
        position: relative;
        width: 1006px;
        height: 592px;
        margin-left: 554px;
        background-color: #aac2de;
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
