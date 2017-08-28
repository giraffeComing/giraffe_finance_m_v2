<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="rn-bg"></div>
        <div class="rn-title">实名认证</div>
        <div class="form-rn" v-if="showFrom">
            <ul>
                <li class="form-li">
                    <div class="title">姓名</div>
                    <div class="ipt">
                        <input class="ipt-long" v-model.trim="realName" :disabled="isBan" type="text" placeholder="请输入真实姓名">
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">身份证号</div>
                    <div class="ipt">
                      <input class="ipt-long" v-model.trim="idCardNo" :disabled="isBan" type="tel" placeholder="请输入身份证号">
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">开户行</div>
                    <div class="ipt">
                      <select class="ipt-select" v-model.trim="bankCode" :disabled="isBan">
                        <option value="0">请选择</option>
                        <option v-for="item in bankList" :value="item.bank_code">{{item.bank_name}}</option>
                      </select>
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">银行卡号</div>
                    <div class="ipt">
                        <input class="ipt-long" v-model.trim="bankCardNo" :disabled="isBan" type="tel" placeholder="请输入银行卡卡号">
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">手机号</div>
                    <div class="ipt">
                        <input class="ipt-long" v-model.trim="issueMobileNo" :disabled="isBan" type="tel" placeholder="银行预留手机号">
                    </div>
                </li>
                <li class="form-li">
                    <div class="title">验证码</div>
                    <div class="ipt">
                        <input class="ipt-short" v-model.trim="captcha" type="tel" placeholder="请输入验证码">
                        <div class="yzm" :class="{disabled :codeDisabled}" @click="getBankCode()">{{codeBtnTxt}}</div>
                    </div>
                </li>
            </ul>
            <div class="rn-btn" @click="formSubmit(true)">立即认证</div>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import Toast from '../../components/common/toast/toast'
    var _default = {
        showFrom:false,
        realName:'',
        idCardNo:'',
        bankCode:'0',
        bankCardNo:'',
        issueMobileNo:'',
        reqSeq:'',
        captcha:'',
        codeDisabled: true,
        codeBtnTxt : '获取验证码',
        codeTimer : null,
        isBan : false,
        bankList:''
    };
    export default {
        name: '',
        components: {
            VHeader,
        },
        data () {
            return {
                headerData:{
                    name: "实名认证",
                    backBtn: true
                },
                ..._default
            }
        },
        watch:{
            bankCardNo(){
              this.bankCardNo = this.getBankNumber(this.bankCardNo);
            },
            issueMobileNo(){
                this.codeDisabled = !this.isPhoneNumber(this.issueMobileNo);
            },
//            realName(){
//              console.log(this.realName)
//            },
//            idCardNo(){
//              console.log(this.idCardNo)
//            },
//            bankCode(){
//              console.log(this.bankCode)
//            },
//            captcha(){
//              console.log(this.captcha)
//            }
        },
        methods: {
            formSubmit(){
                this.formVerify(true,() => {
                    this.$http({
                        port : 'bindBankCardStep2',
                        data : {
                            reqSeq : this.reqSeq,
                            captcha : this.captcha
                        },
                        openLoader:true
                    }).then((res)=>{
                        if(res.code == 0){
                            Toast("认证成功");
                            setTimeout(()=>{
                                this.$router.push({ path: 'setpassword' })
                            },2000)
                        }else{
                            Toast(res.msg)
                        }
                    })
                })
            },
            codeBtnStatus(){
                var time = 60;
                this.codeDisabled = true;
                this.codeBtnTxt = '( 60s )';
                Toast('验证码已发送');
                this.isBan = true;
                
                this.codeTimer = setInterval(()=>{
                    time--;
                    this.codeBtnTxt = `( ${time}s )`;
                    
                    if(time < 0){
                        this.codeDisabled = false;
                        this.codeBtnTxt = '重新获取';
                        clearInterval(this.codeTimer);
                        this.codeTimer = null;
                        this.isBan = false;
                    }
                },1e3);
            },
            getBankCode(){
                if(this.codeDisabled) return;
                this.formVerify(false,() => {
                    this.$http({
                        port : 'bindBankCardStep1',
                        data : {
                            realName : this.realName,
                            idCardNo : this.idCardNo,
                            bankCode : this.bankCode,
                            bankCardNo : this.getNumTrim(this.bankCardNo),
                            issueMobileNo : this.issueMobileNo
                        },
                        openLoader:true
                    }).then((res)=>{
                        if(res.code == 0){
                            this.codeBtnStatus();
                            this.reqSeq = res.data.reqSeq;
                        }else{
                            Toast(res.msg)
                        }
                    })
                })
            },
            formVerify(isSubmit,callback){
                if(!this.realName){
                    Toast('请输入您的真实姓名');
                    return;
                }
                if(!this.isIdNumber(this.idCardNo)){
                    Toast('请输入正确的身份证号码');
                    return;
                }
                if(this.bankCode == '0'){
                    Toast('请选择开卡银行');
                    return;
                }
                if(!this.bankCardNo){
                    Toast('请输入银行卡卡号');
                    return;
                }
                if(!this.isPhoneNumber(this.issueMobileNo)){
                    Toast('请输入正确的手机号码');
                    return;
                }
                if(isSubmit && !this.captcha){
                    Toast('请输入验证码');
                    return;
                }
                callback && callback();
            },
            isPhoneNumber (n) {
              return /^1[\d]{10}$/.test(n);
            },
            isIdNumber (sId) {
                //return /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(sId);
        
                var iSum=0;
                var info="";
                var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
                if(!/^\d{17}(\d|x)$/i.test(sId))return false;
                sId=sId.replace(/x$/i,"a");
                if(aCity[parseInt(sId.substr(0,2))]==null)return false;
                var sBirthday=sId.substr(6,4)+"-"+Number(sId.substr(10,2))+"-"+Number(sId.substr(12,2));
                var d=new Date(sBirthday.replace(/-/g,"/"))
                if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return false;
                for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sId.charAt(17 - i),11)
                if(iSum%11!=1)return false;
                return true;
            },
            getBankNumber (str) {
                str = str.replace(/ /g, '');
                var ns = [],sp = '',s = str.split(''),i = 0,l = s.length,j;
        
                for (; i < l; i++) {
                    j = i+1;
                    sp = j%4 === 0 ? sp = ' ' : sp = '';
                    ns.push(s[i].replace(/[^0-9]/ig,"") + sp);
                }
                return ns.join('').replace(/ $/, '');
            },
            getNumTrim(num){
                return num.replace(/[^0-9]/ig,"");
            },
            getBankList(){
                this.$http({
                    port : 'availableBankList',
                    openLoader:true
                }).then((res)=>{
                    if(res.code == 0){
                        this.bankList = res.data;
                    }else{
                        Toast(res.msg)
                    }
                    this.showFrom = true;
                })
            }
        },
        created(){
            this.getBankList();
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
            background: url("./realnamebg.png") no-repeat;
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
                input{
                    display: block;
                    margin-top: .23rem;
                    height: .6rem;
                    line-height: .6rem;
                    padding: 0 .2rem;
                    font-size: .28rem;
                    border: none;
                    outline: none;
                    float: left;
                
                    &.ipt-long{
                        width: 100%;
                    }
                    &.ipt-short{
                        width: 2.8rem;
                    }
                  
                    &:disabled{
                      background-color: transparent;
                    }
                }
          
              .ipt-select{
                  display: block;
                  margin-top: .23rem;
                  height: .6rem;
                  line-height: .6rem;
                  width: 100%;
                  padding: 0 .2rem;
                  font-size: .28rem;
                  border: none;
                  outline: none;
                  appearance:none;
                  background: url("./arrow-right.png") no-repeat;
                  background-position: right center;
                  background-size: .17rem .25rem;
                
                  &:disabled{
                    background-color: transparent;
                  }
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
                
                  &.disabled{
                      color: #808080;
                  }
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
        }
    }
</style>
