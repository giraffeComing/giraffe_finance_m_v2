<template>
  <div class="fundList" ref="comBody">
    <div>
      <div class="rank-list">
        <div class="list-head">
          <div class="row">
            <div class="bar">基金名称</div>
            <div class="bar">基金代码</div>
          </div>
        </div>
        <div class="list-body" v-if="showList">
          <div class="row" v-for="(item,index) in optsData" @click="toFundInfo(item)">
            <div class="bar">{{item.fundname}}</div>
            <div class="bar">{{item.fundcode}}</div>
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
        }, 100)
      })
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  
  .fundList{
    height: 100%;
    background: #fff;
    overflow: hidden;
    /*-webkit-overflow-scrolling: touch;*/
  }

  .fadeIn-enter-active, .fadeIn-leave-active {
    transition: opacity .3s,transform .2s;
  }
  .fadeIn-enter, .fadeIn-leave-to {
    opacity: 0;
    transform: translateY(.2rem);
  }
  .rank-list {
    .row {
      @include clearfix;
    
      .bar {
        float: left;
        &:first-child {
          width: 60%;
          padding: 0 .2rem;
          @include text-overflow;
        }
        &:last-child {
          width: 40%;
          padding-right: .2rem;
          text-align: right;
        }
      }
    }
    .list-head {
      height: .68rem;
      .row {
        .bar{
          font-size: .24rem;
          color: #c0c0c0;
          line-height: .68rem;
        }
      }
    }
    .list-body {
      .row {
        border-top: 1px solid #ebf0f4;
        .bar{
          font-size: .3rem;
          color: #666;
          line-height: .8rem;
        }
      }
    }
  }
</style>
