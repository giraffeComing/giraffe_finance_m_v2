<!-- axios 接口组件封装 -->
```
一、 全局引入插件 (main.js 已引入)
       import http from './api/index' 
       Vue.prototype.$http = http;

二、参数配置调用
    this.$http({
        port : 'getRecommendProducts',      // 接口port 
        url : 'http://jr.sina.com.cn/api',  // 请求完整url 设置此项后 port 失效
        method: 'get',                      // 请求方式 默认 get
        data : {
            type : '1'                      // 其他参数
        },
        openLoader:true                     // 是否开启loading 默认关闭
    }).then((res)=>{
        console.log(res)                    // 返回请求结果
    })
    
三、备注
    如需要多线程请求 可以用 Promise.all() 或其他方法实现；
    config.js  暂时只配置了接口路径前缀
```
