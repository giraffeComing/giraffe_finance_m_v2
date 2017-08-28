<template>
    <div class="page-view">
        <div class="header">
            <div class="header-wrap">
                <div class="login-box">
                    <span class="login" @click="login">登录</span>
                  <!--| <span class="register">注册</span>-->
                </div>
                <div class="logo"><img src="./img/jr_logo.png" alt=""></div>
                <!--<div class="download">App下载</div>-->
            </div>
        </div>
        <v-container :types="1" v-if="showHome">
            <!--banner-->
            <v-swiper :opts="swiperOpts" :dataVal="bannerImgs.contents"></v-swiper>
            <!--快捷导航-->
            <v-menuGroup :opts="menuList"></v-menuGroup>
            <!--一直花-->
            <v-yizhihua :opts="huaData"></v-yizhihua>
            <!--一直赚-->
            <v-make :opts="makeData"></v-make>
            <!--基金主题-->
            <v-fundTheme :opts="fundData"></v-fundTheme>
            <!--保险模块-->
            <v-insurance :opts="insData"></v-insurance>
            <!--联系我们-->
            <div class="contact">
              <router-link :to="{ path: 'help'}">
                <div class="info">
                  <i class="icons"></i>
                  <h2>联系客服</h2>
                  <p>基金，定期理财，保险，贷款客服</p>
                </div>
              </router-link>
            </div>
        </v-container>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import config from '../../api/config.js'
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    import VContainer from '../../components/layout/container/container.vue'
    import VSwiper from '../../components/plug/swiper/swiper.vue'
    import VMenuGroup from './menuGroup.vue'
    import VYizhihua from './yizhihua.vue'
    import VMake from './make.vue'
    import VFundTheme from './fundTheme.vue'
    import VInsurance from './insurance.vue'
    import Toast from '../../components/common/toast/toast.js'
    
    export default {
        name: '',
        components: {
            VHeader,
            VFooter,
            VSwiper,
            VContainer,
            VMenuGroup,
            VYizhihua,
            VMake,
            VFundTheme,
            VInsurance,
        },
        data () {
            return {
                showHome : false,
                swiperOpts:{
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    speed:800,
                    paginationClickable: true,
                    loop: true,
                    autoplay: 4000,
                },
                bannerImgs:'',
                menuList:'',
                huaData:'',
                makeData:'',
                fundData:'',
                insData:'',
            }
        },
        methods: {
            login(){
                  alert('当前暂不可用，待上测试环境开启跳转登录')
//                const url = 'http://jr.sina.cn';
//                config.login(url.toString())
            }
        },
        created(){
            this.$nextTick(()=>{
              this.$http({
                port : 'wapIndex',
                openLoader:true
              }).then((res)=>{
                if(res.code == 0){
                    this.showHome = true;
                    this.bannerImgs = res.data[0];
                    this.menuList = res.data[1];
                    this.huaData = res.data[2];
                    this.makeData = res.data[3];
                    this.fundData = res.data[4];
                    this.insData = res.data[5];
                }else{
                    Toast(res.msg)
                }
              })
            })
        }
    }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
    body{
      overflow: hidden;
    }
    .page-view{
      height: 100%;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      background-color: $bg_color;
      
      .header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 999;
        .header-wrap{
          height: 1rem;
          background-color: #fff;
          overflow: hidden;
          position: relative;
          .login-box{
            position: absolute;
            left: .26rem;
            top: .27rem;
            color: #ccc;
            span{
              font-size: .3rem;
              color: #333;
              &.login{margin-right: .05rem;}
              &.register{margin-left: .05rem;}
            }
          }
          .logo img{
            display: block;
            width: 2.14rem;
            height: .44rem;
            margin: .25rem auto;
          }
          .download{
            position: absolute;
            right: .26rem;
            top: .24rem;
            width: 1.4rem;
            height: .52rem;
            display: block;
            border-radius: .4rem;
            background: #ef4353;
            color: #fff;
            font-size: .24rem;
            text-align: center;
            text-decoration: none;
            line-height: .52rem;
          }
        }
      }
      
      .contact{
        padding:.14rem 0;
        a{ display: block;}
        .info{
          position: relative;
          background-color: #fff;
          padding-left: 1.46rem;
          padding-top: .24rem;
          height: 1.28rem;
          .icons{
            position: absolute;
            left: .2rem;
            top: .16rem;
            display: inline-block;
            width: .96rem;
            height: .96rem;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-image: url("./img/icon-kf.png");
          }
          h2{
            font-size: .3rem;
            color: #333;
          }
          p{
            color: #a0a0a0;
            font-size: .24rem;
            margin-top: .1rem;
          }
        }
      }
    }
</style>
