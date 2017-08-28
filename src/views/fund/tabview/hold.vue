<template>
    <div class="hold">
        <div class="item" v-for="(item,index) in fundData">
            <router-link :to="{ name: 'VFundDetail', params:{ fundcode : item.fund_code}}">
                <div class="title">{{item.fund_name}}（{{item.fund_code}}）</div>
                <div class="info">
                    <div class="cell">
                        <div class="num">{{item.market_value}}</div>
                        <div class="name">市值</div>
                    </div>
                    <div class="cell">
                        <div class="num">{{item.income_lastday}}</div>
                        <div class="name">昨日收益</div>
                    </div>
                    <div class="cell">
                        <div class="num">{{item.income_hold}}</div>
                        <div class="name">持仓收益</div>
                    </div>
                </div>
            </router-link>
        </div>
        <!--暂无持仓-->
        <v-empty v-if="fundData==null||fundData.length<1" :opts="emptyData" @eventBtn="emptyBtn"></v-empty>
    </div>
</template>

<script>
    import VEmpty from '../../../components/common/empty/empty.vue'
    export default {
        name: '',
        components: {
            VEmpty
        },
        props: {},
        methods: {
            emptyBtn (){
                console.log('按钮操作')
            }
        },
        data () {
            return {
                fundData: "",
                emptyData: {
                    icon: 'type2',
                    desc: '当前持仓为空，快买只基金涨涨财气~',
                    btn: '前往购买'
                }
            }
        },
        created: function () {
            this.$http({
                port: 'fundHoldList',      // 接口port
                url: '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader: true                     // 是否开启loading 默认关闭
            }).then((res) => {
                this.fundData = res.data           // 返回请求结果
            });
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .hold {
        .item {
            display: block;
            padding: 0 .24rem .3rem;
            border-bottom: 1px solid #f3f3f3;

            .title {
                display: block;
                line-height: .9rem;
                color: #333;
                font-size: .32rem;
            }
            .info {
                background-color: #f8f8f8;
                border-radius: .16rem;
                height: 1.18rem;
                @include clearfix;

                .cell {
                    width: 33.333%;
                    float: left;
                    line-height: .4rem;
                    padding: .19rem 0;
                    text-align: center;
                    &:first-child {
                        .num {
                            color: #ef4352;
                        }
                    }
                    .name {
                        font-size: .24rem;
                        color: #a0a0a0;
                    }
                    .num {
                        font-size: .28rem;
                        color: #808080;
                    }
                }
            }
        }
    }
</style>
