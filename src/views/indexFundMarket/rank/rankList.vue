<template>
  <div class="fundList" ref="comBody">
    <div>
      <div class="rank">
        <div class="rank-tabs">
          <span v-for="(item,index) in tabList"
          @click="toggle(index)"
          :style="getLength(tabList.length)"
          :class="{active:now===index}">
          {{item.name}}</span>
        </div>
        <transition appear mode="out-in" name="fadeIn">
          <v-rankItem v-if="showList" :key="now" :listData="listData"></v-rankItem>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import VRankItem from  './rankItem.vue'
  export default {
    name: '',
    components: {
      VRankItem
    },
    props : {
      opts:""
    },
    methods:{
      toggle(i){
        this.now = i;
        this.getListData(this.tabList[ this.now ].type)
      },
      getLength(length){
        return { width : 100 / length + '%'};
      },
      fundListScroll() {
        this.listScroll = new BScroll(this.$refs.comBody,{
          click: true,
          deceleration: 0.001,
        });
      },
      getListData(type){
        this.$http({
          port : 'getfundProductList',
          data : {
            type : type
          },
          openLoader:true
        }).then((res)=>{
          if(res.code == 0){
            this.showList = true;
            this.listData = {
                type:type,
                data : res.data
            };
            this.$nextTick(() => {
//              setTimeout(() => {
//                this.fundListScroll();
//              }, 10)
            })
          }
        })
      }
    },
    data () {
      return {
        now:0,
        listScroll:'',
        tabList: [
          {
            name:"股票型",
            type:'0'
          },
          {
            name:"混合型",
            type:'A'
          },
          {
            name:"债券型",
            type:'1'
          },
          {
            name:"货币型",
            type:'2'
          },
          {
            name:"QDII型",
            type:'5'
          }
        ],
        showList:false,
        listData:''
      }
    },
    created(){
      this.getListData(this.tabList[this.now].type)
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  
  .fundList{
    height: 100%;
    background: #fff;
    /*overflow: hidden;*/
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .rank {
    .rank-tabs {
      height: .9rem;
      width: 100%;
      color: #808080;
      text-align: center;
      background-color: #fff;
      padding-top: .1rem;
      border-bottom: 1px solid #f3f2f1;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -o-box;
      display: flex;
      
      span {
        position: relative;
        line-height: .8rem;
        font-size: .3rem;
        text-align: center;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        -o-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        
        &.active {
          color: #ef4353;
          
          &:before{
            content: "";
            width: 100%;
            max-width: 1rem;
            height: .03rem;
            position: absolute;
            left: 50%;
            bottom: 0;
            background-color: #ef4353;
            -webkit-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            transform: translateX(-50%);
          }
        }
      }
    }
    .fadeIn-enter-active, .fadeIn-leave-active {
      transition: opacity .3s,transform .2s;
    }
    .fadeIn-enter, .fadeIn-leave-to {
      opacity: 0;
      transform: translateY(.2rem);
    }
  }
</style>
