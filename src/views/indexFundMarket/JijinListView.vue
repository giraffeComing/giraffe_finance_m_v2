<template>
    <div class="page-view">
        <div class="header-border">
            <div class="header-back">
                <span class="btn-back"  @click="backTo"></span>
                <span>基金</span>
                <span class="search-btn" @click="btnShow"></span>
                <div class="search-group" :class="{'active':showSearch}">
                  <div class="box">
                    <i class="icon"></i>
                    <input type="text" class="ipt" v-model="searchCode" placeholder="请输入基金简称／代码">
                    <span class="cancel" @click="btnCancel">取消</span>
                  </div>
                </div>
            </div>
        </div>
        <transition appear mode="out-in" name="fadeIn">
          <component :is="currentView" :optsData="optsData"></component>
        </transition>
    </div>
</template>

<script>
    import VRankList from  './rank/rankList.vue'
    import VSearchList from  './search/searchList.vue'
    import VRecomList from  './recommend/recomList.vue'
    import Toast from '../../components/common/toast/toast'
    
    export default {
        name: '',
        components: {
          VRankList,
          VSearchList,
          VRecomList
        },
        data () {
            return {
                currentView:'VRankList',
                searchCode:'',
                showSearch:false,
                showList:false,
                recomData:'',
                optsData : ''
            }
        },
        watch:{
          searchCode(){
            if(this.searchCode){
              this.setSearchList();
            }else{
              this.setRecomList();
            }
          }
        },
        created(){
        
        },
        methods: {
            backTo(){
                this.$router.go(-1)
            },
            btnShow(){
              this.showSearch = true;
              this.searchCode = '';
              this.setRecomList();
            },
            btnCancel(){
              this.showSearch = false;
              this.currentView = 'VRankList';
            },
            setSearchList(){
              this.currentView = 'VSearchList';
              this.$http({
                port : 'searchFund',
                data : {
                  key : this.searchCode,
                  num : '20'
                }
              }).then((res)=>{
                if(res.code == 0){
                  this.optsData = res.data.fund_list.data;
                }else{
                  Toast(res.msg)
                }
              })
            },
            setRecomList(){
              this.currentView = 'VRecomList';
              if(!this.recomData){
                this.$http({
                  port : 'promoteRecommend'
                }).then((res)=>{
                  if(res.code == 0){
                    this.recomData = res.data.list;
                    this.optsData = this.recomData;
                  }else{
                    Toast(res.msg)
                  }
                })
              }
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
      height: 100%;
      display: flex;
      flex-direction: column;
      padding-top: 1.06rem;
      line-height: 1.1;
      background: #f5f5f5;
      overflow: hidden;
    }
    .header-border{
      position: fixed;
      top:0;
      width: 100%;
      color: #666;
      background: #fff;
      z-index: 999;
      .header-back{
        position: relative;
        height: .9rem;
        text-align: center;
        line-height: .9rem;
        font-size: .36rem;
        .btn-back{
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: .9rem;
          height: .9rem;
          background: url("./backbg.png") no-repeat;
          background-size: .23rem .45rem;
          background-position: .2rem center;
        }
      }
      .search-btn{
        width: .42rem;
        height: .36rem;
        position: absolute;
        right: .24rem;
        top:.26rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        background-image: url("./fund-search.png");
      }
    }
    
    .search-group{
      position: absolute;
      background: #fff;
      width: 0;
      height: .9rem;
      top: 0;
      right: 0;
      overflow: hidden;
      transition: width .3s ease;
      &.active{
        width: 100%;
      }
      
      .box{
        position: relative;
        width: 100%;
        padding: .15rem .24rem;
        .icon{
          position: absolute;
          top: .15rem;
          left: .24rem;
          width: .6rem;
          height: .6rem;
          background: url("searchbtn.png") no-repeat;
          background-size: 50% 50%;
          background-position: center center;
        }
        .ipt{
          display: block;
          width: 100%;
          height: .6rem;
          padding-left: .6rem;
          border: 1px solid #ebf0f4;
          border-radius: .05rem;
          font-size: .26rem;
          outline-style: none;
        }
        .cancel{
          display: inline-block;
          font-size: .28rem;
          color: #666;
          position: absolute;
          right: .24rem;
          top: .15rem;
          padding: 0 .15rem;
          line-height: .6rem;
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

    
</style>
