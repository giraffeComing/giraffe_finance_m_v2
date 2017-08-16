<template>
  <div class="refund">
    <div class="item" v-for="(item,index) in borrowData.refund">
      <!--<router-link :to="{ name: 'VFundDetail', params:{ fundcode : item.fundcode}}">-->
        <div class="title">{{item.title}}</div>
        <div class="lab"><i class="icon" :class="setStatus(item.type).icon"></i>{{setStatus(item.type).txt}}</div>
        <div class="info">
          <div class="cell">
            <div class="num">{{item.time}}</div>
            <div class="name">应还款日</div>
          </div>
          <div class="cell">
            <div class="num red">{{item.price}}</div>
            <div class="name">应还金额</div>
          </div>
        </div>
      <!--</router-link>-->
    </div>
    <!--暂无持仓-->
    <v-empty v-if="borrowData.refund.length<1" :opts="emptyData"></v-empty>
  </div>
</template>

<script>
  import VEmpty from '../../../components/common/empty/empty.vue'
  export default {
    name: '',
    components: {
      VEmpty
    },
    props: {
      borrowData: ""
    },
    methods:{
      setStatus(type){
          switch (type){
            case '1':
                return{
                  icon : 'type1',
                  txt : '未开始'
                };
            break;
            case '2':
              return {
                icon : 'type2',
                txt : '本期待还款'
              };
            break;
            case '3':
              return {
                icon : 'type3',
                txt : '已逾期，待还款'
              };
            break;
          }
      }
    },
    data () {
      return {
        labStatus : '',
        emptyData : {
          icon:'type1',
          desc : '暂无记录'
        }
      }
    },
    created(){
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .refund{
    .item{
      position: relative;
      display: block;
      padding:0 .24rem .3rem;
      border-bottom: 1px solid #f3f3f3;
      .lab{
        position: absolute;
        right: .24rem;
        top: .2rem;
        line-height: .5rem;
        font-size: .26rem;
        color: #333;
        
        .icon{
          display: inline-block;
          vertical-align: top;
          height: .5rem;
          width: .5rem;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          background-size: cover;
          margin-right: .04rem;
          &.type1{
            background-image: url("../icon-timer1.png");
          }
          &.type2{
            background-image: url("../icon-timer2.png");
          }
          &.type3{
            background-image: url("../icon-timer3.png");
          }
        }
      }
      .title{
        display: block;
        line-height: .9rem;
        color: #333;
        font-size: .32rem;
      }
      .info{
        background-color: #f8f8f8;
        border-radius: .16rem;
        height: 1.18rem;
        @include clearfix;
        
        .cell{
          width: 50%;
          float: left;
          line-height: .4rem;
          padding:.19rem 0;
          text-align: center;
          .name{
            font-size: .24rem;
            color: #a0a0a0;
          }
          .num{
            font-size: .28rem;
            color:#808080;
            &.red{
              color:#f0606c;
            }
          }
        }
      }
    }
  }
</style>
