<template>
    <div class="form-rn">
        <ul>
            <li class="form-li" v-for="item in formIntData">
                <div class="title">{{item.name}}</div>
                <!--正常的li-->
                <div class="ipt" v-if="!item.yzm">
                    <!--input类型-->
                    <input class="ipt-long" :type=item.type :placeholder="item.placeHolder">
                </div>
                <!--验证码的li-->
                <div class="ipt" v-else>
                    <input class="ipt-short" type="text" placeholder="请输入真实姓名">
                    <div class="yzm">获取验证码</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {
                formIntData: [
                    {
                        name: '交易密码',
                        placeHolder: '请输入交易密码',
                        type: 'text'
                    },
                    {
                        name: '身份证号',
                        placeHolder: '请输入身份证号',
                        type: 'number'
                    },
                    {
                        name: '银行卡号',
                        placeHolder: '请输入银行卡卡号',
                        type: 'number'
                    },
                    {
                        name: '手机号',
                        placeHolder: '银行预留手机号',
                        type: 'number'
                    },
                    {
                        name: '验证码',
                        placeHolder: '请输入验证码',
                        type: 'number',
                        yzm: true
                    }
                ],
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .form-rn{
        padding: 0 .24rem;
    }
    .form-li{
        display: flex;
        height: 1.06rem;
        line-height: 1.06rem;
        border-bottom: 1px solid #c0c0c0;
        .title{
            width: 1.2rem;
            font-size: .28rem;
            margin: 0 .3rem;
            text-align: justify;
            /*文字在宽度内均匀分布*/
            &:after {
                content: '';
                width: 100%;
                display: inline-block;
            }
        }
        .ipt{
            flex: 1;
            .ipt-long{
                display: block;
                margin-top: .3rem;
                height: .4rem;
                line-height: .4rem;
                width: 100%;
                padding: 0 .2rem;
                font-size: .28rem;
                border: none;
            }
            .ipt-short{
                display: block;
                float: left;
                margin-top: .3rem;
                height: .4rem;
                line-height: .4rem;
                padding: 0 .2rem;
                font-size: .28rem;
                width: 2.8rem;
                border: none;
            }
            .yzm{
                float: right;
                margin-top: .4rem;
                display: block;
                padding: 0 .4rem;
                font-size: .28rem;
                color: #ff8a43;
                border-left: 1px solid #c0c0c0;
                text-align: right;
                line-height: .3rem;
            }
        }
    }
</style>
