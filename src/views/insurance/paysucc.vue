<template>
  <div class="page-view">
    <v-header :opts="headOpt" ref="sfHeader"></v-header>
    <div ref="comBody" class="paysucc">
      <div>
        <div class="detail">
          <h2 class="paytit succ">支付成功</h2>
          <div class="info">
            <ul>
              <li><span class="name">保险产品</span><span class="res">{{orderData.name}}</span></li>
              <li><span class="name">保单号</span><span class="res">{{orderData.inusrenum1}}</span></li>
              <li><span class="name">投保单号</span><span class="res">{{orderData.inusrenum2}}</span></li>
              <li><span class="name">下单时间</span><span class="res">{{orderData.time}}</span></li>
              <li><span class="name">订单号</span><span class="res">{{orderData.ordernum}}</span></li>
            </ul>
          </div>
          <div class="stepwrap">
            <v-step :opts="step"></v-step>
          </div>
        </div>
      </div>
    </div>
    <div class="footer" ref="sfFooter">
        <a href="javascripr:;" class="btn">完成</a>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VStep from '../../components/common/steps/step.vue'
  //    better scroller
  import BScroll from 'better-scroll';
  const RES_OK = 0;  //请求成功
  export default {
    name: '',
    components: {
      VHeader,
      VStep
    },
    data () {
      return {
        headOpt: {
          name: "支付结果",
          backBtn: true
        },
        orderData:'',  //订单信息
        step:''   //进度数据
      }
    },
    created(){
      this.ordernum = this.$route.query.ordernum || '201708221252128800';
      this.$http({
            port : 'getinsurancepolicy',
            data:{ordernum: this.ordernum},
            openLoader:true
        }).then((res)=>{
            if(res.code === RES_OK){
                this.orderData = res.data[0];
                this.step = {
                  current :this.orderData.status,
                  list : [
                    {
                      name : "购买支付成功",
                      desc : this.orderData.time
                    },
                    {
                      name : "保险公司份额确认",
                      desc : "预计时间：需跟产品沟通"
                    },
                    {
                      name : "开始保障",
                      desc : "预计时间：需跟产品沟通"
                    }
                  ]
                }
                this.$nextTick(() => {
                    setTimeout(()=>{
                        this.indexScroll();
                    },30)
                })
            }
        })
    },
    methods:{
      indexScroll() {
        let pageH=this.$el.offsetHeight;
        let headerH=this.$refs.sfHeader.$el.offsetHeight;
        let footerH=this.$refs.sfFooter.offsetHeight;
        this.$refs.comBody.style.height = pageH - (headerH + footerH) +'px';
        if(!this.comBodyScrollSf){
          this.comBodyScrollSf = new BScroll(this.$refs.comBody, {
            click: true,
            deceleration: 0.001,
          })
        }else{
          this.comBodyScrollSf.refresh()
        }
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  
  .page-view {
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding-top: .9rem;
    line-height: 1.1;
    
    .paysucc {
      height: 100%;
      overflow: hidden;
      background: #f3f2f1;
      .detail {
        background: #fff;
        .paytit{
          height: 2.2rem;
          line-height: 2.2rem;
          text-align: center;
          font-size: 0.44rem;
          padding-left: 0.6rem;
          &.succ{
            color: #00ac43;
            background: url(./img/paysucc_icon.png) no-repeat 2.5rem center;
            background-size: 0.52rem auto;
          }
          &.fail{
            color: #ff484a;
          }
        }
        .info{
          border-top: 1px solid #f3f3f3;
          border-bottom: 1px solid #f3f3f3;
          ul{
            padding: 0.2rem 0.42rem 0.54rem 0.42rem;
            li{
              @include clearfix;
              height: 0.54rem;
              line-height: 0.54rem;
              .name{float: left; font-size: 0.26rem; color: #333;}
              .res{float: right;font-size: 0.26rem;color: #888;}
            }
          }
        }
        .stepwrap{
          padding: 0.5rem 0 0.5rem 1.8rem;
        }
        .done{
          height: 0.9rem;
          line-height: 0.9rem;
          text-align: center;
          background: #ff484e;
          color:#fff;
          font-size: 0.3rem;
        }
      }
    }
    .footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        line-height: 1.65rem;
        z-index: 999;
        background: #ef4352;
        line-height: 1rem;
        text-align: center;
        a{
           color: #fff;
           display: block;
        }
    }
  }
</style>
