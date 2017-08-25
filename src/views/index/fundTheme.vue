<template>
  <div class="fund">
    <div class="title">{{opts.title}}</div>
    <div class="topic"><div class="bar"><span>{{opts.desc}}</span></div></div>
    <div class="row">
      <div class="cell" v-for="item in opts.contents" @click="toFundDetail(item)">
        <div class="item">
          <h2>{{item.fund_name}}</h2>
          <div class="num">{{formatVal(item.profit)}}%</div>
          <div class="txt">{{item.profit_name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fund',
    props: {
      opts: ""
    },
    data () {
      return {}
    },
    methods: {
      toFundDetail(item){
          const url = `//trade.xincai.com/wap/fundDetail?fundcode=${item.fund_code}`;
          window.location.href = url.toString();
      },
      formatVal(num){
          return (num * 1000000 / 10000).toFixed(2)
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .fund{
    background-color: #fff;
    margin-top: .14rem;
    .title{
      padding: .4rem 0 .2rem;
      text-align: center;
      color: #333;
      font-size: .32rem;
      font-weight: 700;
    }
    .topic{
      position: relative;
      padding:0 .82rem .2rem;
      color: #a0a0a0;
      font-size: .24rem;
      text-align: center;
      .bar{
        position: relative;
        display: inline-block;
        max-width: 90%;
        span{
          display: inline-block;
          max-width: 100%;
          @include text-overflow;
        }
        &:after,
        &:before{
          position: absolute;
          content: "";
          top:50%;
          height: 1px;
          background-color: #ccc;
          width: .7rem;
        }
        &:before{
          left: -.82rem;
        }
        &:after{
          right: -.82rem;
        }
      }
    }
    .row{
      padding: .2rem .12rem .4rem;
      @include clearfix;
      .cell{
        float: left;
        width:50%;
        padding:0 .12rem;
        .item{
          position: relative;
          border:1px solid #e0e0e0;
          padding:.3rem .1rem;
          text-align: center;
          &:before,
          &:after{
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            height: 1px;
            background-color: #e0e0e0;
          }
          &:before{
            bottom: 1px;
          }
          &:after{
            bottom: 3px;
          }
          h2{
            font-size: .32rem;
            color: #333;
            @include text-overflow;
          }
          .num{
            font-size: .38rem;
            color: #ef4353;
            margin-top: .34rem;
          }
          .txt{
            font-size: .24rem;
            color: #808080;
            margin-top: .14rem;
          }
        }
      }
    }
  }
</style>
