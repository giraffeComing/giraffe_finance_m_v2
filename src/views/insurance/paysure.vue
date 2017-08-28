<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <div ref="comBody" class="paysure" v-if="sureInfo">
      <div>
        <div class="detail">
          <div class="bxtype">
            <div class="names">
              <span>{{sureInfo.productname}}</span>
            </div>
            <div class="types">
              <span>投保人</span>
              <span>{{sureInfo.username}}</span>
            </div>
            <div class="types">
              <span>被保险人</span>
              <span>{{sureInfo.username}}</span>
            </div>
            <div class="types">
              <span>生效时间</span>
              <span>{{sureInfo.effectivedate}}</span>
            </div>
            <div class="types">
              <span>保障期限</span>
              <span>{{sureInfo.timelimit}}</span>
            </div>
          </div>
          <div class="payway">
             <span class="zfb"></span>
             <p class="payMoney">
               <span class="name">支付金额</span>
               <span class="num">{{sureInfo.fee}}.00 元</span>
             </p>
           </div>
        </div>
      </div>
    </div>
    <div class="payBtn" v-if="sureInfo"><a href="javascript:;" @click="pay">确认支付</a></div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VTabwrap from './tabview/tabwrap.vue'
  //    better scroller
  import BScroll from 'better-scroll';
  const RES_OK = 0;  //请求成功
  export default {
    name: '',
    components: {
      VHeader,
      VTabwrap
    },
    data () {
      return {
        headOpt: {
          name: "支付确认",
          backBtn: true
        },
        comBodyScroll: '',
        sureInfo:{},
        ordernum: ''
      }
    },
    created(){
      this.ordernum = this.$route.query.ordernum || '201708221252128800';
      this.$http({
            port : 'getuserfillin',
            data:{ordernum: this.ordernum},
            openLoader:true
        }).then((res)=>{
            if(res.code === RES_OK){
                console.log(res)
                this.sureInfo = res.data;
                this.$nextTick(() => {
                    setTimeout(()=>{
                        this.indexScroll();
                    },30)
                })
            }else{
               this.sureInfo = res.data;
            }
        })
    },
    methods:{
      indexScroll() {
        if(!this.comBodyScroll){
          this.comBodyScroll = new BScroll(this.$refs.comBody, {
            click: true,
            deceleration: 0.001,
          })
        }else{
          this.comBodyScroll.refresh()
        }
      },
      pay() {
        this.$http({
            port : 'payInsurance',
            data:{ordernum: this.ordernum},
            openLoader:true
        }).then((res)=>{
            if(res.code === RES_OK){
                console.log(res)
                this.$nextTick(() => {
                    setTimeout(()=>{
                        this.indexScroll();
                    },300)
                })
            }
        })
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
    .paysure {
      height: 100%;
      overflow: hidden;
      background: #f5f5f5;
      .detail{
        .bxtype{
          background: #fff;
          margin: 0.2rem 0;
          padding-bottom: 0.2rem;
          .names{
            height: 0.7rem;
            line-height: 0.7rem;
            font-size:0.3rem;
            border-bottom: 1px solid #eee;
            margin-bottom: 0.2rem;
            span{
              padding-left: 0.2rem;
              color: #333;
              font-weight: 700;
            }
          }
          .types{
            height: 0.7rem;
            line-height: 0.7rem;
            font-size:0.3rem;
            margin-left: 0.6rem;
            @include clearfix;
            span{
              &:first-child{
                float: left;
                color: #333;
              }
            }
            span{
              &:last-child{
                float: right;
                padding-right: 0.6rem;
                color: #999;
              }
            }
          }
          
        }
        .payway{
          background: #fff;
          height: 1.4rem;
          line-height: 0.54rem;
          padding-left:0.5rem;
          font-size: 0.28rem;
          color: #999;
          @include clearfix;
          .zfb{
            float: left;
            width: 0.82rem;
            height: 1.4rem;
            background: url(./img/zfb_icon.png) no-repeat center center;
            background-size: 0.82rem auto;
          }
          .payMoney{
            float: right;
            padding-right: 0.5rem;
            margin-top: 0.16rem;
            .name{
              display: block;
              text-align: right;
              font-size: 0.28rem;
              color: #333;
            }
            .num{
              font-size: 0.36rem;
              color: #ff484a;
            }
          }
        }
        
      }
    }
    .payBtn{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
        a{
          display: block;
          font-size: 0.3rem;
          width: 100%;
          height: 0.9rem;
          line-height: 0.9rem;
          text-align: center;
          background: #f14d4c;
          color: #fff;
        }
      }
  }
</style>
