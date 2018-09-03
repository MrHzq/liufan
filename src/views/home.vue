/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-03 22:35:26
 * @文件说明: 首页页面
 */
<template>
    <div class="home">
        <home-header></home-header>
        我是首页
        <home-footer></home-footer>
    </div>
</template>

<script>
    import homeFooter from '../components/home-footer';
    import homeHeader from '../components/home-header';
    export default {
        name: 'home',
        components: {homeFooter, homeHeader},
        data() {
            return {};
        },
        methods: {}
    };
</script>

<style lang='less' scoped>
    .home {
        width: 1200px;
        margin: 0 auto;
    }
</style>
