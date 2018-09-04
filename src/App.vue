<template>
    <div id="app">
        <router-view class="royter-view" />
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
        .router-view {
            padding-bottom: 75px;
        }
    }
</style>
