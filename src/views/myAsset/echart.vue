<template>
  <div class="echartWrap" v-if="rendered">
    <div :style="getSize" ref="chartWrap"></div>
    <div class="info-all">{{chartOption.option.series[0].name}} <span>{{chartOption.total}}</span></div>
    <div class="info-list">
      <div class="item" v-for="(item,index) in chartOption.option.series[0].data">
        <i :style="{backgroundColor:chartOption.option.color[index]}"></i>
        <span class="name">{{item.name}}</span>
        <span>{{setVal[index]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ECharts from 'echarts/dist/echarts.simple.min'
  
  export default {
    data () {
      return {
        rendered:false,
        newValue: [],
        allValue:0
      }
    },
    props: {
      chartOption: "",
        refreshEchart:""
    },
    computed:{
      getSize:function () {
        const chartHeight = this.chartOption.style.height || '300px';
        const unit = chartHeight.indexOf('rem');
        var deviceWidth = document.documentElement.clientWidth || document.body.clientWidth;
        
        if(unit > -1){
          const num = chartHeight.substring(0,unit);
          if(deviceWidth > 750) deviceWidth = 750;
          this.chartOption.style.height = deviceWidth/750*(num*100)+'px';
        }
        
        return {
          width:this.chartOption.style.width || '100%',
          height:this.chartOption.style.height || '300px'
        };
      },
      getAllVal:function () {
        for(var key in this.chartOption.chartData){
          this.allValue += this.chartOption.chartData[key].value;
        }
        return this.allValue.toFixed(2);
      },
      setVal:function () {
        for(var key in this.chartOption.option.series[0].data){
          this.newValue[key] = this.chartOption.option.series[0].data[key].value.toFixed(2);
        }
        return this.newValue;
      }
    },
    mounted:function () {
      const wrap = this.$refs.chartWrap;
      let chart = ECharts.init(wrap);
      
      chart.setOption(this.chartOption.option);
      
      window.addEventListener('resize', function () {
        chart.resize();
      });
      
    },
    created() {
      this.rendered = true;
    },
      watch:{
          refreshEchart:function () {

              const wrap = this.$refs.chartWrap;
              let chart = ECharts.init(wrap);

              chart.setOption(this.chartOption.option);
          }
      }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .echartWrap{
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
    
    .info-all{
      display: block;
      position: absolute;
      top:32.5%;
      left: 0;
      width: 100%;
      text-align: center;
      pointer-events: none;
      color: #999;
      font-size: .3rem;
      line-height: .38rem;
      span{
        display: block;
        color: #f14d4c;
      }
    }
    .info-list{
      position: absolute;
      left: 0;
      width: 100%;
      bottom: 5%;
      padding-left: 10%;
      &:before,
      &:after {
        content:"";
        display: table;
      }
      &:after {
        clear:both;
        overflow: hidden;
      }
      .item{
        float: left;
        width: 50%;
        line-height: .4rem;
        padding:.1rem;
        font-size: .3rem;
        
        i{
          display: inline-block;
          width: .2rem;
          height:.2rem;
          vertical-align: top;
          margin-top: .08rem;
          margin-right: .1rem;
          border-radius: .04rem;
        }
        span{
          color: #999;
          font-size: .26rem;
        }
      }
    }
  }

</style>
