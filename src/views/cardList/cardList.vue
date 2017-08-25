<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <section>
            <ul>
                <li :style="{background:item.bank_colour}" v-for="item in listData">
                    <img :src="item.bank_logo" alt="" class="logo">
                    <i>快捷支付</i>
                    <div class="ic">
                        <h3>{{item.bank_name}}</h3>
                        <p>{{item.bank_card_no}}</p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    export default {
        name: '',
        components: {
            VHeader
        },
        created:function () {
            this.$http({
                port: 'myBankInfo',      // 接口port
                url: '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader: true                     // 是否开启loading 默认关闭
            }).then((res) => {
                if(res.code==0){
                    this.listData = res.data
                }
            })
        },
        data () {
            return {
                headerData:{
                    name: "银行卡",
                    backBtn: true
                },
                listData:[
//                    {
//                        "bank_card_no":"**** **** **** 2681",
//                        "bank_name":"中国农业银行",
//                        "bank_code":"ABC",
//                        "bank_logo":"",
//                        "bank_colour":"#65c18a"
//                    },
//                    {
//                        "bank_card_no":"**** **** **** 8057",
//                        "bank_name":"招商银行",
//                        "bank_code":"CMB",
//                        "bank_logo":"",
//                        "bank_colour":"#65c18a"
//                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        padding-top: .9rem;
    }
    header{ height:.96rem; padding:.23rem .2rem; background:#fff; box-shadow:0 2px 0 #e9ebed; }
    header .back{ float:left; height:.5rem; width:.5rem; }
    header .back:before{ content:''; display:block; border:solid .02rem #c8c8c8; width:.3rem; height:.3rem; border-width:0 0 .02rem .02rem; transform:rotate(45deg); margin:.1rem; }
    header h1{ text-align:center; font-size:.36rem; }
    section{ margin:.2rem; }
    section li{ height:2rem; margin-bottom:.2rem; background:#fff; color:#fff; position:relative; border-radius:.1rem; }
    section li:before{ content:''; width:.94rem; height:.94rem; position:absolute; left:.38rem; top:.5rem; background-size:.94rem auto; border-radius:50%; }
    section li .ic{ padding:0.46rem 0 0 1.6rem; line-height:.5rem; }
    section li .ic h3{ font-size:.3rem; }
    section li .ic p{ }
    section li.add p{ color:#949dc3; font-size:.3rem; padding:.8rem 0 0 1.6rem; }
    section li.psbc{ background:#65c18a; }
    section li.comm{ background:#5792cf; }
    section li.icbc{ background:#ff6a63; }
    section li.psbc:before{ background-image:url("./psbc-icon.png") }
    section li.comm:before{ background-image:url("./comm-icon.png") }
    section li.icbc:before{ background-image:url("./icbc-icon.png") }
    section li.add:before{ background-image:url("./add.png"); background-size:1rem auto; width:1rem; height:1rem; }
    section li i{ opacity:.5; font-size:.24rem; font-style:normal; position:absolute; right:.26rem; top:.14rem; }
    .logo{
        width:.94rem; height:.94rem; position:absolute; left:.38rem; top:.5rem; background-size:.94rem auto; border-radius:50%;
    }
</style>
