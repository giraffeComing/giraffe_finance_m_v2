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
            },
//            生成eachart配置项数据
            draw:function (i) {
                this.arr=this._getAxisData(i)
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
                                data: this.arr.yAxis
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
                            data: this.arr.xAxis,
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
                            min : (Math.ceil((this.arr.min-0.1)*100)/100).toFixed(1), //Math.floor(datas.min),
                            max : (Math.ceil((this.arr.max+0.1)*100)/100).toFixed(1), //Math.ceil(datas.max),
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
            }
        },
        mounted:function () {
            this.$http({
                port : 'getSfbIncomeRatio',      // 接口port
                url : '',  // 请求完整url 设置此项后 port 失效
                method: 'get',                      // 请求方式 默认 get
                openLoader:true                     // 是否开启loading 默认关闭
            }).then((res)=>{
                if(res.code==0){
                    this.draw(res.data)
                }

            });
        },
        created:function(){
            this.draw(this.mockdata)
        },
        data () {
            return {
                data:'',
                mockdata:[
//                    {"date":"08-03","incomeratio":"1.0140","hf_incomeratio":"2.1135","date2":"2017-08-03"},
//                    {"date":"08-03","incomeratio":"2.0140","hf_incomeratio":"3.1135","date2":"2017-08-03"},
//                    {"date":"08-03","incomeratio":"3.0140","hf_incomeratio":"1.1135","date2":"2017-08-03"},
//                    {"date":"08-03","incomeratio":"4.0140","hf_incomeratio":"4.1135","date2":"2017-08-03"},
//                    {"date":"08-03","incomeratio":"2.0140","hf_incomeratio":"3.1135","date2":"2017-08-03"},
//                    {"date":"08-03","incomeratio":"3.0140","hf_incomeratio":"1.1135","date2":"2017-08-03"},
//                    {"date":"08-03","incomeratio":"4.0140","hf_incomeratio":"4.1135","date2":"2017-08-03"}
                ],
                echartData:'',
                arr:''
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .charts{
        padding: .45rem .25rem;
    }
</style>
