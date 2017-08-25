<template>
  <div class="all-hua">
    <div class="wrap">
      <h2 class="title">{{opts.title}}</h2>
      <div class="flex-wrap">
        <div class="cell" v-for="item in opts.contents">
          <a :href="item.url">
            <div class="item">
              <img :src="item.image" alt="">
              <h3>{{item.title}}</h3>
              <p>{{item.desc}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hua',
    props: {
      opts: ""
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .all-hua{
    padding: .14rem 0 .14rem .14rem;
    .wrap{
      background: #fff;
      width: 100%;
      .title{
        padding: .4rem 0 .35rem;
        text-align: center;
        color: #333;
        font-size: .32rem;
        font-weight: 700;
      }
      .flex-wrap{
        padding-bottom: .4rem;
        padding-right: .1rem;
        @include clearfix;
        .cell{
          width: 50%;
          padding: 0 .1rem;
          float: left;
          
          &:last-child{
            .item{
              padding-left: 1.3rem;
              img{
                width: 1.05rem;
                height: 1.6rem;
                top: .1rem;
              }
            }
          }
          .item{
            height: 1.8rem;
            padding: .4rem 0 0 1.6rem;
            background-color: #fff;
            position: relative;
            box-shadow: 0 0 .12rem rgba(0,0,0,.15);
            
            img{
              width: 1.2rem;
              height: 1.2rem;
              position: absolute;
              top: .3rem;
              left: .2rem;
            }
            h3{
              font-size: .32rem;
              color: #ef4353;
              @include text-overflow;
            }
            p{
              margin-top: .2rem;
              font-size: .24rem;
              @include text-overflow;
            }
          }
        }
      }
    }
  }
</style>
