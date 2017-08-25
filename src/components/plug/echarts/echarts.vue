<template>
    <div ref="echarts" :style="echartSize"></div>
</template>
<script>
    import echarts from 'echarts'
    export default{
        name:'ECharts',
        data() {
            return {
                myChart:'',
            };
        },
        props: {
            opts: {
                type : Object
            },
            echartSize:{
                type : Object
            }
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(this.$refs.echarts);
            // 制定图表的配置项和数据
            this.myChart.setOption(this.opts);
        },
        watch:{
            opts:function () {
//                数据变了之后重新绘制eachart
                this.myChart.setOption(this.opts);
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>