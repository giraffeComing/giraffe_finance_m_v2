<template>
    <!--better-scroller的ref要直接跟着一个div结构-->
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData" ref="sfHeader"></v-header>
        <div ref="comBodySf" class="scroller">
            <div>
                <v-total></v-total>
                <div class="bg-gray"></div>
                <v-tab></v-tab>
            </div>
        </div>
        <!--footer-->
        <div class="footer" ref="sfFooter">
            <a href="javascripr:;" class="btn">取出</a>
            <a href="javascripr:;" class="btn">存入</a>
        </div>
    </div>
</template>

<script>
    import VTotal from './total'
    import VTab from './tab'
    import VHeader from '../../components/layout/header/header.vue'
    //    better scroller
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {
            VHeader,
            VTotal,
            VTab,
        },
        data () {
            return {
                comBodyScrollSf:'',
                headerData:{
                    name: "定期理财",
                    backBtn: true
                },
            }
        },
        mounted:function () {
            //$nextTick这个方法保证了dom结构加载完成之后再执行
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(()=>{
                    this.indexScrollSf();
                },500)
            })
        },
        methods:{
            indexScrollSf() {
                let pageH=this.$el.offsetHeight;
                let headerH=this.$refs.sfHeader.$el.offsetHeight;
                let footerH=this.$refs.sfFooter.offsetHeight;
                this.$refs.comBodySf.style.height = pageH - (headerH+footerH) +'px';
                this.comBodyScrollSf = new BScroll(this.$refs.comBodySf,{
                    click: true,
                    deceleration: 0.001,
                });
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        overflow: hidden;
        background: #fff;
        .scroller{
            margin-top: .9rem;
            height: 100%;
            overflow: hidden;
        }
        .footer{
            width: 100%;
            height: 1rem;
            position: fixed;
            bottom: 0;
            overflow: hidden;
            line-height: 1.65rem;
            border-top: 1px solid #e0e0e0;
            z-index: 999;
            display: flex;
            a{
                display: block;
                flex: 1;
                line-height: 1rem;
                text-align: center;
                text-decoration: none;
                &:first-child{
                    background: #fff;
                    color: #ef4352;
                }
                &:last-child{
                    background: #ef4352;
                    color: #fff;
                }
            }
        }
        .bg-gray{
            height: .14rem;
            background: #f3f2f1;
        }
    }
</style>
