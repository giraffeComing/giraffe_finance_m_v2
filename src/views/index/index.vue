<template>
    <div class="page-view">
        <div class="header">
            <div class="header-wrap">
                <div class="login-box">
                    <span class="login">登录</span> | <span class="register">注册</span>
                </div>
                <div class="logo"><img src="./img/jr_logo.png" alt=""></div>
                <div class="download">App下载</div>
            </div>
        </div>
        <v-container :types="1">
              <v-swiper :opts="swiperOpts" :dataVal="imgs"></v-swiper>
              <div class="menu">
                  <ul class="menu-wrap">
                      <li class="menu-item">
                          <a href="#">
                              <img src="./img/menu_icon_01.png">一直花
                          </a>
                      </li>
                       <li class="menu-item">
                          <a href="#">
                              <img src="./img/menu_icon_02.png">存钱罐
                          </a>
                      </li>
                       <li class="menu-item">
                         <router-link :to="{ path: 'insHome'}">
                              <img src="./img/menu_icon_03.png">保险
                         </router-link>
                      </li>
                       <li class="menu-item">
                           <router-link :to="{ path:'/indexfund' }">
                              <img src="./img/menu_icon_04.png">基金
                           </router-link>
                      </li>
                  </ul>
              </div>
              <div class="all-hua">
                  <div class="wrap">
                      <h2 class="title">一直花</h2>
                      <div class="flex-wrap">
                        <div class="cell">
                            <div class="item">
                              <img src="./img/hua_icon_01.png" alt="">
                              <h3>现金</h3>
                              <p>极速放20万</p>
                            </div>
                        </div>
                        <div class="cell">
                            <div class="item">
                              <img src="./img/hua_icon_02.png" alt="">
                              <h3>你刷卡 我来还</h3>
                              <p>代还信用卡 2万起</p>
                            </div>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="all-zhuan">
                  <h2 class="title">一直赚</h2>
                  <ul class="zhuan">
                      <li>
                          <span class="tit">财富赢家二期</span>
                          <p>高收益 低风险    18个月    100元起投</p>
                          <div class="earn">
                              <h2>9.6%</h2>
                              <p>近3年收益</p>
                          </div>
                      </li>
                      <li>
                          <span class="tit">财富赢家二期</span>
                          <p>高收益 低风险    18个月    100元起投</p>
                          <div class="earn">
                              <h2>9.6%</h2>
                              <p>近3年收益</p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div class="fund">
                  <div class="title">基金主题</div>
                  <div class="topic"><div class="bar"><span>求稳定、求收益，波特菲勒精选榜</span></div></div>
                  <div class="row">
                      <div class="cell">
                          <div class="item">
                              <h2>交银稳健配置混合</h2>
                              <div class="num">101.1%</div>
                              <div class="txt">近3年收益</div>
                          </div>
                      </div>
                      <div class="cell">
                          <div class="item">
                              <h2>交银稳健配置混合</h2>
                              <div class="num">101.1%</div>
                              <div class="txt">近3年收益</div>
                          </div>
                      </div>
                  </div>
              </div>
              
            <div class="insurance">
                <div class="title">创意险</div>
                <div class="row">
                  <div class="cell">
                    <div class="item" style="background-image: url(../../../static/bx_bg1.png)">
                      <div class="info">
                        <h2>无忧旅游季自驾游</h2>
                        <p>驾乘人员意外伤害最高可赔付20万元</p>
                      </div>
                    </div>
                  </div>
                  <div class="cell">
                    <div class="item" style="background-image: url(../../../static/bx_bg2.png)">
                      <div class="info">
                        <h2>车险</h2>
                        <p>30秒精准报价投保便捷理赔更高效！</p>
                      </div>
                    </div>
                    <div class="item" style="background-image: url(../../../static/bx_bg3.png)">
                      <div class="info">
                        <h2>意外险</h2>
                        <p>意外伤害最高理赔20万！</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            
            <div class="contact">
              <div class="info">
                <i class="icons"></i>
                <h2>联系客服</h2>
                <p>基金，定期理财，保险，贷款客服</p>
              </div>
            </div>
        </v-container>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    import VContainer from '../../components/layout/container/container.vue'
    import VSwiper from '../../components/plug/swiper/swiper.vue'
    export default {
        name: '',
        components: {
            VHeader,
            VFooter,
            VSwiper,
            VContainer
        },
        data () {
            return {
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
            }
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
  
      .menu{
        background: #fff;
        padding: 0 .2rem .3rem .2rem;
        .menu-wrap{
          display: -webkit-box;
          display: flex;
          .menu-item{
            flex: 1;
            img{
              width: 1rem;
              height: 1rem;
              display: block;
              margin: 0 auto .12rem;
            }
            a{
              display: block;
              text-align: center;
              margin-top: .3rem;
              color: #666;
              font-size: .28rem;
              text-decoration: none;
            }
          }
        }
      }
      .all-hua{
        padding: .14rem 0 .14rem .14rem;
        .wrap{
          background: #fff;
          width: 100%;
          .title{
            padding: .4rem 0 .35rem;
            text-align: center;
            color: #333;
            font-size: .32rem;
            font-weight: 700;
          }
          .flex-wrap{
            padding-bottom: .4rem;
            padding-right: .1rem;
            @include clearfix;
            .cell{
              width: 50%;
              padding: 0 .1rem;
              float: left;
          
              &:last-child{
                .item{
                  padding-left: 1.3rem;
                  img{
                    width: 1.05rem;
                    height: 1.6rem;
                    top: .2rem;
                  }
                }
              }
              .item{
                height: 1.8rem;
                padding: .4rem 0 0 1.6rem;
                background-color: #fff;
                position: relative;
                box-shadow: 0 0 .12rem rgba(0,0,0,.15);
            
                img{
                  width: 1.2rem;
                  height: 1.2rem;
                  position: absolute;
                  top: .3rem;
                  left: .2rem;
                }
                h3{
                  font-size: .32rem;
                  color: #ef4353;
                  @include text-overflow;
                }
                p{
                  margin-top: .2rem;
                  font-size: .24rem;
                  @include text-overflow;
                }
              }
            }
          }
        }
      }
      .all-zhuan{
        background: #fff;
        width: 100%;
        .title{
          padding: .4rem 0 .15rem;
          text-align: center;
          color: #333;
          font-size: .32rem;
          font-weight: 700;
        }
        .zhuan{
          li{
            position: relative;
            padding: .2rem 2.2rem .2rem .24rem;
            height: 1.3rem;
            line-height: 1.2;
            @include clearfix;
            .tit{
              display: block;
              font-size: .32rem;
              color: #333;
              @include text-overflow;
            }
            p{
              font-size: .24rem;
              color: #808080;
              margin-top: .24rem;
            }
            .earn{
              position: absolute;
              right: .2rem;
              top:.2rem;
              height: .9rem;
              line-height: 1.2;
              text-align: right;
              width: 2rem;
              border-left: 1px solid #eee;
          
              h2{
                display: block;
                font-size: .32rem;
                color: #ef4353;
              }
              p{
                font-size: .24rem;
                color: #808080;
                margin-top: .24rem;
              }
            }
          }
        }
      }
      .fund{
        background-color: #fff;
        margin-top: .14rem;
        .title{
          padding: .4rem 0 .2rem;
          text-align: center;
          color: #333;
          font-size: .32rem;
          font-weight: 700;
        }
        .topic{
          position: relative;
          padding:0 .82rem .2rem;
          color: #a0a0a0;
          font-size: .24rem;
          text-align: center;
          .bar{
            position: relative;
            display: inline-block;
            max-width: 90%;
            span{
              display: inline-block;
              max-width: 100%;
              @include text-overflow;
            }
            &:after,
            &:before{
              position: absolute;
              content: "";
              top:50%;
              height: 1px;
              background-color: #ccc;
              width: .7rem;
            }
            &:before{
              left: -.82rem;
            }
            &:after{
              right: -.82rem;
            }
          }
        }
        .row{
          padding: .2rem .12rem .4rem;
          @include clearfix;
          .cell{
            float: left;
            width:50%;
            padding:0 .12rem;
            .item{
              position: relative;
              border:1px solid #e0e0e0;
              padding:.3rem .1rem;
              text-align: center;
              &:before,
              &:after{
                position: absolute;
                content: "";
                left: 0;
                right: 0;
                height: 1px;
                background-color: #e0e0e0;
              }
              &:before{
                bottom: 1px;
              }
              &:after{
                bottom: 3px;
              }
              h2{
                font-size: .32rem;
                color: #333;
                @include text-overflow;
              }
              .num{
                font-size: .38rem;
                color: #ef4353;
                margin-top: .34rem;
              }
              .txt{
                font-size: .24rem;
                color: #808080;
                margin-top: .14rem;
              }
            }
          }
        }
      }
      .insurance{
        background-color: #fff;
        padding:.1rem .24rem .4rem;
        margin-top: .14rem;
    
        .title{
          padding:.4rem 0;
          text-align: center;
          color: #333;
          font-size: .32rem;
          font-weight: 700;
        }
        .row{
          @include clearfix;
          .cell{
            float: left;
            &:first-child{
              width: 4.2rem;
              .item{
                height: 3.3rem;
              }
            }
            &:last-child{
              float: right;
              width: 2.7rem;
              .item{
                height: 1.6rem;
                &:last-child{
                  margin-top: .1rem;
                }
              }
            }
        
            .item{
              position: relative;
              background-size: cover;
              background-position: 50% 50%;
              background-repeat: no-repeat;
          
              .info{
                position: absolute;
                left: 0;
                top:50%;
                width: 100%;
                padding: 0 .1rem;
                -webkit-transform: translateY(-50%);
                -moz-transform: translateY(-50%);
                transform: translateY(-50%);
                text-align: center;
            
                h2{
                  color: #32486c;
                  font-size: .32rem;
                  @include text-overflow;
                }
                p{
                  line-height: .36rem;
                  font-size: .24rem;
                  color: #32486c;
                  margin-top: .2rem;
                }
              }
            }
          }
        }
      }
      .contact{
        padding:.14rem 0;
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
