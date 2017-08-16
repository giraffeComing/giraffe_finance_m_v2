<template>
    <div>
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="page-view" ref="comBodyJijin">
            <div>
                <div class="banner">
                    <img src="./banner.jpg" alt="">
                </div>
                <!--货币基金，要独立拆分组件-->
                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-title">货币基金-<span>低风险</span></div>
                    </div>
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listDataOne" @click="clickLi(item)">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.year_incratio}}</p>
                                <p>近一年收益率</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.fund_name}}</p>
                                <p class="jj-des">{{item.tuijian}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="z-more" @click="lookMore">查看更多</div>

                <!--混合基金，要独立拆分组件-->
                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-title">混合基金-<span>中低风险</span></div>
                    </div>
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listDataTwo" @click="clickLi(item)">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.year_incratio}}</p>
                                <p>近一年收益率</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.fund_name}}</p>
                                <p class="jj-des">{{item.tuijian}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="z-more" @click="lookMore">查看更多</div>

                <!--证券基金，要独立拆分组件-->
                <div class="bg-fff">
                    <div class="jj">
                        <div class="jj-title">证券基金-<span>风险，高收益</span></div>
                    </div>
                    <ul class="jj-ul">
                        <li class="jj-li" v-for="(item,index) in listDataThree" @click="clickLi(item)">
                            <div class="jj-li-left">
                                <p class="jj-num">{{item.year_incratio}}</p>
                                <p>近一年收益率</p>
                            </div>
                            <div class="jj-li-right">
                                <p class="jj-title">{{item.fund_name}}</p>
                                <p class="jj-des">{{item.tuijian}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="z-more" @click="lookMore">查看更多</div>
                <div class="footerbg"></div>
                <div class="h50"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    //    better scroller
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {
            VHeader
        },
        props:{
            opts:''
        },
        data () {
            return {
                headerData:{
                    name: "基金",
                    backBtn: true
                },
//                测试接口
                API_ROOT : 'http://172.16.59.143:8089',
                JijinScroll:'',
                listDataOne:[],
                listDataTwo:[],
                listDataThree:[],
            }
        },
        created(){

            //并发三个接口，并在请求全部结束后实例化BS
            this.axios.all([this.getTypeOne(), this.getTypeTwo(),this.getTypeA()])
                .then(
                    this.axios.spread((typeone, typetwo,typea)=>{
//                        请求回来的数据截取前三个
                        this.listDataOne = typeone.data.data.slice(0,3);
                        this.listDataTwo = typetwo.data.data.slice(0,3);
                        this.listDataThree = typea.data.data.slice(0,3);

//                  $nextTick这个方法保证了dom结构加载完成之后再执行
                        this.$nextTick(function(){
                            this.$refs.comBodyJijin.style.height=this.$parent.$el.firstChild.offsetHeight+'px'
                            setTimeout(()=>{
                                this._JijinScroll()
                            },10)
                        });

                    }));



        },
        methods:{
            getTypeOne() {
                return this.axios.get(this.API_ROOT+'/api/productfund/index?type=1');
            },
            getTypeTwo() {
                return this.axios.get(this.API_ROOT+'/api/productfund/index?type=2');
            },
            getTypeA() {
                return this.axios.get(this.API_ROOT+'/api/productfund/index?type=A');
            },
            _JijinScroll() {
                this.JijinScroll = new BScroll(this.$refs.comBodyJijin,{
                    click: true,
                    deceleration: 0.003,
                });
            },
            lookMore:function () {
                this.$router.push({
                    path:'/home/jijinlist',
                })
            },
            //点击之后将item做为参数传递到详情页
            clickLi:function (i) {
                this.$router.push({
                    path:'/home/detail',
                    query:{goodId:i.fund_code}
                })
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        margin-top: 1rem;
    }

    .banner{
        img{
            width: 100%;
            height: 2.6rem;
        }
    }
    .jj{
        padding: 0 0.2rem;
        height: .66rem;
        line-height: .66rem;
        margin-top: .3rem;
        overflow: hidden;
        border-bottom: 1px solid #eee;

        .jj-title{
            font-size: .28rem;
            color: #333;
            span{
                font-size: .24rem;
                color: #f8b551;
            }
        }

    }
    .jj-ul{
        margin-top: .4rem;
        .jj-li{
            overflow: hidden;
            padding: 0.4rem 0.9rem;
            /*margin-bottom: 0.8rem;*/
            font-size: .26rem;
            color: #666;
            border-bottom: 1px dashed #eee;
            .jj-li-left{
                float: left;
                border-right: 1px solid #eee;
                padding-right: .5rem;
                .jj-num{
                    color: #f44e51;
                    font-size: 0.6rem;
                    height: 0.8rem;
                }
            }
            .jj-li-right{
                .jj-title{
                    color: #333;
                    font-size: 0.4rem;
                    height: 0.8rem;
                    padding-top: .1rem;
                    width: 2.7rem;
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
                    width: 2.7rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                padding-left: .5rem;
                float: right;
            }
        }
    }

    .bg-fff{
        background: #fff;
    }
    .z-more{
        height: .8rem;
        line-height: .8rem;
        margin-top: -1px;
        color: #ef4353;
        text-align: center;
        font-size: .28rem;
        background: url("./morebg.jpg") no-repeat;
        background-size: 100% 100%;
        border-top:1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .h50{
        height: 2rem;
    }
    .z-more-bottom{
        padding-bottom: 1.4rem;
    }
    .jj-tags{
        display: flex;
        justify-content: space-between;
        padding: 0 .2rem;
        margin-top: .3rem;
        div{
            width: 2.3rem;
            height: 0.7rem;
            line-height: 0.7rem;
            font-size: 0.28rem;
            text-align: center;
            color: #fff;
            border-radius: 4px;
            &.tag-bg01{
                background: #f8b551;
            }
            &.tag-bg02{
                background: #d2c19b;
            }
            &.tag-bg03{
                background: #cbcbcb;
            }
        }
    }
</style>
