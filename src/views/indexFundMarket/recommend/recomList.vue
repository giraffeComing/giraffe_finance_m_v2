<template>
  <div class="recommend" ref="comBody">
    <div>
      <div class="title">热门推荐</div>
      <div class="list">
        <div class="list-head">
          <div class="row">
            <div class="bar">基金名称</div>
            <div class="bar">基金类型</div>
            <div class="bar">单位净值/万份收益</div>
          </div>
        </div>
        <div class="list-body" v-if="showList">
          <div class="row" v-for="(item,index) in optsData" @click="toFundInfo(item)">
            <div class="bar">
              <span class="name">{{item.fund_name}}</span>
              <span class="code">{{item.fund_code}}</span>
            </div>
            <div class="bar">{{item.fundtype_str}}</div>
            <div class="bar">{{getFundVal(item)}}</div>
          </div>
    
          <!--暂无持仓-->
          <v-empty v-if="optsData.length<1" :opts="emptyData"></v-empty>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import VEmpty from '../../../components/common/empty/empty.vue'
  import BScroll from 'better-scroll';
  export default {
    name: '',
    components: {
      VEmpty
    },
    props : {
      optsData:""
    },
    methods:{
      toFundInfo(item) {
        const url = `//trade.xincai.com/wap/fundDetail?fundcode=${item.fundcode}`;
        window.location.href = url.toString();
      },
      fundListScroll() {
        this.listScroll = new BScroll(this.$refs.comBody,{
          click: true,
          deceleration: 0.001,
        });
      },
      getFundVal(item){
          if(item.fund_type == 2){
              return item.hf_incomeratio;
          }else{
              return item.netvalue
          }
      }
    },
    data () {
      return {
        showList:false,
        listScroll:'',
        emptyData: {
          icon:'type1',
          desc : '暂无记录'
        }
      }
    },
    created(){
      this.showList = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.fundListScroll();
        }, 300)
      })
    }
  }
</script>


<style scoped lang="scss" rel="stylesheet/scss">
  .recommend{
    height: 100%;
    background: #fff;
    overflow: hidden;
    .title{
      font-size: .26rem;
      color: #333;
      line-height: .6rem;
      padding: 0 .24rem;
    }
    .list {
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
  }

</style>
