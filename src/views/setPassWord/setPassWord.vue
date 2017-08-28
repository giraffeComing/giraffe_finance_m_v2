<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="rn-bg"></div>
        <div class="rn-title">交易密码</div>
        <div class="form-rn">
            <ul>
                <li class="form-li">
                  <div class="title">交易密码</div>
                  <div class="ipt">
                    <input class="ipt-long" type="password" v-model="password" placeholder="请输入交易密码">
                  </div>
                </li>
                <li class="form-li">
                  <div class="title">确认密码</div>
                  <div class="ipt">
                    <input class="ipt-long" type="password" v-model="confirmpassword" placeholder="请再次确认交易密码">
                  </div>
                </li>
            </ul>
        </div>
        <div class="notice">交易密码主要用于投资理财，如购买基金、定期产品等</div>
        <div class="rn-btn" @click="formSubmit()">确&nbsp;&nbsp;认</div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import Toast from '../../components/common/toast/toast'
    import crypto from 'crypto'
    
    var _default = {
        password:'',
        confirmpassword:'',
    };
    export default {
        name: '',
        components: {
            VHeader
        },
        data () {
            return {
                headerData:{
                    name: "设置交易密码",
                    backBtn: true,
                    backNum: -2
                },
                ..._default,
            }
        },
        watch:{
          password(){
            console.log(this.password)
          },
          confirmpassword(){
            console.log(this.confirmpassword)
          }
        },
        methods: {
            setEncrypt(val){
              const md5 = crypto.createHash('md5');
              md5.update(val.toString());
              var md5msg = md5.digest('hex');

              return md5msg.toString()
            },
            formSubmit(){
                if(!/^\d{6}$/.test(this.password)){
                    Toast('请输入正确的交易密码');
                    return;
                }
                if(this.password !== this.confirmpassword){
                    Toast('交易密码不一致');
                    return;
                }
                this.$http({
                    port : 'setPayPW',
                    data : {
                        password : this.password,
                        confirmpassword : this.confirmpassword
                    },
                    openLoader:true
                }).then((res)=>{
                    if(res.code == 0){
                        Toast("设置成功");
                        setTimeout(()=>{
                            this.$router.go(-2)
                        },2000)
                    }else{
                        Toast(res.msg)
                    }
                })
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        padding-top: .9rem;
        background: #fff;
        -webkit-overflow-scrolling: touch;
        .rn-bg{
            width: 1.63rem;
            height: 1.63rem;
            background: url("./passwordbg.png") no-repeat;
            background-size: 100% 100%;
            margin: .7rem auto 0;
        }
        .rn-title{
            line-height: .7rem;
            font-size: .28rem;
            text-align: center;
        }
        .rn-btn{
            display: block;
            height: .8rem;
            line-height: .8rem;
            color: #fff;
            background: #ef4352;
            text-align: center;
            font-size: .28rem;
            margin: .4rem .2rem 0;
            border-radius: 2px;
        }
        .notice{
            font-size: .26rem;
            color: #808080;
            padding: 0 .24rem;
            margin-top: .4rem;
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
          .ipt-long{
            display: block;
            margin-top: .23rem;
            height: .6rem;
            line-height: .6rem;
            width: 100%;
            padding: 0 .2rem;
            font-size: .28rem;
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
    }
</style>
