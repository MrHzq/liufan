/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-16 15:38:11
 * @文件说明: 首页页面
 */
<template>
    <div class="home">
        <div class="content">
            <home-header about></home-header>
        </div>
        <div class="about-me">

            <p>我是一枚94年的妹纸，相当热爱设计这个行业。良好的审美能力，熟练掌握各大设计软件，并运用软件实现自己所想设计作品。过去的2两年时间里，从一名专业的UI设计师转化成一名全能的设计师。</p>
            <p>在上一份工作中坚固
                <b>UI设计</b>和
                <b>平面设计</b>，并与前端沟通全面的布局与框架呈现，会
                <b>前端框架</b>技能，有
                <b>手绘功底、原型图绘制</b>技能、了解互联网发展、关注设计最新动态等...
            </p>
            <p>
                参与过
                <b>“大数据分析中心”</b>、
                <b>“地图围栏的设计”</b>、
                <b>“应急指挥中心”</b>等完整项目，独立完成过
                <b>官网设计</b>；
                <b>APP设计</b>；
                <b>LOGO设计</b>；后台系统的
                <b>元素规范并统一</b>，考虑其中的
                <b>交互效果</b>和
                <b>用户体验</b>；公司
                <b>宣传平面设计</b>等...
            </p>
            <p>喜欢小黄人、小猪佩奇等动画人物，也有绘画、舞蹈、摄影、手工方面的爱好，本妹子性格活泼，爱好广泛，学习能力强、积极、主动。您可以通过下方电子邮箱、微信或电话联系我，期待与您的共事！
            </p>
            <p>谢谢！</p>
        </div>
        <l-footer></l-footer>
    </div>
</template>

<script>
    import homeHeader from '../components/home-header';
    export default {
        name: 'home',
        components: { homeHeader }
    };
</script>

<style lang='less' scoped>
    .home {
        background-image: url('../assets/home/home-bg.png');
        background-position: left bottom;
        background-size: cover;
        overflow: hidden;
        .content {
            width: 1200px;
            margin: 0 auto;
        }
        .about-me {
            width: 1200px;
            margin: 180px auto;
            color: #333;
            font-size: 32px;
            line-height: 3;
        }
    }
</style>
