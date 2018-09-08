/*
 * @Author: hzq
 * @Date: 2018-09-08 12:18:18
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-08 23:00:08
 * @文件说明: web-熊来疯展示页面
 */
<template>
    <div class='web-index'>
        <l-side-nav></l-side-nav>
        <web-banner>
            <web-tab></web-tab>
        </web-banner>
        <div class="web-introduce" :class="$route.name">
            <img v-if="xlf" class="introduce-img" src="../../assets/web/xlf-introduce.png" alt="">
            <img v-else class="introduce-img" src="../../assets/web/yxy-introduce.png" alt="">
            <div class="introduce-info">
                <div class="introduce-title">{{introduce.title}}</div>
                <div class="introduce-text" v-html="introduce.info"></div>
            </div>

        </div>
        <img v-if="xlf" class="web-full-img" src="../../assets/web/xlf-full.png" alt="">
        <img v-else class="web-full-img" src="../../assets/web/yxy-full.png" alt="">
        <div class="web-gradient"></div>
        <img v-if="xlf" class="xlf-bottom" src="../../assets/web/xlf-bottom.png" alt="">
        <img v-else class="yxy-bottom" src="../../assets/web/yxy-bottom.png" alt="">
        <home-footer class="home-footer"></home-footer>
    </div>
</template>

<script>
    import webTab from '../../components/web-tab';
    import webBanner from '../../components/web-banner';
    export default {
        name: 'web-index',
        components: {webTab, webBanner},
        data() {
            return {};
        },
        computed: {
            introduce() {
                let yxy = {
                    title: '云玺印',
                    info:
                        '主体颜色以科技蓝为主，所有布局简要明了，<br>清晰的介绍了云玺印所服务的内容。<br>由于是科技公司，所以设计风格比较严谨，细节处也不失自由发挥的感觉'
                };
                let xlf = {
                    title: '熊来疯',
                    info:
                        '因为是关于设计大赛的官网，所以设计风格比较大胆和自由，<br>给参赛选手大胆发挥和想象的空间。'
                };
                return this.$route.name === 'web-xlf' ? xlf : yxy;
            },
            xlf() {
                return this.$route.name === 'web-xlf';
            }
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .web-index {
        .web-introduce {
            position: relative;
            color: #fff;
            margin-top: 260px;
            padding-top: 1px;
            text-align: center;
            .introduce-img {
                display: block;
                width: 100%;
            }
            .introduce-info {
                position: absolute;
                top: 200px;
                left: 0;
                width: 100%;
                .introduce-title {
                    margin-top: 103px;
                    font-size: 52px;
                }
                .introduce-text {
                    margin-top: 44px;
                    font-size: 32px;
                    line-height: 2;
                }
            }
        }

        .web-full-img {
            position: relative;
            z-index: 0;
            display: block;
            width: 1268px;
            margin: -413px auto 0;
        }
        .web-gradient {
            position: relative;
            z-index: -1;
            height: 923px;
            margin-top: -393px;
            background: linear-gradient(-50deg, #0c79cf, #3d8bdb, #6a9ae8);
            opacity: 0.6;
        }
        .xlf-bottom {
            position: relative;
            z-index: 0;
            display: block;
            width: 1193px;
            margin: -414px auto 236px;
        }
        .yxy-bottom {
            position: relative;
            z-index: 0;
            display: block;
            width: 1519px;
            margin: -400px 0 236px;
        }
    }
</style>
