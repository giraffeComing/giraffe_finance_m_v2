<template>
  <div v-if="opts.length > 0">
    <!--过渡动画-->
    <transition appear mode="out-in" name="fade">
      <div>
        <ul>
          <li
            v-for="(item,index) in opts"
            @click="toggle(index)"
            :style="getLength(opts.length)"
            :class="{active:now===index}">
            {{item.name}}
          </li>
        </ul>
        <div class="tab-contain">
          <transition appear mode="out-in" name="fadeIn">
            <v-list :insData="insData" :key="now"></v-list>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import VList from './list.vue'
  export default {
    name: '',
    components: {
      VList
    },
    props : {
        opts:""
    },
    methods:{
      toggle(i){
        this.now=i;
        this.insData = this.opts[i];
      },
      getLength(length){
          return { width : 100 / length + '%'};
      }
    },
    data () {
      return {
        now:0,
        insData:[]
      }
    },
    created(){
        this.insData = this.opts[this.now];
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  ul{
    height: 1.1rem;
    border-bottom: 1px solid #f3f3f3;
    background-color: #fff;
    @include clearfix;
    li{
      display: block;
      width: 50%;
      float: left;
      line-height: 1.06rem;
      text-align: center;
      color: #808080;
      font-size: .32rem;
      border-bottom: 0.04rem solid transparent;
      &.active{
        border-color: #ef4352;
        color: #333;
      }
    }
  }
  .tab-contain{
    border-top:.16rem solid #f5f5f5;
  
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .fadeIn-enter-active, .fadeIn-leave-active {
    transition: opacity .3s,transform .2s;
  }
  .fadeIn-enter, .fadeIn-leave-to {
    opacity: 0;
    transform: translateY(.2rem);
  }
</style>
