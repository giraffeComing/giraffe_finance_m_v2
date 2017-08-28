<template>
    <!--better-scroller的ref要直接跟着一个div结构-->
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData" ref="sfHeader"></v-header>
        <div ref="comBodySf" class="scroller">
            <div>
                <v-total :opts="licaiCount"></v-total>
                <div class="bg-gray"></div>
                <v-tab @refresh="refreshScroll"></v-tab>
            </div>
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
        created:function () {
            this.$http({
                port : 'getFixAsset',      // 接口port
                url : '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader:true                     // 是否开启loading 默认关闭
            }).then((res)=>{
                this.licaiCount = res.data           // 返回请求结果
            });
        },
        data () {
            return {
                comBodyScrollSf:'',
                headerData:{
                    name: "理财",
                    backBtn: true
                },
                licaiCount: {
                    fix_total: 10,
                    fix_amount: 10,
                    fix_profit: 10
                }
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
                this.$refs.comBodySf.style.height = pageH - headerH +'px';
                this.comBodyScrollSf = new BScroll(this.$refs.comBodySf,{
                    click: true,
                    deceleration: 0.001,
                });
            },
            refreshScroll(){

                this.$nextTick(() => {
                    setTimeout(()=>{
                        this.comBodyScrollSf.refresh()
                    },500)
                })
            }
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
        .bg-gray{
            height: .14rem;
            background: #f3f2f1;
        }
    }
</style>
