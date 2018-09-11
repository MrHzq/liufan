<template>
    <div id="app" :style="{'padding-bottom':$route.name==='hand-index'?'0':'0.57rem'}">
        <!-- <keep-alive> -->
        <router-view />
        <!-- </keep-alive> -->
        <!-- <l-footer></l-footer> -->
    </div>
</template>

<script>
    export default {
        name: 'App'
    };
</script>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // .router-view {
        //     padding-bottom: 75px;
        // }
    }
</style>
