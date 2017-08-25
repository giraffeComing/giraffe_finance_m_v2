<template>
    <div>
      <div class="bg-fff" v-for="(item,index) in listData">
        <div class="jj">
          <div class="jj-title">{{item.type_name}}-<span>{{item.risk_name}}</span></div>
        </div>
        <ul class="jj-ul">
          <li class="jj-li" v-for="(bar,key) in item.funds" v-if="item.rank == 3 ? key == 0 : key < 3" @click="clickLi(bar)">
            <div class="jj-li-left">
              <p class="jj-num">{{getEarn(bar.profit)}}%</p>
              <p>{{bar.profit_name}}</p>
            </div>
            <div class="jj-li-right">
              <p class="jj-title">{{bar.fund_name}}</p>
              <p class="jj-des">{{bar.describtion}}</p>
            </div>
          </li>
        </ul>
        <div class="z-more" @click="lookMore">查看更多</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: '',
        props:{
            listData:''
        },
        data () {
            return {
            
            }
        },
        methods:{
            lookMore () {
                this.$router.push({
                    path:'/indexfundmarket',
                })
            },
            clickLi (item) {
                var url = `//trade.xincai.com/wap/fundDetail?fundcode=${item.fund_code}`;
                window.location.href = url.toString();
            },
            getEarn(num){
                return (num * 1000000/10000).toFixed(2);
            }
        },
        computed:{
        
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  
  .jj{
    padding: 0 0.2rem;
    height: .66rem;
    line-height: .66rem;
    margin-top: .3rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    
    .jj-title{
      font-size: .28rem;
      color: #333;
      span{
        font-size: .24rem;
        color: #f8b551;
      }
    }
    
  }
  .jj-ul{
    margin-top: .4rem;
    .jj-li{
      overflow: hidden;
      padding: 0.4rem 0.8rem;
      font-size: .26rem;
      color: #666;
      border-bottom: 1px dashed #eee;
      .jj-li-left{
        float: left;
        border-right: 1px solid #eee;
        padding-right: .5rem;
        .jj-num{
          color: #f44e51;
          font-size: 0.6rem;
          height: 0.8rem;
        }
      }
      .jj-li-right{
        width: 3.2rem;
        .jj-title{
          color: #333;
          font-size: 0.4rem;
          height: 0.8rem;
          padding-top: .1rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          .tag{
            display: inline-block;
            font-size: .24rem;
            color: #ff8383;
            background: #ffe8e8;
            position: relative;
            top:-.05rem;
            margin-left: .05rem;
            padding: .05rem;
          }
        }
        .jj-des{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        padding-left: .5rem;
        float: right;
      }
    }
  }
  
  .bg-fff{
    background: #fff;
  }
  .z-more{
    height: .8rem;
    line-height: .8rem;
    margin-top: -1px;
    color: #ef4353;
    text-align: center;
    font-size: .28rem;
    background: url("./morebg.jpg") no-repeat;
    background-size: 100% 100%;
    border-top:1px solid #eee;
    border-bottom: 1px solid #eee;
  }
  
  .z-more-bottom{
    padding-bottom: 1.4rem;
  }
  .jj-tags{
    display: flex;
    justify-content: space-between;
    padding: 0 .2rem;
    margin-top: .3rem;
    div{
      width: 2.3rem;
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.28rem;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      &.tag-bg01{
        background: #f8b551;
      }
      &.tag-bg02{
        background: #d2c19b;
      }
      &.tag-bg03{
        background: #cbcbcb;
      }
    }
  }
</style>
