/**
 * Created by pengfei25 on 2017/7/21.
 */

import Vue from 'vue'
import Dialog from './Dialog'

var DialogConstructor = Vue.extend(Dialog);

var instance;

const closeMessageBox = () => {
    instance.visible = false;

    setTimeout(() => {
        instance.rendered = false;
        instance.$destroy();
        instance.$el.remove();
        instance = null;
    }, 300);
};

const MessageBox = (option) => {

    if (!instance) {
        instance = new DialogConstructor({
            el: document.createElement('div')
        });

        document.body.appendChild(instance.$el);

        Object.assign(instance,option);

        instance.hideDialog = function (action) {
            let isCallBack = instance.callback && typeof instance.callback === 'function';
            if(action !== 'cancel' && isCallBack){

                instance.callback();
            }
            closeMessageBox()
        };

        Vue.nextTick(() => {
            instance.visible = true;
            setTimeout(()=>{

                let clientHeight = document.documentElement.clientHeight;
                let dialogHeight = instance.$el.children[1].clientHeight;

                instance.offtop = (clientHeight - dialogHeight)/2 + 'px';
            },10);
        });
    }
};

var defaults = {
  okTxt: '确定'
};
MessageBox.alert = function (option) {
    const {topic, title,okTxt, message, textAlign} = Object.assign({} ,defaults,option);;
    return MessageBox({
        type:'alert',
        topic,
        title,
        okTxt,
        message,
        textAlign
    })
};
MessageBox.confirm = function (option) {
    const {topic, title,okTxt, message, textAlign,callback} = Object.assign({} ,defaults,option);;
    return MessageBox({
        type:'confirm',
        topic,
        title,
        okTxt,
        message,
        textAlign,
        callback
    })
};
export default MessageBox;
export { MessageBox };
