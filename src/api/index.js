/**
 * Created by pengfei25 on 2017/8/21.
 */
import axios from 'axios'
import Toast from '../components/common/toast/toast.js'
import Indicator from '../components/common/indicator/index'
import conf from './config'

const request = ((option) => {
    if (!option.url && !option.port) return;

    const RES = {
        method: option.method || "GET",
        url: option.url || conf.PORT_URI + option.port,
        // timeout: 1000,
    };

    if (RES.method.toUpperCase() == 'POST') {
        Object.assign(RES, {data: option.data});
    } else {
        Object.assign(RES, {params: option.data});
    }

    if(option.openLoader){
        Indicator.open();
    }

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (err) {
        // 对请求错误做些什么
        return Promise.reject("请求失败，请检查您的网络！");
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (res) {
        // 对响应数据做点什么
        return res;
    }, function (err) {
        // 对响应错误做点什么
        return Promise.reject("请求超时，请重试！");
    });

    return new Promise((resolve, reject) => {
        return axios(RES).then((res) => {
            Indicator.close();
            resolve(res.data);
        }).catch(function (error) {
            Indicator.close();
            //错误提示
            Toast(error);
        });
    })
});

export default request;
