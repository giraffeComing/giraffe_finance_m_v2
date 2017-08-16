<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <div ref="comBody" class="fund-hold">
      <div>
        <div class="details">
          <div class="assets">
            <div class="title">总资产 (元)</div>
            <div class="num">992,282.23</div>
          </div>
          <div class="info">
            <div class="cell">
              <span class="name">昨日收益 (元)</span>
              <span class="num">1,1234,456.00</span>
            </div>
            <div class="cell">
              <span class="name">持仓收益 (元)</span>
              <span class="num">1,1234,456.00</span>
            </div>
            <div class="cell">
              <span class="name">持仓收益率</span>
              <span class="num">11％</span>
            </div>
          </div>
        </div>
        
        <div class="wrap">
          <v-market :marketOption="marketOption"></v-market>
        </div>
      </div>
    </div>
    <div class="foot-group">
      <div class="row">
        <div class="btn btn-white"><a href="#">购买</a></div>
        <div class="btn btn-red"><a href="#">赎回</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VMarket from '../../components/plug/market/Market.vue'
  //    better scroller
  import BScroll from 'better-scroll';
  export default {
    name: '',
    components: {
      VHeader,
      VMarket
    },
    data () {
      return {
        headOpt: {
          name: "",
          extra:"",
          backBtn: true
        },
        comBodyScroll: '',
        marketOption:{
          symbol:""
        }
      }
    },
    computed:{
    
    },
    created(){
      this.fetchData()
    },
    mounted(){
      //$nextTick这个方法保证了dom结构加载完成之后再执行
      this.$nextTick(() => {
        //结构复杂的地方再加个延迟
        setTimeout(() => {
          this.indexScroll();
        }, 10)
      })
    },
    methods: {
      indexScroll() {
        this.comBodyScroll = new BScroll(this.$refs.comBody, {
          click: true,
          deceleration: 0.001,
        });
      },
      fetchData(){
        this.marketOption.symbol = this.$route.params.fundcode;
        this.headOpt.name = '基金名称';
        this.headOpt.extra = '(' +this.$route.params.fundcode + ')';
    
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
    padding-top: .95rem;
    padding-bottom: 1.1rem;
    line-height: 1.1;
    
    .fund-hold {
      height: 100%;
      overflow: hidden;
      background: #fff;
      
      .details{
        height: 3.2rem;
        text-align: center;
        
        .assets{
          padding-top: .36rem;
          .title{
            font-size: .28rem;
            color: #333;
          }
          .num{
            font-size: .6rem;
            color: #ef4352;
            font-weight: 700;
            margin-top: .2rem;
          }
        }
        .info{
          border-top: 1px solid #f3f3f3;
          height: 1.22rem;
          margin-top: .4rem;
          @include clearfix;
          
          .cell{
            float: left;
            width: 33.3333%;
            padding-top: .2rem;
            line-height: .4rem;
            color: #333;
            
            .name{
              display: block;
              font-size: .24rem;
            }
            .num{
              display: block;
              font-size: .28rem;
              font-weight: bold;
            }
          }
        }
      }
      
      .wrap{
        border-top: .14rem solid #f5f5f5;
        
      }
    }
    
    .foot-group{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 999;
      .row{
        height: .98rem;
        background-color: #fff;
        box-shadow: 0 -.05rem .12rem rgba(8,1,3,.2);
        @include clearfix;
        
        .btn{
          float: left;
          width: 50%;
          height: .98rem;
          line-height: .98rem;
          text-align: center;
          font-size: .32rem;
          
          &.btn-white{
            background-color: #fff;
            color: #ef4352;
          }
          &.btn-red{
            background-color: #ef4352;
            color: #fff;
          }
        }
      }
    }
  }
</style>
