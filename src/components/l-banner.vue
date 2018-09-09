/*
 * @Author: hzq
 * @Date: 2018-09-09 17:30:49
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-09 17:35:23
 * @文件说明: banner组件
 */
<template>
    <div class='l-banner' :style="{'background-color':bg}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'l-banner',
        props: {
            bg: {
                type: String,
                default: ''
            }
        }
    };
</script>

<style lang='less' scoped>
    .l-banner {
        position: relative;
        width: 1006px;
        height: 592px;
        margin-left: 554px;
    }
</style>
