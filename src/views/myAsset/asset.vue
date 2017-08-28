<template>
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData"></v-header>
        <e-charts :chartOption="chartOption" :refreshEchart="refreshEchart" style="margin-top: 1rem"></e-charts>
        <div class="asset-title">资产收益曲线</div>
        <v-echarts :opts="echartData.value" :echartSize="echartData.size"></v-echarts>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
//    饼图定制echart组件（和通用的echarts不一样！）
    import ECharts from './echart.vue'
    import VEcharts from '../../components/plug/echarts/echarts.vue'
    export default {
        name: '',
        components: {
            ECharts,
            VHeader,
            VEcharts
        },
        data () {
            return {
                mockdata:[
                    {"date":"08-03","incomeratio":"1.0140","hf_incomeratio":"2.1135","date2":"2017-08-03"},
                    {"date":"08-03","incomeratio":"2.0140","hf_incomeratio":"3.1135","date2":"2017-08-03"},
                    {"date":"08-03","incomeratio":"3.0140","hf_incomeratio":"1.1135","date2":"2017-08-03"},
                    {"date":"08-03","incomeratio":"4.0140","hf_incomeratio":"4.1135","date2":"2017-08-03"}
                ],
                headerData:{
                    name: "资产总览",
                    backBtn: true
                },
                refreshEchart:false,
                chartOption: {
                    total:0.00,
                    style:{
                        width:'100%',
                        height:'6rem'
                    },
                    option:{
                        color: ['#f14d4c', '#f9b552', '#d3c19b', '#e0e0e0', '#91c7ae','#749f83',  '#ca8622', '#bda29a'],
                        legend: null,
                        series: [
                            {
                                name:'总资产',
                                type:'pie',
                                center: ['50%', '40%'],
                                radius: ['35%', '60%'],
                                avoidLabelOverlap: false,
                                label: null,
                                silent: true,
                                clockwise: false,
                                labelLine: {
                                    normal: {
                                        show: false
                                    }
                                },
                                data: [
                                    {name:"私房宝",value:0},
                                    {name:"理财账户",value:0},
                                    {name:"保险账户",value:0},
                                    {name:"基金",value:0}
                                ]
                            }
                        ]
                    }

                }
            }
        },
        methods:{
            test:function () {
              this.headerData.name='ssss'
            },
//            对原始数据进行加工
            _getAxisData:function (data) {
                var _data = {
                    xAxis: [],
                    yAxis: [],
                    min  : null,
                    max  : null
                }, item, val;

                for (var i=0; i<data.length; ++i) {
                    item = data[i];
                    val  = item.incomeratio*1;

                    _data.xAxis.push(item.date);
                    _data.yAxis.push(val);

                    if (_data.min === null) {
                        _data.min = val;
                    }

                    if (_data.max === null) {
                        _data.max = val;
                    }

                    if (_data.min > val) {
                        _data.min = val;
                    }

                    if (_data.max < val) {
                        _data.max = val;
                    }
                }

                return _data;
            }

        },
        created:function(){

            this.$http({
                port : 'myUserInfo',      // 接口port
                url : '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader:true                     // 是否开启loading 默认关闭
            }).then((res)=>{

//                在echart pie中通过对refreshEchart字段进行watch来触发echarts的重绘
                this.chartOption.total=res.data.asset.total;
                this.chartOption.option.series[0].data[0].value= parseFloat(res.data.asset.sfbTotal)
                this.chartOption.option.series[0].data[1].value= parseFloat(res.data.asset.fixTotal)
//                保险现在还没有字段
                this.chartOption.option.series[0].data[2].value= 0
                this.chartOption.option.series[0].data[3].value= parseFloat(res.data.asset.fundTotal)
                this.refreshEchart=true;
                // 返回请求结果
            });


            let arr=this._getAxisData(this.mockdata)
//            canvas的绘图数据要在dom结构渲染之前生成
            this.echartData={
                size: {
                    width: '',
                    height: '300px'
                },
                value:{
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{c}',
                        confine: true,
                        padding  : [2, 4],
                        backgroundColor: 'rgba(244,70,56,1)',
                        axisPointer: {
                            lineStyle: {
                                color: '#a1a1a1'
                            }
                        }
                    },
                    legend: false,
                    series: [
                        {
                            type:'line',
                            data: arr.yAxis
//                                需要计算的y轴
//                            data: [
//                                1.014,
//                                2.014,
//                                3.014,
//                                4.014
//                            ]
                        }
                    ],
                    grid: {
                        show  : true,
                        left  : 10,
                        right : 20,
                        top   : 10,
                        bottom: 0,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
//                            需要计算的x轴
                        data: arr.xAxis,
//                        data: [
//                            "08-03",
//                            "08-04",
//                            "08-05",
//                            "08-06"
//                        ],
                        axisLabel: {
                            textStyle: {
                                color: '#808080'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: ['rgba(213,213,213,0.1)', 'rgba(242,242,242,0.1)']
                            }
                        }
                    },
                    yAxis: {
//                            需要计算的最大值最小值
//                        min : (Math.ceil((1.014-0.1)*100)/100).toFixed(1), //Math.floor(datas.min),
//                        max : (Math.ceil((4.014+0.1)*100)/100).toFixed(1), //Math.ceil(datas.max),
                        min : (Math.ceil((arr.min-0.1)*100)/100).toFixed(1), //Math.floor(datas.min),
                        max : (Math.ceil((arr.max+0.1)*100)/100).toFixed(1), //Math.ceil(datas.max),
                        type: 'value',
                        boundaryGap: false,
                        axisLabel: {
                            textStyle: {
                                color: '#808080'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#eee'
                            }
                        }
                    }
                }
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        overflow: auto;
        background: #fff;
        -webkit-overflow-scrolling: touch;
        .asset-title{
            line-height: .8rem;
            font-size: .28rem;
            color: #333;
            padding: 0 .4rem;
            margin-bottom: .4rem;
            border-bottom: 1px solid #eee;
        }
    }
</style>
