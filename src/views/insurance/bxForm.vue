<template>
    <!--better-scroller的ref要直接跟着一个div结构-->
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData" ref="sfHeader"></v-header>
        <div ref="comBodySf" class="scroller">
            <div>
              <div class="detail">
                <div class="titwrap">
                    <img src="" alt="">
                </div>
                <div class="bxEnsure">
                    <h2 class="tit">保险保障</h2>
                    <div class="item">
                        <label>意外伤害</label>
                        <span>20万</span>
                    </div>
                    <div class="item">
                        <label>意外医疗</label>
                        <span>2万</span>
                    </div>
                    <div class="item">
                        <label>意外住院补贴</label>
                        <span>30元 / 天</span>
                    </div>
                    <div class="item">
                        <label>救护车费用</label>
                        <span>1000元</span>
                    </div>
                </div>
                <div class="bxNr">
                    <h2 class="tit">保险内容</h2>
                    <div class="item">
                        <label>生效时间</label>
                        <input type="text" value="2017-08-17" class="date"/>
                    </div>
                    <div class="item">
                       <label>保障期限</label>
                       <div class="choose">
                            <select>
                                <option value="1">1年</option>
                            </select>
                       </div>
                    </div>
                    <div class="item">
                        <label>支付金额</label>
                        <span>188元</span>
                    </div>
                </div>
                <div class="orderInfo">
                    <h2 class="tit">购买人<span class="edit">编辑</span></h2>
                    <div class="form">
                        <div class="info-item">
                            <label>姓名</label>
                            <input type="text" name="holderName" maxlength="6" autocomplete="off"  value="小明"/>
                        </div>
                        <div class="info-item">
                            <label>身份证号码</label>
                            <input type="text" name="holdercardId" maxlength="18" autocomplete="off" value="622******311"/>
                        </div>
                        <div class="info-item">
                            <label>手机号</label>
                            <input type="tel" maxlength="11" name="holderMobile" autocomplete="off" value="178****9005">
                        </div>
                        <div class="info-item">
                            <label>地址</label>
                            <input type="text" name="holderArea" autocomplete="off" value="北京市 市辖区 海淀区">
                        </div>
                        <div class="info-item">
                            <label>详细地址</label>
                            <input type="text" name="holderAdress" autocomplete="off" value="马连洼街道">
                        </div>
                        <div class="info-item">
                            <label>生日</label>
                            <input type="text" class="date" name="holderBirstday" autocomplete="off" value="1993-12-05">
                        </div>
                        <div class="info-item">
                            <label>邮箱</label>
                            <input type="text" name="holderEmail" maxlength="32" autocomplete="off" value="903013546@qq.com">
                        </div>
                    </div>
                </div>
                <div class="relation">
                    <div class="info-item">
                        <label>被保人</label>
                        <div class="choose">
                            <select>
                                <option value="1">本人</option>
                                <option value="2">父母</option>
                                <option value="3">配偶</option>
                                <option value="4">子女</option>
                                <option value="5">兄妹</option>
                                <option value="6">其他</option>
                            </select>
                        </div>
                    </div>
                    <div class="hidden">
                        <div class="info-item">
                            <label>姓名</label>
                            <input type="text" name="holderName" maxlength="6" autocomplete="off"  value="小明"/>
                        </div>
                        <div class="info-item">
                            <label>性别</label>
                            <div class="choose">
                                <select>
                                    <option value="男">男</option>
                                    <option value="女">女</option>
                                </select>
                            </div>
                        </div>
                        <div class="info-item">
                            <label>身份证号码</label>
                            <input type="text" name="holdercardId" maxlength="18" autocomplete="off" value="622******311"/>
                        </div>
                        <div class="info-item">
                            <label>地址</label>
                            <input type="text" name="holderArea" autocomplete="off" value="北京市 市辖区 海淀区">
                        </div>
                        <div class="info-item">
                            <label>详细地址</label>
                            <input type="text" name="holderAdress" autocomplete="off" value="马连洼街道">
                        </div>
                        <div class="info-item">
                            <label>生日</label>
                            <input type="text" class="date" name="holderBirstday" autocomplete="off" value="1993-12-05">
                        </div>
                        <div class="info-item">
                            <label>邮箱</label>
                            <input type="text" name="holderEmail" maxlength="32" autocomplete="off" value="903013546@qq.com">
                        </div>
                    </div>
                </div>
                <div class="protocol">
                    <p>本人已充分了解本保险产品，并承诺投保信息的真是性，理解并同意<a href="#">《保险条款》</a>和<a href="#">《投保须知》</a>的全部内容。</p>
                </div>
              </div>
            </div>
        </div>
        <!--footer-->
        <div class="footer" ref="sfFooter">
            <a href="javascripr:;" class="btn">立即购买</a>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    // better scroller
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {
            VHeader
        },
        data () {
            return {
                comBodyScrollSf:'',
                headerData:{
                    name: "填写保单",
                    backBtn: true
                },
            }
        },
        mounted:function () {
            //$nextTick这个方法保证了dom结构加载完成之后再执行
            this.$nextTick(() => {
                //结构复杂的地方再加个延迟
                setTimeout(()=>{
                    this.indexScrollSf();
                },500)
            })
        },
        methods:{
            indexScrollSf() {
                let pageH=this.$el.offsetHeight;
                let headerH=this.$refs.sfHeader.$el.offsetHeight;
                let footerH=this.$refs.sfFooter.offsetHeight;
                this.$refs.comBodySf.style.height = pageH - (headerH + footerH) +'px';
                this.comBodyScrollSf = new BScroll(this.$refs.comBodySf,{
                    click: true,
                    deceleration: 0.001,
                });
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        overflow: hidden;
        background: #fff;
        .scroller{
            margin-top: .9rem;
            height: 100%;
            overflow: hidden;
            background: #f5f5f5;
        }
        .detail{
           .titwrap{
               width: 100%;
               height: 2.6rem;
               background: #fff;
               margin: 0.02rem 0 0.15rem 0;
               img{
                   display: block;
                   width: 100%;
                   height: 100%;
               }
           }
           .bxEnsure{
               background: #fff;
               margin-bottom: 0.15rem;
              .tit{
                height: 0.66rem;
                line-height: 0.66rem;
                padding-left: 0.2rem;
                border-bottom: 1px solid #eee;
                font-size: 0.28rem;
                color: #333;
                font-weight: 700;
             }
             .item{
                 margin-left: 0.3rem;
                 border-bottom: 1px solid #eee;
                 @include clearfix;
                 height: 0.9rem;
                 line-height: 0.9rem;
                 &:last-child{ border: none;}
                 label{
                     float: left;
                     color: #333;
                     font-size: 0.28rem;
                 }
                 span{
                     float: right;
                     padding-right: 0.4rem;
                     color: #808080;
                     font-size: 0.28rem;
                 }
             }
           }
           .bxNr{
               background: #fff;
               margin-bottom: 0.15rem;
              .tit{
                height: 0.66rem;
                line-height: 0.66rem;
                padding-left: 0.2rem;
                border-bottom: 1px solid #eee;
                font-size: 0.28rem;
                color: #333;
                font-weight: 700;
             }
             .item{
                 margin-left: 0.3rem;
                 border-bottom: 1px solid #eee;
                 @include clearfix;
                 height: 0.9rem;
                 line-height: 0.9rem;
                 &:last-child{ border: none;}
                 label{
                     float: left;
                     color: #333;
                     font-size: 0.28rem;
                 }
                 span{
                     float: right;
                     padding-right: 0.4rem;
                     color: #ff484a;
                     font-size: 0.32rem;
                     font-weight: 700;
                 }
                 .date{
                     float: right;
                     height: 100%;
                     text-align: right;
                     background: url(./right_arrow.png) no-repeat right center;
                     background-size: 0.14rem auto;
                     padding-right: 0.3rem;
                     margin-right: 0.2rem;
                     color: #333;
                     font-size: 0.28rem;
                     border:none; 
                     outline: none;
                 }
                 .choose{
                     float: right;
                     height: 100%;
                     select{
                         appearance: none;
                         height: 100%;
                         border: none;
                         outline: none;
                         background: url(./right_arrow.png) no-repeat right center;
                         background-size: 0.14rem auto;
                         padding-right: 0.3rem;
                         margin-right: 0.2rem;
                         padding-left: 3rem;
                     }
                 }
             }
           }
           .orderInfo{
               background: #fff;
               margin-bottom: 0.15rem;
               .tit{
                    height: 0.66rem;
                    line-height: 0.66rem;
                    padding-left: 0.2rem;
                    border-bottom: 1px solid #eee;
                    font-size: 0.28rem;
                    color: #333;
                    font-weight: 700;
                    .edit{
                        float: right;
                        width: 1.2rem;
                        text-indent: 999em;
                        height: 100%;
                        background: url(./edit.png) no-repeat center center;
                        background-size: 0.35rem auto;
                    }
               }
               .info-item{
                    margin-left: 0.3rem;
                    border-bottom: 1px solid #eee;
                    @include clearfix;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    &:last-child{ border: none;}
                    label{
                        float: left;
                        color: #333;
                        font-size: 0.28rem;
                    }
                    input{
                        float: right;
                        width: 65%;
                        height: 100%;
                        text-align: right;
                        padding-right: 0.3rem;
                        margin-right: 0.2rem;
                        color: #333;
                        font-size: 0.28rem;
                        border:none; 
                        outline: none;
                    }
                    .date{
                        background: url(./right_arrow.png) no-repeat right center;
                        background-size: 0.14rem auto;
                    }
               }
           }
           .relation{
                background: #fff;
               .info-item{
                    margin-left: 0.3rem;
                    border-bottom: 1px solid #eee;
                    @include clearfix;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    &:last-child{ border: none;}
                    label{
                        float: left;
                        color: #333;
                        font-size: 0.28rem;
                    }
                    input{
                        float: right;
                        width: 65%;
                        height: 100%;
                        text-align: right;
                        padding-right: 0.3rem;
                        margin-right: 0.2rem;
                        color: #333;
                        font-size: 0.28rem;
                        border:none; 
                        outline: none;
                    }
                    .date{
                        background: url(./right_arrow.png) no-repeat right center;
                        background-size: 0.14rem auto;
                    }
                    .choose{
                        float: right;
                        height: 100%;
                        select{
                            appearance: none;
                            height: 100%;
                            border: none;
                            outline: none;
                            background: url(./right_arrow.png) no-repeat right center;
                            background-size: 0.14rem auto;
                            padding-right: 0.3rem;
                            margin-right: 0.2rem;
                            padding-left: 3rem;
                        }
                    }
               }
            }
            .protocol{
                padding: 0.32rem 0.32rem 0.38rem 0.32rem;
                p{
                    font-size: 0.24rem;
                    color: #666;
                    line-height: 0.4rem;
                    text-indent: 2em;
                    a{ color: #508cee;}
                }
            }
        }
        .footer{
            width: 100%;
            height: 1rem;
            position: fixed;
            bottom: 0;
            overflow: hidden;
            line-height: 1.65rem;
            z-index: 999;
            background: #ff484a;
            color: #fff;
            line-height: 1rem;
            text-align: center;
        }
    }
</style>
