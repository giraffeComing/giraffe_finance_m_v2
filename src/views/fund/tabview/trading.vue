<template>
  <div>
    <div class="record">
      <div class="item" v-for="(item , index) in fundData.trading">
        <router-link :to="{ name: 'VFunHistory'}">
          <div class="title">
            <span class="bar red">申</span>
            <span class="name">{{item.fundname}}（{{item.fundcode}}）</span>
            <span class="lab">确认中</span>
          </div>
          <div class="info">
            <span class="name">申购金额</span>
            <span class="price red">{{item.value}}元</span>
            <span class="time">{{item.time}}</span>
          </div>
        </router-link>
      </div>
      <!--暂无记录-->
      <v-empty v-if="fundData.trading.length<1" :opts="emptyData"></v-empty>
    </div>
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
      fundData: ""
    },
    methods:{
    
    },
    data () {
      return {
        emptyData : {
          icon:'type1',
          desc:'暂无纪录',
        }
      }
    },
    created(){
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .record{
    .item {
      display: block;
      padding: 0 .6rem .1rem .24rem;
      border-bottom: 1px solid #f3f3f3;
      
      .title {
        position: relative;
        display: block;
        line-height: .9rem;
        color: #333;
        font-size: .32rem;
        @include clearfix;
  
        .bar{
          display: inline-block;
          vertical-align: top;
          padding:0 .05rem;
          height: .32rem;
          border-radius: 3px;
          text-align: center;
          line-height: .32rem;
          color: #fff;
          font-size: .22rem;
          margin-top: .29rem;
    
          &.red{
            background-color: #ff484a;
          }
          &.orange{
            background-color: #ff8448;
          }
        }
        .lab{
          float: right;
        }
      }
      .info{
        line-height: .5rem;
        padding-left: .9rem;
        font-size: .24rem;
        color: #a0a0a0;
        @include clearfix;
        .price{
          margin-left: .28rem;
          font-size: .32rem;
          color: #333;
          &.red{
            color: #ff484a;
            font-weight: bold;
          }
        }
        .time{
          float: right;
        }
      }
    }
  }
</style>
