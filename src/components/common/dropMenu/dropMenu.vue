<template>
  <transition name="fade">
      <div class="dropDown" v-show="visible">
          <div class="mask"  @click="hideDropMenu()"></div>
          <div class="list" :style="setStyle()">
              <div class="item">
                  <span class="name">日涨幅</span>
                  <i class="icon"></i>
              </div>
              <div class="item">
                  <span class="name">日涨幅</span>
                  <i class="icon"></i>
              </div>
          </div>
      </div>
  </transition>
</template>


<script>
    var defaults = {
        visible: false,
        curItem: 0,
    };
    export default {
        data() {
            return {
                ...defaults
            };
        },
        created() {
            this.rendered = true;
        },
        methods: {
          setStyle(){
              return {
                  top: '100%'
              }
          },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .dropDown{
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        z-index: 1000;
        .mask{
        }
        .list{
          position: absolute;
          width: 100%;
          top:100%;
          background-color: #fff;
          .item{
            position: relative;
            line-height: .88rem;
            border-bottom: 1px solid #eee;
            color: #a0a0a0;
            font-size: .28rem;
            padding:0 .32rem;
            
            &.active{
              color: #ef4353;
              .icon{
                opacity: 1;
              }
            }
            .icon{
              float: right;
              width: .36rem;
              height: .24rem;
              margin-top: .32rem;
              margin-right: .4rem;
              background-size: cover;
              background-repeat: no-repeat;
              background-position: 50% 50%;
              background-image: url("./tick.png");
              opacity: 0;
              -webkit-transition: opacity .3s;
              -moz-transition: opacity .3s;
              transition: opacity .3s;
            }
          }
        }
    }
</style>
