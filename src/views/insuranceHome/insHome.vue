<template>
  <div class="page-view">
    <v-header :opts="headerData"></v-header>
    <div ref="comBody" class="insurance">
      <div>
          <v-swiper :opts="swiperOpts" :dataVal="bannerImg"></v-swiper>
          <v-tabwrap v-if="loaded" :opts="insData"></v-tabwrap>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VTabwrap from './tabview/tabwrap.vue'
  import VSwiper from '../../components/plug/swiper/swiper.vue'
  import BScroll from 'better-scroll';

  const RES_OK = 0;  //请求成功
    export default {
      name: '',
      components: {
        VHeader,
        VTabwrap,
        VSwiper
      },
      data () {
        return {
          headerData:{
            name:'保险',
            backBtn:true
          },
          swiperOpts:{
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            speed:800,
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
          },
          bannerImg:[],
          insData:'',
          loaded: false
        }
      },
      methods:{
        indexScroll() {
          if(!this.comBodyScroll){
            this.comBodyScroll = new BScroll(this.$refs.comBody, {
              click: true,
              deceleration: 0.001,
            })
          }else{
            this.comBodyScroll.refresh()
          }
        }
      },
      created(){
          this.$http({
            port : 'listInsurance',
            openLoader:true
          }).then((res)=>{
            if (res.code === RES_OK) {
              this.bannerImg = res.data.title.map(item => {
                  return {
                      imgSrc:item.imgsrc,
                      href:item.href ? item.href : 'JavaScript:;'
                  }
              })
              this.insData = res.data.insurance.map(item =>{
                return {
                  name:item.name,
                  type: item.type,
                  list : item.data
                }
              })
              this.loaded = true;
              this.$nextTick(() => { // 渲染完毕
               setTimeout(()=>{
                  this.indexScroll();
                },300)
              })
            }
          })
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  
  .page-view {
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    padding-top: .9rem;
    line-height: 1.1;
    .advaImg{
      height: 100%;
      width: 100%;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .insurance {
      height: 100%;
      overflow: hidden;
      background: #fff;
    }
  }

</style>
