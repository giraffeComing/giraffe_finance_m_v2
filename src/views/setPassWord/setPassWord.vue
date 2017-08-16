<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="rn-bg"></div>
        <div class="rn-title">交易密码</div>
        <v-list></v-list>
        <div class="notice">交易密码主要用于投资理财，如购买基金、定期产品等</div>
        <a href="javascript:;" class="rn-btn">确&nbsp;&nbsp;认</a>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VList from './formList.vue'
    export default {
        name: '',
        components: {
            VHeader,
            VList
        },
        data () {
            return {
                headerData:{
                    name: "设置交易密码",
                    backBtn: true
                },
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        padding-top: .9rem;
        background: #fff;
        -webkit-overflow-scrolling: touch;
        .rn-bg{
            width: 1.63rem;
            height: 1.63rem;
            background: url("./passwordbg.png") no-repeat;
            background-size: 100% 100%;
            margin: .7rem auto 0;
        }
        .rn-title{
            line-height: .7rem;
            font-size: .28rem;
            text-align: center;
        }
        .rn-btn{
            display: block;
            height: .8rem;
            line-height: .8rem;
            color: #fff;
            background: #ef4352;
            text-align: center;
            font-size: .28rem;
            margin: .4rem .2rem 0;
            border-radius: 2px;
        }
        .notice{
            font-size: .26rem;
            color: #808080;
            padding: 0 .24rem;
            margin-top: .4rem;
        }
    }
</style>
