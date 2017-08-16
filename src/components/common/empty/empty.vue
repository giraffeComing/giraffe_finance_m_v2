<template>
    <div class="empty">
      <i class="icons" :class="icon"></i>
      <div class="desc" v-html="desc"></div>
      <div class="btn" v-if="btn" @click="goPage">{{btn}}</div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                icon:'',
                desc:'',
                btn:''
            }
        },
        props: {
            opts:''
        },
        methods:{
          goPage:function(){
            this.$emit('eventBtn')
          }
        },
        created(){
            this.icon = this.opts.icon;
            this.desc = this.opts.desc;
            this.btn = this.opts.btn;
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  
  .empty{
    padding:.9rem 0;
    text-align: center;
    
    .icons{
      display: inline-block;
      width: 2.4rem;
      height: 2.4rem;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      &.type1{
        background-image: url("./empty-1.png");
      }
      &.type2{
        background-image: url("./empty-2.png");
      }
    }
    .desc{
      line-height: .8rem;
      color: #a0a0a0;
    }
    .btn{
      display: inline-block;
      width: 2.4rem;
      height: .68rem;
      background-color: #ef4352;
      color: #fff;
      font-size: .28rem;
      text-align: center;
      border-radius: 2px;
      line-height: .68rem;
    }
  }

</style>
