<template>
    <div class="list">
        <ul>
            <li v-for="item in list">
                <div class="left-block">
                    <p class="title">{{item.operation}}<span v-if="item.type">{{item.type}}</span></p>
                    <p class="des">{{item.time}}</p>
                </div>
                <div class="right-block">
                    <p class="title">{{item.money}}</p>
                    <p class="des">{{item.res}}</p>
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
        data () {
            return {
                list:[
                    {
                        'operation':'快速取出',
                        'type':'',
                        'time':'2017-07-24  13:25:50',
                        'money':'300元',
                        'res':'确认成功'
                    },
                    {
                        'operation':'卖出',
                        'type':'虹现金管家货币E',
                        'time':'2017-07-24  13:25:50',
                        'money':'300元',
                        'res':'确认成功'
                    }
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
