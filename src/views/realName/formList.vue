<template>
    <div class="form-rn">
        <ul>
            <li class="form-li" v-for="item in formIntData">
                <div class="title">{{item.name}}</div>
                <!--正常的li-->
                <div class="ipt" v-if="!item.yzm">
                    <!--只读-->
                    <div class="read-only" v-if="item.readOnly">{{item.val}}</div>
                    <!--下拉选-->
                    <select v-else-if="item.selectType" style="appearance:none;" class="ipt-select" name="" id="">
                        <option v-for="option in item.options" v-bind:value="option.value">{{option.text}}</option>
                    </select>
                    <!--input类型-->
                    <input v-else class="ipt-long" :type=item.type :placeholder="item.placeHolder">
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
                        name: '姓名',
                        placeHolder: '请输入真实姓名',
                        type: 'text'
                    },
                    {
                        name: '身份证号',
                        placeHolder: '请输入身份证号',
                        type: 'number'
                    },
                    {
                        name: '银行卡',
                        selectType: true,
                        placeHolder: '请输入银行卡卡号',
                        options:[
                            { text: '请选择', value: '请选择' },
                            { text: '招商银行', value: '招商银行' },
                            { text: '工商银行', value: '工商银行' },
                            { text: '中国银行', value: '中国银行' }
                        ]
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
            .ipt-select{
                display: block;
                margin-top: .3rem;
                height: .4rem;
                line-height: .4rem;
                width: 100%;
                padding: 0 .2rem;
                font-size: .28rem;
                border: none;
                background: url("./arrow-right.png") no-repeat;
                background-position: right center;
                background-size: .17rem .25rem;
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
