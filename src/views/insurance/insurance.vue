<template>
    <div class="page-view">
        <v-header :opts="headOpt"></v-header>
        <div ref="comBody" class="insurance">
            <div>
                <div class="details">
                    <div class="assets">
                        <div class="title">总保额 (元)</div>
                        <div class="num">{{total}}</div>
                    </div>
                    <div class="info">(不计入总资产)</div>
                </div>

                <div class="wrap">
                    <v-tabwrap :opts="insData"></v-tabwrap>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VTabwrap from './tabview/tabwrap.vue'
    //    better scroller
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {
            VHeader,
            VTabwrap
        },
        data () {
            return {
                total: '0',
                headOpt: {
                    name: "保险",
                    backBtn: true
                },
                insList: [],
                comBodyScroll: '',
                insData: {
                    hold: '',
                    record: ''
                }

            }
        },
        computed: {
//      getVal (){
//
//        return this.priceList;
//      }
        },
        methods: {
            indexScroll() {
                this.comBodyScroll = new BScroll(this.$refs.comBody, {
                    click: true,
                    deceleration: 0.001,
                });
            },
            formatMoney (number, places, symbol, thousand, decimal) {
                number = number || 0;
                places = !isNaN(places = Math.abs(places)) ? places : 2;
                symbol = symbol !== undefined ? symbol : "";
                thousand = thousand || ",";
                decimal = decimal || ".";
                let negative = number < 0 ? "-" : "",
                    i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
                    j = (j = i.length) > 3 ? j % 3 : 0;
                return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
            }
        },
        created(){
//            持有中
            this.$http({
                port: 'getInsuranceRecord',      // 接口port
                url: '',  // 请求完整url 设置此项后 port 失效
                data: {
                    hold: 1
                },
                method: 'get',                      // 请求方式 默认 get
                openLoader: true                     // 是否开启loading 默认关闭
            }).then((res) => {
                if (res.code == 0) {
                    this.total = res.data.total;
                    this.insData.hold=res.data.warranty
                }
            })
//            投保记录
            this.$http({
                port: 'getInsuranceRecord',      // 接口port
                url: '',  // 请求完整url 设置此项后 port 失效
                data: {
                    hold: 2
                },
                method: 'get',                      // 请求方式 默认 get
                openLoader: true                     // 是否开启loading 默认关闭
            }).then((res) => {
                if (res.code == 0) {
                    this.insData.record=res.data.warranty
                }
            })


            this.insData.hold = [
                {
                    lab: '旅游',
                    name: '无忧旅游季自驾游',
                    id: '8',
                    price: '100,000,000.50',
                    endtime: '2017-08-07'
                }
            ],
                this.insData.record = [
                    {
                        lab: '旅游',
                        name: '无忧旅游季自驾游',
                        id: '8',
                        price: '100,000,000.50',
                        endtime: '2017-08-07'
                    }
                ]
        },
        mounted(){
            //$nextTick这个方法保证了dom结构加载完成之后再执行
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(() => {
                    this.indexScroll();
                }, 10)
            })
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

    .page-view {
        height: 100%;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding-top: .9rem;
        line-height: 1.1;

        .insurance {
            height: 100%;
            overflow: hidden;
            background: #fff;

            .details {
                text-align: center;

                .assets {
                    padding-top: .36rem;
                    .title {
                        font-size: .28rem;
                        color: #333;
                    }
                    .num {
                        font-size: .6rem;
                        color: #ef4352;
                        font-weight: 700;
                        margin-top: .2rem;
                    }
                }
                .info {
                    height: 1rem;
                    line-height: 1rem;
                    color: #a0a0a0;
                    font-size: .24rem;
                }
            }
            .wrap {
                border-top: .14rem solid #f5f5f5;
            }
        }
    }
</style>
