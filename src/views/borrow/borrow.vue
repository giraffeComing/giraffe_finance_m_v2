<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <div ref="comBody" class="borrow">
      <div>
        <div class="details">
          <div class="assets">
            <div class="title">本期应还（元）</div>
            <div class="num">992,282.23</div>
          </div>
          <div class="info">
            <div class="cell">
              <span class="name">贷款总额 (元)</span>
              <span class="num">1,1234,456.00</span>
            </div>
            <div class="cell">
              <span class="name">待还总额（元）</span>
              <span class="num">1,1234,456.00</span>
            </div>
          </div>
          
          <div class="other">
            <div class="item">借款总额：15,000.00</div>
            <div class="item">已还总额：5,000.00</div>
            <div class="item">起息日：2017-08-10</div>
            <div class="item">到期日：2020-08-10</div>
            <div class="item">申请时间：2017-08-10</div>
            <div class="item">借款年利率：12.00%</div>
            <div class="item">借款期数：24期</div>
            <div class="item">剩余期数：15期</div>
            <div class="item">还款方式：等额本息/等额本金/期末一次性偿还本息</div>
          </div>
        </div>
        
        <div class="wrap">
          <v-tabwrap :opts="borrowData"></v-tabwrap>
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
          name: "新浪有还卡贷",
          backBtn: true
        },
        comBodyScroll: '',
        borrowData : {
          refund : '',
          comp : ''
        }
        
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
      },
      formatMoney (number, places, symbol, thousand, decimal) {
        number = number || 0;
        places = !isNaN(places = Math.abs(places)) ? places : 2;
        symbol = symbol !== undefined ? symbol : "";
        thousand = thousand || ",";
        decimal = decimal || ".";
        let negative = number < 0 ? "-" : "",
          i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
          j = (j = i.length) > 3 ? j % 3 : 0;
        return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
      }
    },
    created(){
      this.borrowData.refund = [
        {
          title : '有还卡贷（第5期）',
          time : '2017-08-10',
          price : '10.232.20',
          type:"1"
        },
        {
          title : '有还卡贷（第6期）',
          time : '2017-08-10',
          price : '10.232.20',
          type:"2"
        },
        {
          title : '有还卡贷（第7期）',
          time : '2017-08-10',
          price : '10.232.20',
          type:"3"
        }
      ],
      this.borrowData.comp = [
        {
          title : '有还卡贷（第1期）',
          time : '2017-08-10',
          price : '10.232.20',
        },
        {
          title : '有还卡贷（第2期）',
          time : '2017-08-10',
          price : '10.232.20',
        },
        {
          title : '有还卡贷（第3期）',
          time : '2017-08-10',
          price : '10.232.20',
        }
      ]
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
    line-height: 1.1;
    
    .borrow {
      height: 100%;
      overflow: hidden;
      background: #fff;
      margin-top: .9rem;
      -webkit-overflow-scrolling: touch;
      
      .details{
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
            width: 50%;
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
        
        .other{
          background-color: #f9f9f9;
          border-bottom: 1px solid #e0e0e0;
          padding:.2rem 0;
          @include clearfix;
          
          .item{
            float: left;
            width: 60%;
            line-height: .42rem;
            color: #808080;
            font-size: .22rem;
            text-align: left;
            padding-left: .3rem;
            
            &:nth-child(2n){
              width: 40%;
            }
            &:last-child{
              width: 100%;
            }
          }
        }
      }
      .wrap{
        border-top: .14rem solid #f5f5f5;
      }
    }
  }
</style>
