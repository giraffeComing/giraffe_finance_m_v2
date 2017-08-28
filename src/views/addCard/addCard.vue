<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="rn-bg"></div>
        <div class="rn-title">银行卡</div>
        <div class="form-rn">
            <ul>
                <li class="form-li">
                    <div class="title">姓名</div> 
                    <div class="ipt">
                        <div class="read-only">{{passName}}</div>
                        <input type="hidden" :value="realName" ref="username"/>
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">身份证号</div> 
                    <div class="ipt"><div class="read-only">{{passIdCardNo}}</div></div>
                    <input type="hidden" :value="idCardNo" ref="idcard"/>
                </li>
                <li class="form-li">
                    <div class="title">银行卡</div>
                    <div class="ipt">
                        <select v-model="bankCode" class="ipt-select">
                            <option value="">请选择银行卡</option>
                            <option v-for="item in bankList" :value="item.bank_code">{{item.bank_name}}</option>
                        </select>
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">银行卡号</div> 
                    <div class="ipt"><input type="tel" maxlength="23
                    " v-model.trim="bankCardNo" placeholder="请输入银行卡卡号" class="ipt-long" @input="bankInput"></div>
                </li>
                <li class="form-li">
                    <div class="title">手机号</div><div class="ipt"><input type="tel"  @input="phoneInput" v-model.trim="issueMobileNo" placeholder="银行预留手机号" class="ipt-long"></div>
                </li>
                <li class="form-li">
                    <div class="title">验证码</div><div class="ipt"><input type="number"  v-model.trim="rescode" placeholder="请输入验证码" class="ipt-short" number> <div class="yzm" :class="{'disabled ':chkFlag}" @click="getCheckCodeDate" v-text="getCodeText">获取验证码</div></div>
                </li>
            </ul>
        </div>
        <div class="rn-btn" @click="bindcard">立即绑定</div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import Toast from '../../components/common/toast/toast.js'
    const RES_OK = 0;  //请求成功
    export default {
        name: '',
        components: {
            VHeader
        },
        data () {
            return {
                headerData:{
                    name: "添加银行卡",
                    backBtn: true,
                    tag:'支持银行'
                },
                myInfo:'',   //个人信息
                bankList:'',  //可选择的银行
                chkFlag:false,  //发送验证码
                time:'',//时间
                getCodeText: '获取验证码',  //默认

                bankCardNo:'',  //银行卡号
                bankCode:'',  //银行编码
                realName:'',  //真实姓名
                passName:'',  //密文姓名
                idCardNo:'',  //身份证号
                passIdCardNo:'',  //密文身份证号
                issueMobileNo:'',  //手机号
                rescode:'',  //验证码

                reqSeq:''   //reqSeq请求序列号 用于绑卡第二步使用
            }
        },
         created(){
              //个人信息
            this.$http({
                port : 'getUserIdentity',
                openLoader:true
            }).then((res)=>{
                if(res.code === RES_OK){
                    this.realName = res.data.user_info.nickName;
                    this.passName = res.data.user_info.nickName.replace(/(.{1})/, '*');
                    this.idCardNo = res.data.user_info.idCardNo;
                    this.passIdCardNo = res.data.user_info.idCardNo.replace(/(.{1}).*(.{1})/,"$1*****************$2"); 
                }
            })

            //模拟可选择的银行
            this.$http({
                port : 'availableBankList',
                openLoader:true
            }).then((res)=>{
                if(res.code === RES_OK){
                    this.bankList = res.data;
                }
            });
        },
        methods:{
            bankInput(){
                if(this.bankCardNo.length<23){
                  if(/\S{5}/.test(this.bankCardNo)){
                    this.bankCardNo = this.bankCardNo.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
                  }
                }
            },
            phoneInput(){
                 this.issueMobileNo=this.issueMobileNo.replace(/\s/g, '').replace(/(\d{3})(\d{4})/,"$1 $2 ");
            },
            getCheckCodeDate(){
                //校验手机号
                const telReg=/^1[0-9][0-9]\d{8}$/;
                if(!this.issueMobileNo){
                    Toast("请输入您的手机号！");
                    return false;
                }
                if(!telReg.test(this.issueMobileNo.replace(/\s/g, ""))){
                    Toast("请输入正确的手机号！");
                    return false;
                }
                
                this.$http({
                    port : 'bindBankCardStep1',
                    data:{
                        realName: this.$refs.username.value.replace(/\s/g, ""),
                        bankCardNo: this.bankCardNo.replace(/\s/g, ""),
                        bankCode: this.bankCode.replace(/\s/g, ""),
                        issueMobileNo: this.issueMobileNo.replace(/\s/g, ""),
                        idCardNo: this.$refs.idcard.value.replace(/\s/g, "")
                    },
                    openLoader:true
                }).then((res)=>{
                    if(res.code === RES_OK){
                        this.reqSeq = res.data.reqSeq;
                        Toast('验证码已发送到您的手机!');

                        if(!this.chkFlag){
                            this.time = 60;
                            this.chkFlag = true;
                            this.getCodeText = this.time + "s后重发";
                            const _seft = this;
                            const timer = setInterval(function() {
                                if(_seft.time >= 2) {
                                _seft.time -= 1;
                                _seft.getCodeText = _seft.time + "s后重发";
                                } else {
                                _seft.getCodeText="重新获取";
                                clearInterval(timer);
                                _seft.chkFlag = false;
                                }
                            }, 1000);
                        }
                    }else{
                        Toast(res.msg);
                        return false;
                    }
                })
            },
            bindcard(){
                //校验银行卡
                if(!this.bankCode){
                    Toast("请先选择银行!");
                    return false;
                }
                if(!this.bankCardNo){
                    Toast("请输入银行卡号!");
                    return false;
                }
                if(this.bankCardNo.replace(/\s/g, "").length < 16){
                    Toast("请输入正确的银行卡号!");
                    return false;
                }
                //校验验证码
                if(!this.rescode){
                    Toast("请输入验证码!");
                    return false;
                }
                //绑卡
                this.$http({
                    port : 'bindBankCardStep2',
                    data:{
                        reqSeq:this.reqSeq,
                        captcha: this.rescode
                    },
                    openLoader:true
                }).then((res)=>{
                    if(res.code === RES_OK){
                        Toast('恭喜您，绑定成功!');
                    }else{
                        Toast(res.msg);
                        return false;
                    }
                })

            }
        }
        
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        -webkit-overflow-scrolling: touch;
        padding-top: .9rem;
        background: #fff;
        .rn-bg{
            width: 1.63rem;
            height: 1.63rem;
            background: url("./cardbg.png") no-repeat;
            background-size: 100% 100%;
            margin: .7rem auto 0;
        }
        .rn-title{
            line-height: .7rem;
            font-size: .28rem;
            text-align: center;
        }
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
                .read-only{
                    text-align: right;
                    padding: 0 .3rem;
                    color: #808080;
                    font-size: .28rem;
                }
                .ipt-select{
                    display: block;
                    height: 100%;
                    width: 100%;
                    padding: 0 .2rem;
                    font-size: .28rem;
                    border: none;
                    background: url("./arrow-right.png") no-repeat;
                    background-position: right center;
                    background-size: .17rem .25rem;
                    -webkit-appearance: none;
                    outline: none;
                    border: none;
                }
                .ipt-long{
                    display: block;
                    height: 100%;
                    outline: none;
                    width: 100%;
                    padding: 0 .2rem;
                    font-size: .28rem;
                    border: none;
                }
                .ipt-short{
                    display: block;
                    float: left;
                    height: 100%;
                    padding: 0 .2rem;
                    font-size: .28rem;
                    width: 2.8rem;
                    border: none;
                    outline: none;
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
        .rn-btn{
            display: block;
            height: .8rem;
            line-height: .8rem;
            color: #fff;
            background: #ef4352;
            text-align: center;
            font-size: .28rem;
            margin: .6rem .2rem 0;
            border-radius: 2px;
            .disabled { pointer-events: none; }
        }
    }
</style>
