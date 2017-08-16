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
          </div>
        </div>
        
        <div class="wrap">
            <v-tabwrap :opts="fundData"></v-tabwrap>
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
          name: "基金",
          backBtn: true
        },
        fundList : [],
        comBodyScroll: '',
        fundData : {
          hold : '',
          trading: '',
          record : ''
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
        this.fundData.hold = [
          {
              fundname : '嘉实前沿科技',
              fundcode : '004450',
              value : '10.232.20',
              earn : '10.23',
              holdearn : '10.20'
          },
          {
              fundname : '平安大华行业',
              fundcode : '700001',
              value : '10.232.20',
              earn : '10.23',
              holdearn : '10.20'
          }
        ],
        this.fundData.trading = [
          {
            fundname : '嘉实前沿科技',
            fundcode : '004450',
            value : '10.232.20',
            time : '8月7日 14:00'
          },
          {
            fundname : '嘉实前沿科技',
            fundcode : '004450',
            value : '10.232.20',
            time : '8月6日 14:00'
          }
        ],
        this.fundData.record = [
          {
            fundname : '嘉实前沿科技',
            fundcode : '004450',
            value : '10.232.20',
            time : '8月7日 14:00'
          },
          {
            fundname : '嘉实前沿科技',
            fundcode : '004450',
            value : '10.232.20',
            time : '8月6日 14:00'
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
    padding-top: .9rem;
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
      }
      .wrap{
        border-top: .14rem solid #f5f5f5;
      }
    }
  }
</style>
