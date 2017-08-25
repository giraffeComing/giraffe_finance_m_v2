<template>
    <div v-if="rendered">
        <transition name="fade">
            <div class="dialog-mask" v-show="visible"></div>
        </transition>
        <transition name="zoom">
            <div class="confirm" v-show="visible" :style="{top:offtop}">
                <div class="confirm-content">
                    <div class="topic" v-if="topic">{{topic}}</div>
                    <div class="close" @click="hideDialog('cancel')"></div>
                    <div class="info" :class="textAlign">
                        <h2 v-if="title">{{title}}</h2>
                        <p class="msg" v-if="message">{{message}}</p>
                        <div class="btn-group">
                          <div class="cell"><div class="btn btn-ok" @click="hideDialog('confirm')">{{okTxt}}</div></div>
                          <div class="cell" v-if="showCancel"><div class="btn btn-cancel" @click="hideDialog('cancel')">取消</div></div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    
    var defaults = {
          rendered: false,
          visible: false,
          type:'',
          topic:'',
          title:'',
          message:'',
          offtop:'',
          textAlign:'',
          okTxt:''
    };
    
    export default {
        
        data() {
            return {
                ...defaults
            }
        },
        mounted(){
        
        },
        created() {
            this.rendered = true;
        },
        computed : {
            showCancel (){
                return this.type !== 'alert' ? true : false;
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .dialog-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9998;
    background-color: rgba(0, 0, 0, .6);
  }
  
  .confirm {
    position: fixed;
    z-index: 9999;
    width: 84%;
    left: 8%;
    top:10%;
    box-shadow: 0 0 3px rgba(0, 0, 0, .5);
    
    .confirm-content {
      position: relative;
      background-color: #fff;
      box-sizing: border-box;
      min-height: 100%;
      font-size: 0;
      padding-top: .4rem;
      
      .close{
        position: absolute;
        width: .3rem;
        height: .3rem;
        right: .3rem;
        top:.3rem;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-image: url("./close.png");
      }
      
      .topic{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        line-height: .9rem;
        padding: 0 .32rem;
        font-size: .34rem;
        color: #333;
        border-bottom: 1px solid #c0c0c0;
        
        &~.info{
          margin-top: .5rem;
        }
      }
      
      .info{
        padding: .1rem .3rem .4rem;
  
        &.center{
          text-align: center;
        }
        &.right{
          text-align: right;
        }
      }
      
      h2 {
        font-size: .32rem;
        line-height: .42rem;
        color: #333;
        margin-top: .3rem;
      }
      
      .msg {
        color: #a0a0a0;
        font-size: .28rem;
        line-height: .36rem;
        word-break: break-all;
        margin-top: .3rem;
      }
      
      .btn-group {
        padding-top: .4rem;
        @include clearfix;
        
        .cell{
          width: 50%;
          float: left;
          
          &:first-child{
           padding-right: .1rem;
          }
          &:last-child{
            padding-left: .1rem;
          }
          &:only-child{
            width: 100%;
            padding: 0;
          }
        }
        .btn{
          display: block;
          box-sizing: border-box;
          line-height: .7rem;
          font-size: .32rem;
          text-align: center;
          border-radius: 2px;
          
          &.btn-cancel{
            color: #808080;
            background-color: #fff;
            border:1px solid #c0c0c0;
          }
          &.btn-ok{
            color: #fff;
            background-color: #ef4353;
            border:1px solid #ef4353;
          }
        }
      }
    }
    
    .confirm-close {
      display: none;
    }
  }
  
  .confirm-mask {
    display: none;
  }
  
  .alert {
    @extend .confirm;
    
    .alert-content {
      @extend .confirm-content;
    }
    
    .alert-close {
      display: none;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition:opacity .3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .zoom-enter-active, .zoom-leave-active {
    transition: transform .3s ,opacity .3s
  }
  .zoom-enter, .zoom-leave-to {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

</style>
