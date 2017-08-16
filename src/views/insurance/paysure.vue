<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <div ref="comBody" class="paysure">
      <div>
        <div class="detail">
          <div class="bxtype">
            <div class="names">
              <span>学生平安保险</span>
            </div>
            <div class="types">
              <span>支付金额</span>
              <span>10元</span>
            </div>
            <div class="types">
              <span>手续费</span>
              <span>100元</span>
            </div>
            <div class="tips">交易日15:00后或非交易日，购买将在下一交易日开始保障</div>
          </div>
          <div class="bankselect"></div>
          <div class="payBtn"><a href="javascript:;">立即支付</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VTabwrap from './tabview/tabwrap.vue'
  //    better scroller
  import BScroll from 'better-scroll';
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
        comBodyScroll: ''
      }
    },
    methods:{
      indexScroll() {
        this.comBodyScroll = new BScroll(this.$refs.comBody, {
          click: true,
          deceleration: 0.001,
        });
      }
    },
    mounted(){
      //$nextTick这个方法保证了dom结构加载完成之后再执行
      this.$nextTick(() => {
        //结构复杂的地方再加个延迟
        setTimeout(() => {
          this.indexScroll();
        }, 10)
      })
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
          .names{
            height: 0.7rem;
            line-height: 0.7rem;
            font-size:0.3rem;
            border-bottom: 1px solid #eee;
            span{
              padding-left: 0.2rem;
              color: #333;
              font-weight: 700;
            }
          }
          .types{
            height: 0.9rem;
            line-height: 0.9rem;
            font-size:0.3rem;
            color: #999;
            margin-left: 0.2rem;
            border-bottom: 1px solid #eee;
            @include clearfix;
            span{
              &:first-child{
                float: left;
              }
            }
            span{
              &:last-child{
                float: right;
                padding-right: 0.2rem;
                color: #ff484a;
                font-weight: 700;
              }
            }
          }
          .tips{
            height: 0.9rem;
            line-height: 0.9rem;
            padding-left:0.2rem;
            font-size: 0.28rem;
            color: #999;
          }
        }
        .payBtn{
          a{
            display: block;
            font-size: 0.3rem;
            height: 0.9rem;
            line-height: 0.9rem;
            text-align: center;
            margin-left: 0.2rem;
            margin-right: 0.2rem;
            background: #f14d4c;
            color: #fff;
            border-radius: 4px;
            margin-top: 0.4rem;
          }
        }
      }
    }
  }
</style>
