<template>
    <div class="header-border">
        <div class="header-back">
            <span class="btn-back" v-if="opts.backBtn" @click="backTo"></span>
            {{opts.name}}
            <span class="tag" v-if="opts.tag">{{opts.tag}}</span>
        </div>
        <!--如果opts里有extra字段就显示额外的拓展信息，extra字段不存在的话就隐藏-->
        <div class="heder-solt" v-if="opts.extra">{{opts.extra}}</div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderBack',
        components: {},
        props:{
            opts:''
        },
        data () {
            return {}
        },
        methods: {
            backTo(){
//                通过路由返回上一页
                if(this.opts.backNum){
                    this.$router.go(this.opts.backNum)
                }else{
                    this.$router.go(-1)
                }
            },
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .header-border{
        position: fixed;
        top:0;
        width: 100%;
        color: #666;
        background: #fff;
        z-index: 999;
    }
    .heder-solt{
        height: .3rem;
        text-align: center;
        font-size: .2rem;
        margin-top: -.2rem;
        color: #a0a0a0;
    }
    .header-back{
        position: relative;
        height: .9rem;
        text-align: center;
        line-height: .9rem;
        font-size: .36rem;
        .btn-back{
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: .9rem;
            height: .9rem;
            background: url("./backbg.png") no-repeat;
            background-size: .23rem .45rem;
            background-position: .2rem center;
        }
        .tag{
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            height: .9rem;
            /*color: #5781bd;*/
            color: #333;
            font-size: .3rem;
            padding: 0 .2rem;
        }
    }
</style>
