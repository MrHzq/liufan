<template>
    <div class='l-button' :style="{width:width}" @click="gopage">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'l-button',
        props: {
            width: {
                type: String,
                default: ''
            },
            router: {
                type: String,
                default: ''
            }
        },
        data() {
            return {};
        },
        methods: {
            gopage() {
                if (this.router) this.$router.push(this.router);
            }
        }
    };
</script>

<style lang='less' scoped>
    .l-button {
        position: relative;
        width: 280px;
        height: 88px;
        line-height: 80px;
        text-align: center;
        font-size: 36px;
        color: #22ddbb;
        border-radius: 88px;
        box-sizing: border-box;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background-image: linear-gradient(135deg, #fff, #fff),
            linear-gradient(-40deg, #13d79d, #22ddbb, #ffaabb);
        border: 4px transparent solid;
        cursor: pointer;
        transition: all 0.15s linear;
        &:hover {
            transform: scale(1.1, 1.1);
        }
    }
</style>
