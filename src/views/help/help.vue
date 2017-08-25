<template>
  <div class="page-view">
    <v-header :opts="headOpt"></v-header>
    <div ref="comBody" class="help">
      <div>
        <div class="helpwrap">
          <div class="kefu">
            <h2 class="tits">联系客服</h2>
            <div class="kefuwrap">
               <ul>
                    <li class="kefu-item" @click="kefuOne">
                        <a href="javascript:;">
                            <img src="./img/jj_icon.png">基金
                        </a>
                    </li>
                      <li class="kefu-item" @click="kefuTwo">
                        <a href="javascript:;">
                            <img src="./img/dq_icon.png">定期
                        </a>
                    </li>
                      <li class="kefu-item" @click="kefuThree">
                         <a href="javascript:;">
                            <img src="./img/bx_icon.png">保险
                        </a>
                    </li>
                      <li class="kefu-item" @click="kefuFour">
                          <a href="javascript:;">
                            <img src="./img/xd_icon.png">小贷
                        </a>
                    </li>
                </ul>
            </div>
          </div>
          <div class="question">
            <h2 class="title">热点问题</h2>
            <v-accordion :opts="question"></v-accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VHeader from '../../components/layout/header/header.vue'
  import VAccordion from '../../components/common/accordion/accordion.vue'
  import MessageBox from '../../components/common/dialog'
  //    better scroller
  import BScroll from 'better-scroll';
  export default {
    name: '',
    components: {
      VHeader,
      VAccordion
    },
    data () {
      return {
        headOpt: {
          name: "联系客服",
          backBtn: true
        },
        comBodyScroll: '',
        question:[
          {
            title: '实名认证银行卡不支持怎么办？',
            answer: '如果不支持该卡，您暂时无法完成实名认证，我们会不断完善支持更多银行卡认证。',
            open: false,
            qid: 0
          },
          {
            title: '绑卡是提示身份验证失败，如何处理？',
            answer: '绑卡时，新浪金融会把您的信息送到银行卡做校验，所以手机号有无是银行返回的，这种情况您需联系银行客服做处理。注：提示手机号码有误常见工商银行、农业银行以及建设银行的银行卡，其他银行也有，但较少。',
            open: false,
            qid: 1
          },
          {
            title: '实名认证银行卡不支持怎么办？',
            answer: '如果不支持该卡，您暂时无法完成实名认证，我们会不断完善支持更多银行卡认证。',
            open: false,
            qid: 2
          },
          {
            title: '绑卡是提示身份验证失败，如何处理？',
            answer: '绑卡时，新浪金融会把您的信息送到银行卡做校验，所以手机号有无是银行返回的，这种情况您需联系银行客服做处理。注：提示手机号码有误常见工商银行、农业银行以及建设银行的银行卡，其他银行也有，但较少。',
            open: false,
            qid: 3
          },
        ]
      }
    },
    methods:{
      indexScroll() {
        this.comBodyScroll = new BScroll(this.$refs.comBody, {
          click: true,
          deceleration: 0.001,
        });
      },
      kefuOne() {
        MessageBox.confirm({
          title: "提示",
          message: '基金客服电话：010-62675369',
          textAlign : 'center',
          okTxt: '拨打电话',
          callback : function () {
            window.location.href = 'tel:010-62675369';
          }
        })
      },
      kefuTwo() {
        MessageBox.alert({
          title: "提示",
          message: '定期客服QQ：952231859',
          textAlign : 'center',
          okTxt : '知道了'
        })
      },
      kefuThree() {
        MessageBox.confirm({
          title: "提示",
          message: '保险客服电话：010-82244469',
          textAlign : 'center',
          okTxt: '拨打电话',
          callback : function () {
            window.location.href = 'tel:010-82244469';
          }
        })
      },
      kefuFour() {
        MessageBox.confirm({
          title: "提示",
          message: '小贷客服电话： 4000308800',
          textAlign : 'center',
          okTxt: '拨打电话',
          callback : function () {
            window.location.href = 'tel:4000308800';
          }
        })
      }
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
    background-color: #fff;
    padding-top: .9rem;
    line-height: 1.1;
    .help {
      height: 100%;
      overflow: hidden;
      background: #f5f5f5;
      .helpwrap{
        .kefu{
           background: #fff;
           margin-top: 2px;
          .tits{
            height: 0.7rem;
            line-height: 0.7rem;
            padding-top: 1px;
            font-size: 0.28rem;
            font-weight: 700;
            padding-left: 0.4rem;
            border-bottom: 1px solid #f5f5f5;
          }
          .kefuwrap{
            background: #fff;
            padding: 0 .2rem .4rem .2rem;
            ul{
              display: -webkit-box;
              display: flex;
              .kefu-item{
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
        }
      }
      .question{
         margin-top: 0.15rem;
         .title{
            height: 0.7rem;
            line-height: 0.7rem;
            padding-top: 1px;
            font-size: 0.28rem;
            color: #333;
            font-weight: 700;
            padding-left: 0.4rem;
            border-bottom: 1px solid #f5f5f5;
            background: #fff;
         }
      }
    }
  }
</style>
