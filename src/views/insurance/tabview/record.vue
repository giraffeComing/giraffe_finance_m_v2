<template>
  <div>
    <div class="record">
      <div class="item" v-for="(item,index) in insData.record">
        <div class="title">
          <span class="lab blue">{{item.typename}}</span>
          <span class="name">{{item.name}}</span>
          <span class="price">{{item.position}}</span>
        </div>
        <div class="info">
          <span class="time">保单到期时间：{{item.timelimit}}</span>
          <span class="name">保额</span>
        </div>
        <div class="end" v-if="item.available==0"></div>
      </div>
      <!--暂无记录-->
      <v-empty v-if="insData.record.length<1" :opts="emptyData"></v-empty>
    </div>
  </div>
</template>

<script>
  import VEmpty from '../../../components/common/empty/empty.vue'
  export default {
    name: '',
    components: {
      VEmpty
    },
    props: {
      insData: ""
    },
    methods:{
    },
    data () {
      return {
        emptyData : {
          icon:'type1',
          desc:'暂无纪录',
        }
      }
    },
    created(){
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .record{
    .item{
      position: relative;
      display: block;
      padding:0 .6rem .3rem .24rem;
      border-bottom: 1px solid #f3f3f3;
      
      .end{
        position: absolute;
        width: 1.1rem;
        height: 1.1rem;
        right: .3rem;
        top: .2rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-image: url("../img/icon-end.png");
      }
      .title{
        position: relative;
        display: block;
        line-height: .9rem;
        color: #a0a0a0;
        font-size: .32rem;
        /*padding-left: .68rem;*/
        padding-left: .88rem;
        @include clearfix;
      
        .lab{
          display: inline-block;
          height: .32rem;
          padding:0 .05rem;
          border-radius: 3px;
          text-align: center;
          line-height: .32rem;
          color: #fff;
          font-size: .22rem;
          position: absolute;
          left: 0;
          top: .29rem;
          background-color: #aeaeae;
        }
      
        .price{
          float: right;
        }
      }
      .info{
        /*padding-left: .68rem;*/
        padding-left: .88rem;
        color: #a0a0a0;
        font-size: .24rem;
        @include clearfix;
      
        .name{
          float: right;
        }
      }
    }
  }
</style>
