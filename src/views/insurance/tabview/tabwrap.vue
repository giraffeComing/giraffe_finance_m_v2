<template>
  <div>
    <!--过渡动画-->
    <transition appear mode="out-in" name="fade">
      <div>
        <ul>
          <!--循环li并绑定点击事件，事件绑定用@，属性绑定用:-->
          <li
            v-for="(item,index) in tabs"
            @click="toggle(index,item.tabView)"
            :class="{active:now===index}">
            {{item.tabContent}}
          </li>
        </ul>
        <!--动态组件-->
        <div class="tab-contain">
          <!--过渡效果-->
          <transition appear mode="out-in" name="fadeIn">
            <component :is="currentView" :insData="opts"></component>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import VHold from './hold.vue'
  import VRecord from './record.vue'
  export default {
    name: '',
    components: {
      VHold,
      VRecord
    },
    props : {
        opts:""
    },
    methods:{
      toggle(i,v){
        //使用data中定义的变量的时候不要忘了前面的this
        this.currentView=v;
        this.now=i;
      }
    },
    data () {
      return {
        //变量now与索引比较，控制class切换
        now:0,
        //变量currentView控制动态组件切换
        currentView:'VHold',
        //选项卡数据结构
        tabs:[
          {
            tabContent:'持有中',
            tabView:'VHold'
          },
          {
            tabContent:'投保记录',
            tabView:'VRecord'
          },
        ]
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  ul{
    height: 1.1rem;
    border-bottom: 1px solid #f3f3f3;
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
