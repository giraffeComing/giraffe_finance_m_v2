<template>
    <div class="charts">
        <e-charts :opts="echartData.value" :echartSize="echartData.size"></e-charts>
    </div>
</template>

<script>
    import ECharts from '../../components/plug/echarts/echarts.vue'
    export default {
        name: '',
        components: {
            ECharts
        },
        methods:{
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
        data () {
            return {
                data:'',
                mockdata:[
                    {"date":"08-03","incomeratio":"1.0140","hf_incomeratio":"2.1135","date2":"2017-08-03"},
                    {"date":"08-03","incomeratio":"2.0140","hf_incomeratio":"3.1135","date2":"2017-08-03"},
                    {"date":"08-03","incomeratio":"3.0140","hf_incomeratio":"1.1135","date2":"2017-08-03"},
                    {"date":"08-03","incomeratio":"4.0140","hf_incomeratio":"4.1135","date2":"2017-08-03"}
                ],
                echartData:''
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .charts{
        padding: .45rem .25rem;
    }
</style>
