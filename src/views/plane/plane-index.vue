/*
 * @Author: hzq
 * @Date: 2018-09-09 17:29:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-11 23:48:31
 * @文件说明: 平面展示页面
 */
<template>
    <div class='plane-index'>
        <l-side-nav></l-side-nav>
        <l-banner class="banner" bg="#1A97E3">
            <div class="banner-content">
                <div class="banner-title">平面</div>
                <div class="banner-name">
                    <span class="line"></span>
                    <span class="text">海报、三折页、名片等平面设计</span>
                </div>
                <div class="banner-info">
                    <div class="info">
                        云玺印产品推广
                        <b>三折页</b>，设计色调以科技蓝为主，以产品介绍、产品优势、产品价值<br>展开设计，能让客户用最快的时间了解到云玺印产品，并为之感兴趣从而达到宣传效<br>果，设计风格紧凑有规律。<br>对个人
                        <b>海报</b>的设计，人、景相结合表现手法，分割特殊，展现人物性格。
                    </div>
                </div>
            </div>
            <img class="banner-img" src="../../assets/plane/banner.png">
        </l-banner>
        <img class="img" src="../../assets/plane/img1.png">
        <img class="img" src="../../assets/plane/img2.png">
        <img class="img" src="../../assets/plane/img3.png">
        <img class="img mt" src="../../assets/plane/img4.png">
        <img class="img mb" src="../../assets/plane/img5.png">
        <l-footer></l-footer>
    </div>
</template>

<script>
    export default { name: 'plane-index' };
</script>

<style lang='less' scoped>
    .plane-index {
        .banner {
            margin-bottom: 500px;
            .banner-content {
                margin-right: 58px;
                text-align: right;
                color: #fff;
                overflow: hidden;
                .banner-title {
                    margin-top: 88px;
                    margin-bottom: 60px;
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
                        font-size: 20px;
                        line-height: 2;
                        text-align: right;
                    }
                }
            }
            .banner-img {
                position: absolute;
                left: -125px;
                top: 450px;
                width: 836px;
            }
        }
        .img {
            display: block;
            width: 100%;
            margin-bottom: 60px;
        }
        .mt {
            margin-top: -250px;
        }
        .mb {
            margin-bottom: 175px;
        }
    }
</style>
