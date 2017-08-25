<template>
    <div class="com-footer">
        <ul>
            <li>
                <router-link :to="{ path: '/index' }">
                    <span class="nav01">首页</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/licai' }">
                    <span class="nav02">定期理财</span>
                </router-link>
            </li>
            <li>
                <router-link :to="{ path: '/my' }">
                    <span class="nav03">我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data () {
            return {}
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .com-footer{
        width: 100%;
        height: 1.1rem;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        line-height: 1.65rem;
        background: #fff;
        box-shadow: 0 -3px 4px rgba(0,0,0,.05);
        z-index: 999;
        ul{
            display: flex;
            li{
                text-align: center;
                &:first-child{
                    width: 2rem;
                }
                &:last-child{
                    width: 1.9rem;
                }
                &:nth-child(2){
                    flex: 1;
                }
                .nav01{
                    background: url("./nav_01.png") no-repeat center .15rem;
                    background-size: .47rem .47rem;
                }
                .nav02{
                    background: url("./nav_02.png") no-repeat center .15rem;
                    background-size: .44rem .44rem;
                }
                .nav03{
                    background: url("./nav_03.png") no-repeat center .15rem;
                    background-size: .42rem .48rem;
                }
                a{
                    text-decoration: none;
                    color: #5e5e5e;
                    display: block;
                    font-size: .22rem;
                    span{
                        display: block;
                    }
                    &.router-link-active{
                        color: #f44e50 !important;
                        .nav01{
                            background: url("./nav_active01.png") no-repeat center .15rem;
                            background-size: .47rem .47rem;
                        }
                        .nav02{
                            background: url("./nav_active02.png") no-repeat center .15rem;
                            background-size: .44rem .44rem;
                        }
                        .nav03{
                            background: url("./nav_active03.png") no-repeat center .15rem;
                            background-size: .42rem .48rem;
                        }
                    }
                }
            }
        }
    }
</style>
