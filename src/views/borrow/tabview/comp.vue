<template>
  <div class="comp">
    <div class="item" v-for="(item,index) in borrowData.comp">
      <!--<router-link :to="{ name: 'VFundDetail', params:{ fundcode : item.fundcode}}">-->
      <div class="title">{{item.title}}</div>
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
      <i class="end"></i>
      <!--</router-link>-->
    </div>
    <!--暂无持仓-->
    <v-empty v-if="borrowData.comp.length<1" :opts="emptyData"></v-empty>
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
    },
    data () {
      return {
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
  .comp{
    .item{
      position: relative;
      display: block;
      padding:0 .24rem .3rem;
      border-bottom: 1px solid #f3f3f3;
  
      .end{
        position: absolute;
        width: 1.1rem;
        height: 1.1rem;
        right: .3rem;
        top: .2rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-image: url("../icon-comp.png");
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
