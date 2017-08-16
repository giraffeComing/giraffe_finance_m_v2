<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <v-container :types="3">
        <div class="detail">
          <router-link :to="{ path: detailOpt.url }">
            <img :src="detailOpt.src" alt="">
            <span class="phone">{{detailOpt.phone}}</span>
            <span class="more">个人信息 <i class="icons icon-right"></i></span>
        </router-link>
      </div>
      <div class="server">
        <div class="item" v-for="item in serverOpt">
          <router-link :to="{ path: item.url }">
            <i class="icons" :class="item.icon"></i>
            <span class="name">{{item.name}}</span>
          </router-link>
        </div>
      </div>
      <div class="business">
        <ul>
          <li v-for="(item,index) in businessOpt">
            <router-link :to="{ path: item.url }">
              <i class="icons icon-account" :class="item.icon"></i>
              <span class="name">{{item.name}}</span>
              <span class="price" v-if="item.price">{{getVal[index]}}</span>
              <div class="more"><span v-if="item.text">{{item.text}}</span> <i class="icons icon-right"></i></div>
            </router-link>
          </li>
        </ul>
      </div>
    </v-container>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VFooter from '../../components/layout/footer/footer.vue'
  import VContainer from '../../components/layout/container/container.vue'
  export default {
    name: '',
    components: {
      VHeader,
      VFooter,
      VContainer
    },
    computed:{
      getVal (){
          for(var key in this.businessOpt){
              if(!!this.businessOpt[key].price){
                var price = parseInt(this.businessOpt[key].price);
                
                this.priceList.push(this.formatMoney(price))
              }else{
                this.priceList.push("")
              }
          }
          return this.priceList;
      }
    },
    methods:{
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
      this.$nextTick(()=>{
          this.detailOpt = {
            url : '/account',
            src : '../../../static/pic.png',
            phone : '15801549869',
          },
          this.serverOpt = [
            {
              name:"银行卡",
              icon : "icon-bank",
              url:"/"
            },
            {
              name:"私房宝",
              icon : "icon-sfb",
              url:"/sfbao"
            }
          ],
          this.businessOpt = [
            {
              name:"总资产",
              icon:"icon-account",
              url:"/asset",
              price: '12543',
              text:"账户总览"
            },
            {
              name:"理财账户",
              icon:"icon-licai",
              url:"/mylicai",
              text:"灵活、安全"
            },
            {
              name:"基金",
              icon:"icon-fund",
              url:"/fund",
              price: '234',
            },
            {
              name:"私房宝",
              icon:"icon-bao",
              url:"/sfbao",
              price: '2',
            },
            {
              name:"保险账户",
              icon:"icon-baoxian",
              url:"/insurance",
            },
            {
              name:"借钱",
              icon:"icon-jie",
              url:"/borrow",
              text:"在线放款"
            }
          ]
      })
    },
    mounted(){
      this.$nextTick(()=> {
      
      })
    },
    data () {
      return {
        headOpt: {
          name: "我的"
        },
        priceList : [],
        detailOpt: '',
        serverOpt: '',
        businessOpt: ''
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  $bg_color: #f5f5f5;
  $color_white: #fff;
  $color_gray: #333;
  $color_black: #000;
  $color_red: #ff475e;
  $border_color: #eee;
  
  .page-view {
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background-color: $bg_color;
    
    .icons {
      display: inline-block;
      vertical-align: top;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    
    .detail {
      height: 1.62rem;
      background-color: $color_white;
      position: relative;
      padding: .4rem .2rem 0;
      margin-top: .01rem;
      font-size: .28rem;
      color: $color_black;
      @include clearfix;
      a{
        display: block;
        @include clearfix;
      }
      
      img {
        float: left;
        width: .82rem;
        height: .82rem;
      }
      .phone {
        float: left;
        line-height: .82rem;
        display: inline-block;
        vertical-align: top;
        margin-left: .1rem;
      }
      .more {
        position: absolute;
        right: .2rem;
        top: .6rem;
        line-height: .4rem;
        
        .icon-right {
          float: right;
          width: .14rem;
          height: .28rem;
          margin-top: .06rem;
          background-image: url('./img/right-black.png');
          margin-left: .15rem;
        }
      }
    }
    
    .server {
      height: 1.72rem;
      background-color: $color_white;
      padding:0 .6rem;
      margin-top: .14rem;
      @include clearfix;
      .item {
        float: left;
        width: 50%;
        text-align: center;
        padding-top: .26rem;
        a{
          display: block;
          @include clearfix;
        }
        .icons {
          width: .84rem;
          height: .84rem;
          &.icon-bank {
            background-image: url('./img/icon-bank.png');
          }
          &.icon-sfb {
            background-image: url('./img/icon-sfb.png');
          }
        }
        .name {
          display: block;
          margin-top: .1rem;
          font-size: .24rem;
          color: $color_gray;
        }
      }
    }
    
    .business {
      margin-top: .14rem;
      
      ul {
        background-color: $bg_color;
        li {
          position: relative;
          height: .9rem;
          background-color: $color_white;
          @include clearfix;
          a{
            position: relative;
            padding-left: .52rem;
            margin-left: .2rem;
            border-bottom: 1px solid $border_color;
            display: block;
            @include clearfix;
          }
          
          &:last-child{
            border-bottom: 0;
            margin-top: .14rem;
          }
          .icons {
            position: absolute;
            left: .08rem;
            top: .28rem;
            width: .32rem;
            height: .32rem;
            
            &.icon-account {
              background-image: url('./img/icon-account.png');
            }
            &.icon-licai {
              background-image: url('./img/icon-licai.png');
            }
            &.icon-baoxian {
              background-image: url('./img/icon-baoxian.png');
            }
            &.icon-bao {
              background-image: url('./img/icon-bao.png');
            }
            &.icon-fund {
              background-image: url('./img/icon-fund.png');
            }
            &.icon-jie {
              background-image: url('./img/icon-jie.png');
            }
          }
          .name {
            color: $color_gray;
            font-size: .28rem;
            line-height: .88rem;
            display: inline-block;
            min-width: 1.16rem;
          }
          .price {
            font-size: .28rem;
            color: $color_red;
          }
          .more {
            position: absolute;
            right: .2rem;
            top: .24rem;
            line-height: .4rem;
            font-size: .24rem;
            padding-right: .38rem;
            
            .icon-right {
              position: absolute;
              left: auto!important;
              right: 0;
              top: .06rem;
              width: .14rem;
              height: .28rem;
              background-image: url('./img/right-grey.png');
            }
          }
        }
      }
    }
  }
</style>
