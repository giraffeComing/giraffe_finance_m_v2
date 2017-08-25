<!-- indicator 组件 -->
```
一、 引入插件 import Indicator from '../../components/common/indicator'

二、参数配置调用
    1、open
    Indicator.open({
        text: '加载中', // 文字可选 默认空
        spinnerColor : '#fff', // 默认#fff
        size:'.32rem' //默认 .32rem
    });
    
    使用默认样式可只传 text:string 或者 空
    Indicator.open('加载中');
    Indicator.open();
    
    2、close
    Indicator.close()
    
```
