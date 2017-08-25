<template>
    <div class="list">
        <ul>
            <li v-for="item in list">
                <div class="left-block">
                    <p class="title">{{item.sfb_trade_desc}}<span v-if="item.sfb_name">{{item.sfb_name}}</span></p>
                    <p class="des">{{item.sfb_time}}</p>
                </div>
                <div class="right-block">
                    <p class="title">{{item.sfb_amount}}</p>
                    <p class="des">{{item.sfb_status}}</p>
                </div>
            </li>
        </ul>
        <!--无记录的时候显示背景-->
        <div class="bg" v-if="list.length<1"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        created:function () {
            this.$http({
                port: 'getSfbTradeRecord',      // 接口port
                url: '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader: true                     // 是否开启loading 默认关闭
            }).then((res) => {
                if(res.code==0){
                    this.list = res.data.data
                }
            })
        },
        data () {
            return {
                list:[
//                    {
//                        'sfb_trade_desc':'快速取出',
//                        'sfb_name':'',
//                        'sfb_time':'2017-07-24  13:25:50',
//                        'sfb_amount':'300元',
//                        'sfb_status':'确认成功'
//                    },
//                    {
//                        'sfb_trade_desc':'卖出',
//                        'sfb_name':'虹现金管家货币E',
//                        'sfb_time':'2017-07-24  13:25:50',
//                        'sfb_amount':'300元',
//                        'sfb_status':'确认成功'
//                    }
                ],
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .list{
        li{
            height: 1.32rem;
            border-bottom: 1px solid #f3f3f3;
            background: #fff;
            padding: 0 .25rem;
            .left-block{
                float: left;
                height: 1.32rem;
                text-align: left;
            }
            .right-block{
                float: right;
                height: 1.32rem;
                text-align: right;
            }
            .title{
                line-height: .8rem;
                font-size: .28rem;
                span{
                    font-size: .24rem;
                    color: #a0a0a0;
                    margin-left: .4rem;
                }
            }
            .des{
                font-size: .24rem;
                color: #a0a0a0;
            }
        }
        .bg{
            height: 3rem;
            background: url("./bg.png") no-repeat;
            background-size: 2.3rem 1rem;
            background-position: bottom center;
        }
    }
</style>
