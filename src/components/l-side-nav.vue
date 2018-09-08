/*
 * @Author: hzq
 * @Date: 2018-09-08 16:46:59
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-08 21:23:03
 * @文件说明: 侧导航组件
 */
<template>
    <div class='l-side-nav'>
        <img class="nav-name" src="../assets/commom/LF.png" @click="$router.push('home')">
        <ul class="nav-ul">
            <router-link v-for="(i,index) in nav" :key="i.router" :to="i.router" tag="li" class="nav-li" :class="i.router">
                <div class="item" :style="{top:index*52/192+'rem'}"></div>
                <div class="name">{{i.name}}</div>
            </router-link>
        </ul>
        <div class="nav-line"></div>
    </div>
</template>

<script>
    export default {
        name: 'l-side-nav',
        data() {
            return {};
        },
        computed: {
            nav() {
                let nav = [
                    {
                        name: 'Web',
                        router: 'web-xlf'
                    },
                    {
                        name: '手机端',
                        router: 'mobile-xlf'
                    },
                    {
                        name: '平面',
                        router: 'plane-xlf'
                    },
                    {
                        name: '手绘',
                        router: 'hand-xlf'
                    },
                    {
                        name: 'LOGO',
                        router: 'logo-xlf'
                    }
                ];
                let index = nav.findIndex(({router}) => {
                    return this.$route.name.indexOf(router.split('-')[0]) !== -1;
                });
                nav.splice(index, 1);
                return nav;
            }
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .l-side-nav {
        position: absolute;
        top: 158px;
        left: 364px;
        .nav-name {
            display: block;
            width: 58px;
            margin-bottom: 44px;
            cursor: pointer;
        }
        .nav-ul {
            position: relative;
            .nav-li {
                &:hover {
                    .item {
                        padding-right: 8px;
                        padding-bottom: 8px;
                        box-shadow: 4px 0px 10px rgba(34, 221, 187, 0.4);
                    }
                    .name {
                        display: block;
                        opacity: 1;
                    }
                }
                .item {
                    position: absolute;
                    left: 0;
                    width: 32px;
                    height: 32px;
                    border-radius: 4px;
                    transition: all 0.5s;
                    cursor: pointer;
                }

                .name {
                    position: absolute;
                    left: 62px;
                    top: 0;
                    display: none;
                    width: 24px;
                    opacity: 0;
                    font-size: 24px;
                    word-break: break-all;
                    color: #333;
                    transition: all 0.5s;
                }
            }
            .web-xlf {
                .item {
                    background: linear-gradient(-52deg, #8adedd, #6cf3da);
                }
            }
            .mobile-xlf {
                .item {
                    background: linear-gradient(-52deg, #87d6ca, #90eccd);
                }
            }
            .plane-xlf {
                .item {
                    background: linear-gradient(-52deg, #e9b3cb, #f6d5dd);
                }
            }
            .hand-xlf {
                .item {
                    background: linear-gradient(-52deg, #a4dfb9, #cdf1da);
                }
            }
            .logo-xlf {
                .item {
                    background: linear-gradient(-52deg, #ecb1bd, #f5d3d8);
                }
            }
        }
        .nav-line {
            position: absolute;
            top: 318px;
            left: 62px;
            width: 60px;
            height: 4px;
            background: #22ddbb;
        }
    }
</style>
