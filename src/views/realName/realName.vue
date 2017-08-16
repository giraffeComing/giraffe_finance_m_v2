<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="rn-bg"></div>
        <div class="rn-title">实名认证</div>
        <v-list></v-list>
        <a href="javascript:;" class="rn-btn">立即认证</a>
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
                    name: "实名认证",
                    backBtn: true
                },
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        -webkit-overflow-scrolling: touch;
        padding-top: .9rem;
        background: #fff;
        .rn-bg{
            width: 1.63rem;
            height: 1.63rem;
            background: url("./realnamebg.png") no-repeat;
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
            margin: .6rem .2rem 0;
            border-radius: 2px;
        }
    }
</style>
