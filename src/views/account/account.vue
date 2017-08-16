<template>
    <div class="page-view">
        <v-header :opts="headOpt"></v-header>
        <div class="container">
            <div class="detail">
                <img src="./img/pic.png" alt="">
                <div class="info">
                    <span class="name">会飞的兔子</span>
                    <span class="phone">15801549869</span>
                </div>
            </div>
            <ul class="business">
                <li>
                    <i class="icons icon-account"></i>
                    <span class="name">总资产</span>
                    <span class="more">账户总览 <i class="icons icon-right"></i></span>
                </li>
                <li>
                    <i class="icons icon-real"></i>
                    <router-link :to="{ path: '/realname' }">
                        <span class="name">实名认证</span>
                        <!--<span class="more">未实名 <i class="icons icon-right"></i></span>-->
                        <span class="more red">已实名</span>
                    </router-link>
                </li>
                <li class="realInfo">
                    <p>
                        <span class="name">真实姓名</span>
                        <span class="more">**某</span>
                    </p>
                    <p>
                        <span class="name">身份证号码</span>
                        <span class="more">130825********2752</span>
                    </p>
                </li>
                <li>
                    <i class="icons icon-phone"></i>
                    <span class="name">绑定手机</span>
                    <span class="more">188****7788<i class="icons icon-right"></i></span>
                    <!--<span class="more">未绑定<i class="icons icon-right"></i></span>-->
                </li>
                <li>
                    <i class="icons icon-bank"></i>
                    <span class="name">银行卡管理</span>
                    <span class="more"><i class="icons icon-right"></i></span>
                </li>
            </ul>

            <div class="logout">安全退出</div>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    export default {
        name: '',
        components: {
            VHeader,
            VFooter
        },
        data () {
            return {
                headOpt: {
                    name: "个人中心",
                    backBtn: true
                }
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    $bg_color: #f5f5f5;
    $color_white: #fff;
    $color_gray: #808080;
    $color_black: #333;
    $color_red: #ff484a;
    $border_color: #eee;

    @mixin clearfix {
        &:before, &:after {
            content: " ";
            display: table;
        }
        &:after {
            clear: both;
        }
    }

    .page-view {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: $bg_color;

        .container {
            height: 100%;
            margin-top: .9rem;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }

        .icons {
            display: inline-block;
            vertical-align: top;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
        }

        .detail {
            height: 1.62rem;
            background-color: $color_white;
            position: relative;
            padding: .4rem .2rem 0;
            margin-top: .01rem;
            font-size: .28rem;
            @include clearfix;

            img {
                float: left;
                width: .82rem;
                height: .82rem;
            }
            .info {
                float: left;
                padding-left: .4rem;
                line-height: 1.2;
                .name {
                    display: block;
                    font-size: .34rem;
                    color: $color_black;
                }
                .phone {
                    display: block;
                    font-size: .24rem;
                    color: $color_gray;
                    margin-top: .1rem;
                }
            }
        }

        .business {
            margin-top: .14rem;
            background-color: $color_white;

            li {
                position: relative;
                min-height: .9rem;
                padding-left: .74rem;
                margin-left: .2rem;
                border-top: 1px solid $border_color;
                @include clearfix;

                &:first-child {
                    border-top: 0;
                }
                a {
                    display: block;
                    @include clearfix;
                }
                .icons {
                    position: absolute;
                    left: .1rem;
                    top: .24rem;
                    width: .4rem;
                    height: .4rem;

                    &.icon-account {
                        background-image: url('./img/icon-account.png');
                    }
                    &.icon-real {
                        background-image: url('./img/icon-real.png');
                    }
                    &.icon-phone {
                        background-image: url('./img/icon-phone.png');
                    }
                    &.icon-bank {
                        background-image: url('./img/icon-bank.png');
                    }
                }
                .name {
                    color: $color_gray;
                    font-size: .28rem;
                    line-height: .88rem;
                    display: inline-block;
                    min-width: 1.16rem;
                }
                .more {
                    position: absolute;
                    right: .2rem;
                    top: .24rem;
                    line-height: .4rem;
                    font-size: .28rem;
                    padding-right: .38rem;

                    &.red {
                        color: $color_red;
                    }

                    .icon-right {
                        position: absolute;
                        left: auto !important;
                        right: 0;
                        top: .06rem;
                        width: .14rem;
                        height: .28rem;
                        background-image: url('./img/right-grey.png');
                    }
                }

                &.realInfo {
                    background-color: $bg_color;
                    padding-left: 0;
                    margin-left: 0;
                    border-top: 0;
                    p {
                        position: relative;
                        color: $color_gray;
                        padding-left: .94rem;
                    }
                    & + li {
                        border-top: 0;
                    }
                }
            }
        }

        .logout {
            line-height: .9rem;
            height: .9rem;
            text-align: center;
            margin-top: .46rem;
            font-size: .28rem;
            color: $color_red;
            background-color: $color_white;
        }
    }
</style>
