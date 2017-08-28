<template>
    <div class="hold">
        <div class="item" v-for="(item,index) in fundData">
            <div class="title">{{item.fix_name}}</div>
            <!--已赎回标签-->
            <!--<div class="tag"></div>-->
            <div class="info">
                <div class="cell">
                    <div class="num">{{item.fix_amount}}</div>
                    <div class="name">投资金额</div>
                </div>
                <div class="cell" v-if="item.fix_type==1">
                    <div class="num">{{item.fix_profit}}</div>
                    <div class="name">收益</div>
                </div>
                <div class="cell fr">
                    <div class="num">{{item.fix_status}}</div>
                    <div class="name">状态</div>
                </div>
            </div>
        </div>

        <div v-if="fundData.length<1">
            <v-empty :opts="emptyData"></v-empty>
        </div>
    </div>
</template>

<script>
    import VEmpty from '../../components/common/empty/empty.vue'
    export default {
        name: '',
        components: {
            VEmpty
        },
        created:function () {
            this.$http({
                port : 'getFixTradeRecord',      // 接口port
                url : '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader:true                     // 是否开启loading 默认关闭
            }).then((res)=>{
                this.fundData = res.data           // 返回请求结果
            });
        },
        methods:{

        },
        data () {
            return {
                emptyData: {
                    icon:'type1',
                    desc : '暂无记录',
                    btn : ''
                },
                fundData:[]
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .hold{
        .item{
            display: block;
            padding:0 .24rem .3rem;
            border-bottom: 1px solid #f3f3f3;
            position: relative;
            .title{
                display: block;
                line-height: .9rem;
                color: #333;
                font-size: .32rem;
                .time{
                    font-size: .24rem;
                    color: #a0a0a0;
                    float: right;
                    .state{
                        margin-left: .1rem;
                    }
                }
            }
            .tag{
                position: absolute;
                right: .34rem;
                top: .2rem;
                width: 1rem;
                height: 1rem;
                background: url("icon01.png") no-repeat;
                background-size: 100% 100%;
            }
            .info{
                background-color: #f8f8f8;
                border-radius: .16rem;
                /*height: 1.18rem;*/
                @include clearfix;

                .cell{
                    width: 33.333%;
                    float: left;
                    line-height: .4rem;
                    padding:.19rem 0;
                    text-align: center;
                    &:first-child{
                        .num{
                            color:#ef4352;
                        }
                    }
                    .name{
                        font-size: .24rem;
                        color: #a0a0a0;
                    }
                    .num{
                        font-size: .28rem;
                        color:#808080;
                    }
                }
                .btns{
                    display: flex;
                    padding: 0 .9rem .36rem;
                    justify-content: space-around;
                    .btn-gray,.btn-red{
                        display: block;
                        width: 2.3rem;
                        height: .7rem;
                        line-height: .7rem;
                        border: none;
                        background: none;
                        font-size: .3rem;
                        color: #fff;
                        text-align: center;
                        border-radius: 2px;
                    }
                    .btn-gray{
                        background: #c0c0c0;
                    }
                    .btn-red{
                        background: #ef4353;
                    }
                }
            }
        }
        .fr{
            float: right !important;
        }
    }
</style>
