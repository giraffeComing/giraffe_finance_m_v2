<template>
    <div class="container1" ref="comBody" :style="scrollStyle" v-if="types==1">
        <div>
          <slot></slot>
        </div>
    </div>
    <div class="container2" ref="comBody" :style="scrollStyle" v-else-if="types==2">
      <div>
        <slot></slot>
      </div>
    </div>
    <div class="container3" ref="comBody" :style="scrollStyle" v-else="types==3">
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {},
        props:{
            types: Number
        },
        mounted(){
          //$nextTick这个方法保证了dom结构加载完成之后再执行
          this.$nextTick(() => {
            //结构复杂的地方再加个延迟
            
            setTimeout(() => {
              this.indexScroll();
            }, 10)
          })
        },
        methods: {
          isPc(){
              var userAgentInfo = navigator.userAgent;
              var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
              var flag = true;
              for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                  flag = false;
                  break;
                }
              }
              return flag;
          },
          indexScroll() {
            this.comBodyScroll = new BScroll(this.$refs.comBody, {
              click: true,
              deceleration: 0.001
            });
          },
        },
        data () {
            return {
              scrollStyle : ''
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .container1{
        height: 100%;
        margin: .9rem 0 1.1rem 0;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
    .container2{
        height: 100%;
        margin: 1.1rem 0 1.1rem 0;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }
    .container3{
        height: 100%;
        margin: .9rem 0 1.1rem 0;
        overflow: hidden;
        -webkit-overflow-scrolling: touch;
    }

</style>
