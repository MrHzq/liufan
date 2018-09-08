/*
 * @Author: hzq
 * @Date: 2018-09-08 16:18:31
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-08 21:22:31
 * @文件说明: web-tab组件
 */
<template>
    <div class='web-tab'>
        <ul class="tab-ul">
            <router-link v-for="i in webTab" :key="i.router" :to="i.router" class="tab-li" active-class="tab-curr-li" tag="li">
                <div class="tab-name">{{i.name}}</div>
                <div class="tab-line"></div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'web-tab',
        data() {
            return {
                webTab: [
                    {
                        name: '熊来疯设计大赛官网',
                        router: 'web-xlf'
                    },
                    {
                        name: '云玺印官网',
                        router: 'web-yxy'
                    }
                ]
            };
        }
    };
</script>

<style lang='less' scoped>
    .web-tab {
        position: absolute;
        left: 60px;
        top: 60px;
        z-index: 2;
        .tab-ul {
            display: flex;
            justify-content: center;
            .tab-li {
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                &:first-child {
                    margin-right: 115px;
                }
                &:hover {
                    .tab-line {
                        opacity: 1;
                    }
                }
                .tab-name {
                    color: #fff;
                    font-size: 28px;
                }
                .tab-line {
                    opacity: 0;
                    width: 100px;
                    height: 4px;
                    margin-top: 20px;
                    background-color: #fff;
                    transition: all 0.5s;
                }
            }
            .tab-curr-li {
                .tab-line {
                    opacity: 1;
                }
            }
        }
    }
</style>
