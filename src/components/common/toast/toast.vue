<template>
  <transition name="fade">
    <div v-show="visible" :class="position" class="toast">
      <i class="message">{{message}}</i>
    </div>
  </transition>
</template>
<script>
export default {
  data () {
    return {
      visible: false,   /*对toast的显示和隐藏*/
      message: '',     /*消息文字*/
      position: ''    /*toast位置 top、middle、bottom*/
    }
  }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .toast {
    position: fixed;
    left: 50%;
    word-wrap: break-word;
    padding: 0.2rem;
    text-align: center;
    z-index: 9999;
    max-width: 80%;
    color: #fff;
    border-radius: 3px;
    background: rgba(0,0,0,0.7);
    overflow: hidden;
    transform: translate(-50%,-50%) scale(1);
    &.middle{
      top: 50%;
    } 
    &.top{
      top: 5%;
    }
    &.bottom{
      bottom: 5%;
    }  
    .message{
      font-size: 0.28rem;
      font-style: normal;
      display: block;
    }
  }
  .fade-enter-active, .fade-leave-active {
     transition: transform .24s
  }
  .fade-enter, .fade-leave-active {
    transform: translate(-50%,-50%) scale(0);
  }   
</style>

