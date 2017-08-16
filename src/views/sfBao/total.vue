<template>
    <div class="total">
        <div class="top">
            <div class="title">总资产（元）</div>
            <div class="num">150,000.00</div>
        </div>
        <div class="bottom">
            <div class="block">
                <p class="des">昨日收益（元）</p>
                <p class="money">1,123,456.00</p>
            </div>
            <div class="block">
                <p class="des">累计收益（元）</p>
                <p class="money">40.00</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .total{
        height: 3.4rem;
        background: #fff;
        .top{
            height: 2.2rem;
            border-bottom: 1px solid #f3f3f3;
            text-align: center;
            .title{
                padding-top: .4rem;
                line-height: .7rem;
                font-size: .28rem;
            }
            .num{
                font-size: .6rem;
                color: #ef4352;
            }
        }
        .bottom{
            height: 1.2rem;
            padding: 0 .4rem;
            .block{
                width: 2.8rem;
                height: 1.2rem;
                text-align: center;
                .des{
                    font-size: .24rem;
                    line-height: .7rem;
                }
                .money{
                    font-size: .28rem;
                    color: #333;
                    font-weight: bold;
                }
                &:first-child{
                    float: left;
                }
                &:last-child{
                    float: right;
                }
            }
        }
    }
</style>
