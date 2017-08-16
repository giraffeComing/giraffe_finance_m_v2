<template>
    <div class="page-view">
        <v-header :opts="headerData"></v-header>
        <v-container :types="1">
            <div class="banner-img"><img src="./banner.jpg" alt=""></div>

            <!--block-->
            <div class="block">
                <div class="block-title">
                    <div class="jj-title">
                        <div class="jj-tag">体验宝</div>
                    </div>
                </div>
                <div class="block-contain">
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listDataTiyan">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.num}}<span>%</span></p>
                                <p>{{item.numDes}}</p>
                            </div>
                            <div class="jj-li-right" style="width: 2.6rem; overflow: hidden">
                                <p class="jj-title">{{item.name}}</p>
                                <!--因为有空格的所以用v-html绑-->
                                <p class="jj-des" v-html="item.nameDes"></p>
                            </div>
                            <div class="jj-li-right-btn">
                                <button>提取收益</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--block-->


            <!--block-->
            <div class="block">
                <div class="block-title">
                    <div class="jj-title">活期-<span>活期产品</span></div>
                </div>
                <div class="block-contain">
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listData">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.num}}<span>%</span></p>
                                <p>{{item.numDes}}</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.name}}<span class="tag">灵活配置</span></p>
                                <!--因为有空格的所以用v-html绑-->
                                <p class="jj-des" v-html="item.nameDes"></p>
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
                        长期理财-<span>新浪自营 稳定安全</span>
                        <span class="more">查看全部产品<i></i></span>
                    </div>
                </div>
                <div class="block-contain">
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listDataLong">
                            <div class="tagbg" v-if="item.state"></div>
                            <h5 class="jj-h5">{{item.h5}}</h5>
                            <div style="overflow: hidden">
                                <div class="jj-li-left">
                                    <p class="jj-num">{{item.num}}<span>%</span></p>
                                    <p>{{item.numDes}}</p>
                                </div>
                                <div class="jj-li-middle">
                                    <p class="jj-num">{{item.date}}</p>
                                    <p>{{item.datedes}}</p>
                                </div>
                                <div class="jj-li-s-right">
                                    <p class="jj-num">{{item.price}}</p>
                                    <p>{{item.pricedes}}</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!--block-->


            <!--block-->
            <div class="block">
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
            </div>
            <!--block-->

        </v-container>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFooter from '../../components/layout/footer/footer.vue'
    import VContainer from '../../components/layout/container/container.vue'
    export default {
        name: '',
        components: {
            VHeader,
            VFooter,
            VContainer
        },
        created(){
            this.$nextTick(()=>{
                this.listDataTiyan=[
                    {
                        "id":"1",
                        "num":"3.8",
                        "numDes":"预期年化收益率",
                        "name":"体验金专用",
                        "nameDes":"体验金以3.8%计息 "
                    }
                ];
                this.listData=[
                    {
                        "id":"1",
                        "num":"4.3",
                        "numDes":"七日年化收益率",
                        "name":"旺财",
                        "nameDes":"随时申请转出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险公司承诺"
                    }
                ];
                this.listDataLong=[
                    {
                        "h5":"新浪浪淘金十期",
                        "id":"1",
                        "num":"4.3",
                        "numDes":"七日年化收益率",
                        "name":"旺财",
                        "nameDes":"随时申请转出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险公司承诺",
                        "date":"12个月",
                        "datedes":"投资期限",
                        "price":"100元",
                        "pricedes":"投资期限",
                        "state":true
                    },
                    {
                        "h5":"新浪财富赢家计划7期",
                        "id":"2",
                        "num":"9.0",
                        "numDes":"七日年化收益率",
                        "name":"旺财",
                        "nameDes":"随时申请转出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保险公司承诺",
                        "date":"18个月",
                        "datedes":"投资期限",
                        "price":"100元",
                        "pricedes":"投资期限",
                        "state":false
                    }
                ]
            })

        },
        data () {
            return {
                headerData:{
                    name: "定期理财",
                    backBtn: false
                },
                listDataTiyan:'',
                listData:'',
                listDataLong:'',
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        display: flex;
        flex-direction: column;
        .banner-img{
            height: 3.5rem;
            margin-bottom: .13rem;
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
                padding: 0 0.2rem;
                line-height: .66rem;
                overflow: hidden;
                .jj-title{
                    font-size: .28rem;
                    color: #333;
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
                        padding: 0.5rem 0;
                        font-size: .24rem;
                        color: #666;
                        border-bottom: 1px dashed #eee;
                        position: relative;
                        .tagbg{
                            position: absolute;
                            right: .34rem;
                            top: .2rem;
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
