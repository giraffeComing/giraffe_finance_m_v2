<template>
  <div class="hold">
    <div class="item" v-for="(item,index) in fundData.hold">
      <router-link :to="{ name: 'VFundDetail', params:{ fundcode : item.fundcode}}">
        <div class="title">{{item.fundname}}（{{item.fundcode}}）</div>
        <div class="info">
          <div class="cell">
            <div class="num">{{item.value}}</div>
            <div class="name">市值</div>
          </div>
          <div class="cell">
            <div class="num">{{item.earn}}</div>
            <div class="name">昨日收益</div>
          </div>
          <div class="cell">
            <div class="num">{{item.holdearn}}</div>
            <div class="name">持仓收益</div>
          </div>
        </div>
      </router-link>
    </div>
    <!--暂无持仓-->
    <v-empty v-if="fundData.hold.length<1" :opts="emptyData" @eventBtn="emptyBtn"></v-empty>
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
      emptyBtn (){
        console.log('按钮操作')
      }
    },
    data () {
      return {
        emptyData : {
          icon:'type2',
          desc : '当前持仓为空，快买只基金涨涨财气~',
          btn : '前往购买'
        }
      }
    },
    created(){
    
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .hold{
    .item{
      display: block;
      padding:0 .24rem .3rem;
      border-bottom: 1px solid #f3f3f3;
      
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
          width: 33.333%;
          float: left;
          line-height: .4rem;
          padding:.19rem 0;
          text-align: center;
          &:first-child{
            .num{
              color:#ef4352;
            }
          }
          .name{
            font-size: .24rem;
            color: #a0a0a0;
          }
          .num{
            font-size: .28rem;
            color:#808080;
          }
        }
      }
    }
  }
</style>
