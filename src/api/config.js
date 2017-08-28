/**
 * Created by pengfei25 on 2017/8/21.
 */

// 是否开发环境
const isDev = process.env.NODE_ENV == "development";
const devUri = 'http://jr.sina.cn:81/public/sina_finance_api/web/index.php/apife/';

const config = {
    //接口路径
    PORT_URI: isDev ? devUri : devUri,

    //登录
    login(url){
        if(!url) return;
        window.location.href = `${devUri}ssoLogin?p=${url}`
    },

    loginOut(url){
        if(!url) return;
        window.location.href = `${devUri}loginOut?p=${url}`
    }

};
export default config;
