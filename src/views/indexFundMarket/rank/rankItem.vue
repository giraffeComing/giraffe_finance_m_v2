<template>
  <div class="rank-list">
    <div class="list-head">
      <div class="row">
        <div class="bar">基金名称</div>
        <div class="bar" v-if="listData.type!=='2'">单位净值</div>
        <div class="bar" v-if="listData.type!=='2'" @click="showTypeList($event)">日涨跌 <i class="icon"></i></div>
        <div class="bar" v-if="listData.type=='2'">万份收益</div>
        <div class="bar" v-if="listData.type=='2'" @click="showTypeList($event)">年化收益率 <i class="icon"></i></div>
      </div>
    </div>
    <div class="list-body">
      <div class="row" v-for="(item,index) in listData.data" @click="toFundInfo(item)">
        <div class="bar"><span class="name">{{item.fund_name}}</span><span class="code">{{item.fund_code}}</span></div>
        
        <div class="bar" v-if="listData.type!=='2'">{{item.netvalue}}</div>
        <div class="bar" v-if="listData.type!=='2'" :class="getColor(item.day_incratio)" >{{getVal(item.day_incratio)}}%</div>
        
        <div class="bar" v-if="listData.type=='2'">{{item.hf_incomeratio}}</div>
        <div class="bar" v-if="listData.type=='2'" :class="getColor(item.year_incratio)" >{{getVal(item.year_incratio)}}%</div>
      </div>
  
      <!--暂无持仓-->
      <v-empty v-if="listData.data.length<1" :opts="emptyData"></v-empty>
    </div>
  </div>
</template>

<script>
  import VEmpty from '../../../components/common/empty/empty.vue'
  import showDropMenu from '../../../components/common/dropMenu'
  export default {
    name: '',
    components: {
      VEmpty
    },
    props: {
      listData: ''
    },
    methods:{
      toFundInfo(item) {
          const url = `//trade.xincai.com/wap/fundDetail?fundcode=${item.fund_code}`;
          window.location.href = url.toString();
      },
      getColor(num){
          return num*1 > 0 ? 'red': num*1 < 0 ? 'green' : '';
      },
      getVal(num){
          return num > 0 ? `+${(num*1000000/10000).toFixed(2)}`: (num*1000000/10000).toFixed(2);
      },
      showTypeList(e){
//          console.log(e)
//          console.log(e.target)
//          console.log(e.target.offsetTop)
//          console.log(e.y)
//        showDropMenu(e);
      }
    },
    data () {
      return {
        emptyData: {
          icon:'type1',
          desc : '暂无记录'
        },
        curItem:0,
      }
    },
    created(){
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .rank-list {
    .row {
      @include clearfix;
      
      .bar {
        width: 20%;
        float: left;
        text-align: center;
        color: #c0c0c0;
        font-size: .24rem;
        
        &:first-child {
          width: 50%;
          text-align: left;
          padding: 0 .2rem;
        }
        
        &:last-child {
          width: 30%;
          padding-right: .2rem;
          text-align: right;
          
          .icon{
            display: inline-block;
            width: .3rem;
            height: .16rem;
            vertical-align: top;
            margin-top: .16rem;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url("../arror.png");
            -webkit-transition: transform .3s ease;
            -moz-transition: transform .3s ease;
            -ms-transition: transform .3s ease;
            -o-transition: transform .3s ease;
            transition: transform .3s ease;
          }
          &.active{
            .icon{
              -webkit-transform: rotate(180deg);
              -moz-transform: rotate(180deg);
              -ms-transform: rotate(180deg);
              -o-transform: rotate(180deg);
              transform: rotate(180deg);
            }
          }
        }
        
      }
    }
    .list-head {
      height: .68rem;
      padding-top: .2rem;
      
      .row {
        background-color: #fff;
        
        .bar {
          line-height: .48rem;
        }
        
      }
    }
    .list-body {
      
      .row {
        height: 1.12rem;
        padding: .2rem 0;
        line-height: .36rem;
        background-color: #f6f6f6;
        
        &:nth-child(2n) {
          background-color: #fff;
        }
        
        .bar {
          color: #666;
          &.red {
            color: #ef4353;
          }
          &.green {
            color: green;
          }
          
          .name {
            display: block;
            font-size: .3rem;
            @include text-overflow;
          }
          .code {
            display: block;
            color: #c0c0c0;
          }
        }
      }
    }
  }
  
</style>
