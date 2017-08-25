<template>
  <div class="all-zhuan">
    <h2 class="title">{{opts.title}}</h2>
    <ul class="zhuan">
      <li v-for="item in opts.contents">
        <a :href="item.url">
          <span class="tit">{{item.product_name}}</span>
          <p>{{item.description}}    <span v-if="item.time_limit">{{item.time_limit}}个月</span>    <span v-if="item.start_amount">{{item.start_amount}}元起投</span></p>
          <div class="earn">
            <h2>{{item.profit}}%</h2>
            <p>{{item.profit_name}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'zhuan',
    props: {
      opts: ""
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .all-zhuan{
    background: #fff;
    width: 100%;
    .title{
      padding: .4rem 0 .15rem;
      text-align: center;
      color: #333;
      font-size: .32rem;
      font-weight: 700;
    }
    .zhuan{
      li{
        position: relative;
        padding: .2rem 2.2rem .2rem .24rem;
        height: 1.3rem;
        line-height: 1.2;
        @include clearfix;
        .tit{
          display: block;
          font-size: .32rem;
          color: #333;
          @include text-overflow;
        }
        p{
          font-size: .24rem;
          color: #808080;
          margin-top: .24rem;
        }
        .earn{
          position: absolute;
          right: .2rem;
          top:.2rem;
          height: .9rem;
          line-height: 1.2;
          text-align: right;
          width: 2rem;
          border-left: 1px solid #eee;
          
          h2{
            display: block;
            font-size: .32rem;
            color: #ef4353;
          }
          p{
            font-size: .24rem;
            color: #808080;
            margin-top: .24rem;
          }
        }
      }
    }
  }
</style>
