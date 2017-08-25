<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <div class="fundList" v-if="visible" ref="comBodyJijin">
            <div>
                <div class="banner">
                    <img src="./banner.jpg" alt="">
                </div>
                <v-fundBox :listData="listData"></v-fundBox>
            </div>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VFundBox from './fundBox.vue'
    //    better scroller
    import BScroll from 'better-scroll';
    export default {
        name: '',
        components: {
            VHeader,
            VFundBox
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
                visible : '',
                JijinScroll:'',
                listData : []
            }
        },
        created(){
          this.$http({
            port : 'getFundRecommend',
            data : {
              type: '2'
            }
          }).then((res)=>{
            this.visible = true;
            this.listData = res.data;
            this.$nextTick(() => {
                setTimeout(() => {
                    this._JijinScroll();
                }, 100)
            })
          })
//            Promise.all([
//
//              this.$http({
//                port : 'getfundProductList',
//                data : {
//                  type: 'A'
//                }
//              }),
//              this.$http({
//                port : 'getfundProductList',
//                data : {
//                  type: '0'
//                }
//              })
//            ]).then(([currency,blend,security])=>{
//                if(currency.code*1 == 0 && blend.code*1 == 0 && security.code*1 == 0){
//                  this.listData = [
//                    {
//                        num : 3,
//                        list : currency.data
//                    },
//                    {
//                        num : 3,
//                        list : blend.data
//                    },
//                    {
//                        num : 1,
//                        list : security.data
//                    }
//                  ];
//                  this.visible = true;
//
//                  this.$nextTick(() => {
//                      setTimeout(() => {
//                          this._JijinScroll();
//                      }, 10)
//                  })
//                }
//            });
        },
        mounted(){
        
        },
        methods:{
            _JijinScroll() {
                this.JijinScroll = new BScroll(this.$refs.comBodyJijin,{
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
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        padding-top: .9rem;
        line-height: 1.1;
    }
    
    .fundList{
        height: 100%;
        overflow: hidden;
        background: #fff;
    }

    .banner{
        img{
            width: 100%;
            height: 2.6rem;
        }
    }
</style>
