<template>
  <div class="page-view">
    <v-header :opts="headerData"></v-header>
    <div ref="comBody" class="insurance">
      <div>
          <v-swiper :opts="swiperOpts" :dataVal="imgs"></v-swiper>
        
          <v-tabwrap :opts="insData"></v-tabwrap>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VSwiper from '../../components/plug/swiper/swiper.vue'
  import VTabwrap from './tabview/tabwrap.vue'
  //    better scroller
  import BScroll from 'better-scroll';
    export default {
      name: '',
      components: {
        VHeader,
        VTabwrap,
        VSwiper,
      },
      data () {
        return {
          headerData:{
            name:'保险',
            backBtn:true
          },
          comBodyScroll: '',
          swiperOpts:{
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            speed:800,
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
          },
          imgs:[
            {
              "imgSrc":"../../static/s_1.png",
              "href":"",
            },
            {
              "imgSrc":"../../static/s_1.png",
              "href":"",
            }
          ],
          insData:''
        }
      },
      methods:{
        indexScroll() {
          this.comBodyScroll = new BScroll(this.$refs.comBody, {
            click: true,
            deceleration: 0.001,
          });
        }
      },
      created(){
          this.insData = [
            {
                name:'车险',
                list : [
                  {
                    img:'../../static/ins.png',
                    title:'车险',
                    desc : '意外伤害 2w元医疗',
                    price: '300'
                  },
                  {
                    img:'../../static/ins.png',
                    title:'车险',
                    desc : '意外伤害 2w元医疗',
                    price: '300'
                  }
                ]
            },
            {
                name:'意外险',
                list : [
                  {
                    img:'../../static/ins.png',
                    title:'意外险22',
                    desc : '意外伤害 2w元医疗',
                    price: '300'
                  },
                  {
                    img:'../../static/ins.png',
                    title:'意外险22',
                    desc : '意外伤害 2w元医疗',
                    price: '300'
                  }
                ]
            }
            
          ]
      },
      mounted(){
        //$nextTick这个方法保证了dom结构加载完成之后再执行
        this.$nextTick(() => {
          //结构复杂的地方再加个延迟
          setTimeout(() => {
            this.indexScroll();
          }, 10)
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
    .insurance {
      height: 100%;
      overflow: hidden;
      background: #fff;
    }
  }

</style>
