<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <div ref="comBody" class="fund-history">
      <div>
        <div class="assets">
          <div class="type">股票型</div>
          <div class="title">嘉实前沿科技（004450）</div>
          <div class="num">992,282.23</div>
          <div class="status">份额待确认</div>
        </div>
        <ul class="info">
          <li v-for="item in details">
            <span class="name">{{item.name}}</span>
            <span class="val">{{item.val}}</span>
          </li>
        </ul>
        <div class="step-group">
          <v-step :opts="steps"></v-step>
        </div>
        <div class="details">
          <div class="row">
            <div class="item">
              <span class="name">确认时间</span>
              <span class="txt">2017-08-09</span>
            </div>
            <div class="item">
              <span class="name">确认金额</span>
              <span class="txt">1,000,000,00元</span>
            </div>
            <div class="item">
              <span class="name">交易费用</span>
              <span class="txt">1.25元</span>
            </div>
            <div class="item">
              <span class="name">确认份额</span>
              <span class="txt">1,000,000,00份</span>
            </div>
            <div class="item">
              <span class="name">确认净值</span>
              <span class="txt">1.00元</span>
            </div>
          </div>
        </div>
        <div class="btn-undo">撤单</div>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VStep from '../../components/common/steps/step.vue'
  //    better scroller
  import BScroll from 'better-scroll';
  export default {
    name: '',
    components: {
      VHeader,
      VStep
    },
    data () {
      return {
        headOpt: {
          name: "交易状态",
          backBtn: true
        },
        comBodyScroll: '',
        details : '',
        steps: ''
      }
    },
    computed:{
    },
    methods:{
      indexScroll() {
        this.comBodyScroll = new BScroll(this.$refs.comBody, {
          click: true,
          deceleration: 0.001,
        });
      }
    },
    created(){
      this.details = [
        {
          name : "基金简称",
          val  : "中欧养老混合"
        },
        {
          name : "基金代码",
          val  : "001955"
        },
        {
          name : "业务类型",
          val  : "申购"
        },
        {
          name : "申请金额",
          val  : "2050.00元"
        },
        {
          name : "关联账户",
          val  : "中信银行(0100)"
        },
        {
          name : "收费模式",
          val  : "前收费"
        }
      ],
      this.steps = {
          current : 0,
          list : [
            {
              name : "已委托",
              desc : "2017-08-08 17：00"
            },
            {
              name : "已委托",
              desc : "预计时间：2017-08-08 17：00"
            },
            {
              name : "已委托",
              desc : "预计时间：2017-08-08 17：00"
            }
          ]
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
    padding-top: .9rem;
    line-height: 1.1;
    
    .fund-history {
      height: 100%;
      overflow: hidden;
      
      .assets{
        position: relative;
        text-align: center;
        padding: .4rem 0 .3rem;
        background-color: #fff;
        .title{
          font-size: .28rem;
          color: #333;
        }
        .num{
          font-size: .5rem;
          color: #333;
          font-weight: 700;
          margin-top: .2rem;
        }
        .status{
          line-height: .6rem;
          font-size: .28rem;
          color: #ff484a;
        }
        .type{
          position: absolute;
          right: .45rem;
          top:0;
          line-height: .4rem;
          color: #808080;
          font-size: .24rem;
        }
      }
      .info{
        border-bottom: 1px solid #f3f3f3;
        border-top: 1px solid #f3f3f3;
        padding:.16rem .7rem;
        background-color: #fff;
        li{
          line-height: .44rem;
          font-size: .26rem;
          @include clearfix;
          
          .name{
            color: #333;
          }
          .val{
            color: #808080;
            float: right;
          }
        }
        
      }
      .details{
        background-color: #fff;
        padding:0 .48rem .2rem;
        .row{
          background-color: #fff6f6;
          border-radius: .2rem;
          padding:.2rem .1rem;
          @include clearfix;
          
          .item{
            width: 40%;
            float: left;
            padding:0 .1rem;
            line-height: .48rem;
            font-size: .26rem;
            @include clearfix;
            
            &:nth-child(2n){
              width: 60%;
            }
            &:first-child{
              width: 100%;
            }
            .name{
              color: #333;
            }
            .txt{
              color: #808080;
            }
          }
        }
      }
      .step-group{
        background-color: #fff;
        padding:.2rem .2rem .2rem 1.1rem;
      }
      .btn-undo{
        margin-top: .4rem;
        line-height: .9rem;
        text-align: center;
        color: #ff484e;
        font-size: .28rem;
        background-color: #fff;
      }
    }
  }
</style>
