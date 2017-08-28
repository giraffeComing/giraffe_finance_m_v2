<template>
    <div class="page-view">
        <v-header :opts="headerData"></v-header>
        <v-container :types="1">
            <div class="banner-img">
                <v-swiper :opts="swiperOpts" :dataVal="banner"></v-swiper>
            </div>

            <!--block-->
            <!--<div class="block">-->
                <!--<div class="block-title">-->
                    <!--<div class="jj-title">-->
                        <!--<div class="jj-tag">体验宝</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="block-contain">-->
                    <!--<ul class="jj-ul">-->
                        <!--<li class="jj-li" v-for="(item,index) in listDataTiyan">-->
                            <!--<div class="jj-li-left">-->
                                <!--<p class="jj-num">{{item.num}}<span>%</span></p>-->
                                <!--<p>{{item.numDes}}</p>-->
                            <!--</div>-->
                            <!--<div class="jj-li-right" style="width: 2.6rem; overflow: hidden">-->
                                <!--<p class="jj-title">{{item.name}}</p>-->
                                <!--&lt;!&ndash;因为有空格的所以用v-html绑&ndash;&gt;-->
                                <!--<p class="jj-des" v-html="item.nameDes"></p>-->
                            <!--</div>-->
                            <!--<div class="jj-li-right-btn">-->
                                <!--<button>提取收益</button>-->
                            <!--</div>-->
                        <!--</li>-->
                    <!--</ul>-->
                <!--</div>-->
            <!--</div>-->
            <!--block-->


            <!--block-->
            <div class="block">
                <div class="block-title">
                    <div class="jj-title"><div class="bg-tag01"></div>{{huoqi.title}} - <span>{{huoqi.desc}}</span></div>
                </div>
                <div class="block-contain">
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in huoqi.contents">
                            <div class="jj-li-left">
                                <p class="jj-num">{{(item.profit * 100).toFixed(2)}}<span>%</span></p>
                                <p>七日年化收益率</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.title}}<span class="tag">{{item.tag || '灵活配置'}}</span></p>
                                <p class="jj-des">{{item.desc}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--block-->



            <!--block-->
            <div class="block">
                <div class="block-title">
                    <div class="jj-title">
                        <div class="bg-tag02"></div>{{dingqi.title}} - <span>{{dingqi.desc}}</span>
                        <span class="more">查看全部产品<i></i></span>
                    </div>
                </div>
                <div class="block-contain">
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in dingqi.contents">
                            <div class="tagbg" v-if="item.status"></div>
                            <div class="jj-li-left">
                                <p class="jj-num">{{(item.profit*100).toFixed(2)}}<span>%</span></p>
                                <p>预期年化收益率</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.title}}<span class="tag" v-if="item.tag">{{item.tag}}</span></p>
                                <p class="jj-des">{{item.desc}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--block-->




            <!--block-->
            <div class="block">
                <div class="block-title">
                    <div class="jj-title">
                        <div class="bg-tag03"></div>
                        {{sinazy.title}} - <span>{{sinazy.desc}}</span>
                        <!--<span class="more">查看全部产品<i></i></span>-->
                    </div>
                </div>
                <div class="block-contain">
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in sinazy.contents">
                            <div class="tagbg" v-if="item.status"></div>
                            <h5 class="jj-h5">{{item.title}}</h5>
                            <div style="overflow: hidden">
                                <div class="jj-li-left">
                                    <p class="jj-num">{{(item.profit*100).toFixed(2)}}<span>%</span></p>
                                    <p>七日年化收益率</p>
                                </div>
                                <div class="jj-li-middle">
                                    <p class="jj-num">{{item.time_limit}}个月</p>
                                    <p>投资期限</p>
                                </div>
                                <div class="jj-li-s-right">
                                    <p class="jj-num">{{item.amount}}元</p>
                                    <p>投资期限</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--block-->


            <!--block-->
            <!-- <div class="block">
                <div class="block-title">
                    <div class="jj-title">热门投资</div>
                </div>
                <div class="block-contain">
                    <div class="btns">
                        <a href="#">长期</a>
                        <a href="#">中期</a>
                        <a href="#">短期</a>
                    </div>
                </div>
            </div> -->
            <!--block-->

        </v-container>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    import VSwiper from '../../components/plug/swiper/swiper.vue'
    import VContainer from '../../components/layout/container/container.vue'
    const RES_OK = 0;  //请求成功
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
                headerData:{
                    name: "定期理财",
                    backBtn: false
                },
                swiperOpts:{
                    pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    speed:800,
                    paginationClickable: true,
                    loop: true,
                    autoplay: 4000,
                },
                banner:[],
                huoqi:'',
                dingqi:'',
                sinazy:'',
            }
        },
        created(){
            this.$nextTick(() => {
                this.$http({
                    port : 'getFixIndex',
                    openLoader:true
                }).then((res)=>{
                    if(res.code === RES_OK){
                        this.banner = res.data[0].contents.map(item => {
                            return {
                                imgSrc:item.image,
                                href:item.url ? item.url : 'JavaScript:;'
                            }
                        })
                        this.huoqi = res.data[1];
                        this.dingqi = res.data[2];
                        this.sinazy = res.data[3];
                    }else{
                        Toast(res.msg)
                    }
                })
            })
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        display: flex;
        flex-direction: column;
        .banner-img{
            height: 3.5rem;
            margin-bottom: .13rem;
            .common-swiper .swiper-container {
                height: 3.5rem !important;
            }
            img{
                width: 100%;
                height: 3.5rem;
            }
        }
        .block{
            margin-bottom: .14rem;
            background: #fff;
            overflow: hidden;
            .block-title{
                height: .66rem;
                border-bottom: 1px solid #eee;
                /*padding: 0 0.2rem;*/
                line-height: .66rem;
                overflow: hidden;
                .jj-title{
                    font-size: .28rem;
                    color: #333;
                    padding-left: .6rem;
                    position: relative;
                    .bg-tag01,.bg-tag02,.bg-tag03{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: .6rem;
                        height: .66rem;
                    }
                    .bg-tag01{
                        background: url("tag01.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    .bg-tag02{
                        background: url("tag02.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    .bg-tag03{
                        background: url("tag03.png") no-repeat;
                        background-size: 100% 100%;
                    }
                    .jj-tag{
                        width: 1rem;
                        margin-top: .18rem;
                        line-height: .3rem;
                        border: 1px solid #ff9f64;
                        border-radius: 2px;
                        font-size: .2rem;
                        color: #ff923b;
                        text-align: center;
                    }
                    span{
                        font-size: .22rem;
                        color: #959db0;
                        &.more{
                            float: right;
                            padding-right: .2rem;
                            i{
                                display: inline-block;
                                width: .14rem;
                                height: .26rem;
                                background: url("./btnbg.png") no-repeat;
                                background-size: 100% 100%;
                                margin-left: .1rem;
                                position: relative;
                                top: .02rem;
                            }
                        }
                    }
                }
            }
            .block-contain{
                .jj-ul{
                    .jj-li{
                        overflow: hidden;
                        padding: 0.4rem 0;
                        font-size: .24rem;
                        color: #666;
                        border-bottom: 1px dashed #eee;
                        position: relative;
                        .tagbg{
                            position: absolute;
                            right: .34rem;
                            top: .4rem;
                            width: 1rem;
                            height: 1rem;
                            background: url("icon01.png") no-repeat;
                            background-size: 100% 100%;
                        }
                        &:nth-last-child(1){
                            border-bottom: none;
                        }
                        .jj-h5{
                            font-size: .26rem;
                            color: #333;
                            padding: 0 .2rem;
                            margin-top: -.1rem;
                            margin-bottom: .2rem;
                        }
                        .jj-li-left{
                            float: left;
                            border-right: 1px solid #eee;
                            /*padding-right: .4rem;*/
                            height: 1.2rem;
                            width: 2.7rem;
                            text-align: center;
                            .jj-num{
                                color: #f44e51;
                                font-size: 0.56rem;
                                height: 0.8rem;
                                span{
                                    font-size: .24rem;
                                    color: #999;
                                }
                            }
                        }
                        .jj-li-right{
                            float: left;
                            padding-left: .4rem;
                            .jj-title{
                                color: #333;
                                font-size: 0.4rem;
                                height: 0.8rem;
                                padding-top: .1rem;
                                width: 4.4rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                                .tag{
                                    display: inline-block;
                                    font-size: .24rem;
                                    color: #ff8383;
                                    background: #ffe8e8;
                                    position: relative;
                                    top:-.05rem;
                                    margin-left: .05rem;
                                    padding: .05rem;
                                }
                            }
                            .jj-des{
                                width: 4.4rem;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }

                        .jj-li-right-btn{
                            float: right;
                            padding: .4rem .4rem 0 0;
                            button{
                                color: #fff;
                                background: #ff8a43;
                                font-size: .24rem;
                                border: none;
                                height: .6rem;
                                border-radius: 4px;
                                padding: 0 .3rem;
                            }
                        }
                        .jj-li-middle{
                            float: left;
                            width: 2.3rem;
                            height: 1.2rem;
                            text-align: center;
                            border-right: 1px solid #eee;
                            .jj-num{
                                line-height: 0.8rem;
                            }
                        }
                        /*真神奇，不设置浮动就会自动填充剩余的部分*/
                        .jj-li-s-right{
                            height: 1.2rem;
                            text-align: center;
                            .jj-num{
                                line-height: 0.8rem;
                            }
                        }
                    }
                }
                .btns{
                    padding: .24rem .6rem;
                    display: flex;
                    a{
                        flex: 1;
                        text-decoration: none;
                        display: block;
                        border: 1px solid #ff8a43;
                        color: #ff8a43;
                        font-size: .24rem;
                        text-align: center;
                        line-height: .58rem;
                        border-radius: 4px;
                        background: url("./linebg.jpg") no-repeat;
                        background-size: 100% 100%;
                        &:nth-child(2){
                            margin: 0 .15rem;
                        }
                    }
                }
            }
        }
    }
</style>
