<template>
    <div class="total">
        <div class="top">
            <div class="title">总资产（元）</div>
            <div class="num">{{sfbData.sfb_total}}</div>
        </div>
        <div class="bottom">
            <div class="block">
                <p class="des">昨日收益（元）</p>
                <p class="money">{{sfbData.sfb_income_lastday}}</p>
            </div>
            <div class="block">
                <p class="des">累计收益（元）</p>
                <p class="money">{{sfbData.sfb_income_total}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        created:function () {
            this.$http({
                port: 'getSfbAsset',      // 接口port
                url: '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader: true                     // 是否开启loading 默认关闭
            }).then((res) => {
                this.sfbData=res.data;
            })
        },
        data () {
            return {
                sfbData:{
                    "sfb_total":0.00,
                    "sfb_income_lastday":0.00,
                    "sfb_income_total":0.00
                }
            }
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
