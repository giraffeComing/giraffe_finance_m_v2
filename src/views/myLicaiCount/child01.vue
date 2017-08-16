<template>
    <div class="hold">


        <div class="item" v-for="(item,index) in fundData">
            <div class="title">{{item.fundname}}
                <span class="time">
                    {{item.time}}<span class="state">{{item.state}}</span>
                </span>
            </div>
            <div class="info">
                <div class="cell">
                    <div class="num">{{item.value}}</div>
                    <div class="name">投资金额</div>
                </div>
                <div class="cell">
                    <div class="num">{{item.earn}}</div>
                    <div class="name">预期年化收益率</div>
                </div>
                <div class="cell">
                    <div class="num">{{item.holdearn}}</div>
                    <div class="name">预期收益</div>
                </div>

                <div class="btns" v-if="item.showbtn">
                    <!--a or input-->
                    <a href="javascript:;" class="btn-gray">购买</a>
                    <a href="javascript:;" class="btn-red">赎回</a>
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
//        props: {
//            fundData: ""
//        },
        methods:{

        },
        data () {
            return {
                emptyData: {
                    icon:'type2',
                    desc : '当前没有持有项目',
                    btn : '前往购买'
                },
                fundData:[
                    {
                        fundname : '新浪浪淘金九期',
                        value : '10.232.20',
                        earn : '0.50',
                        holdearn : '30.50',
                        time: '2018-08-10',
                        state: '结息',
                        showbtn: false
                    },
                    {
                        fundname : '微聚理财-短期90天计划',
                        value : '10.232.20',
                        earn : '10.23',
                        holdearn : '10.20',
                        time: '2018-08-11',
                        state: '结息',
                        showbtn: true
                    }
                ]
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
    }
</style>
