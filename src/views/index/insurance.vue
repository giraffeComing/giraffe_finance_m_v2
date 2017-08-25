<template>
  <div class="insurance">
    <div class="title">{{opts.title}}</div>
    <div class="row">
      <div class="cell">
        <div class="item" v-for="(item,index) in opts.contents" v-if="index == 0" @click="toLink(item.url)" :style="setImgUrl(item.image)">
          <div class="info">
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
      <div class="cell">
        <div class="item" v-for="(item,index) in opts.contents" v-if="index > 0" @click="toLink(item.url)" :style="setImgUrl(item.image)">
          <div class="info">
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ins',
    props: {
      opts: ""
    },
    data () {
      return {}
    },
    methods: {
      setImgUrl(img){
          return `background-image: url(${img})`
      },
      toLink(url){
          window.location.href = url.toString();
      }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .insurance{
    background-color: #fff;
    padding:.1rem .24rem .4rem;
    margin-top: .14rem;
    
    .title{
      padding:.4rem 0;
      text-align: center;
      color: #333;
      font-size: .32rem;
      font-weight: 700;
    }
    .row{
      @include clearfix;
      .cell{
        float: left;
        &:first-child{
          width: 4.2rem;
          .item{
            height: 3.3rem;
          }
        }
        &:last-child{
          float: right;
          width: 2.7rem;
          .item{
            height: 1.6rem;
            &:last-child{
              margin-top: .1rem;
            }
          }
        }
        
        .item{
          position: relative;
          background-size: cover;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          
          .info{
            position: absolute;
            left: 0;
            top:50%;
            width: 100%;
            padding: 0 .1rem;
            -webkit-transform: translateY(-50%);
            -moz-transform: translateY(-50%);
            transform: translateY(-50%);
            text-align: center;
            
            h2{
              color: #32486c;
              font-size: .32rem;
              @include text-overflow;
            }
            p{
              line-height: .36rem;
              font-size: .24rem;
              color: #32486c;
              margin-top: .2rem;
            }
          }
        }
      }
    }
  }
</style>
