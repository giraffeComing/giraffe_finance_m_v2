/**
 * Created by pengfei25 on 2017/7/25.
 */
import Vue from 'vue';
import IndicatorTheme from './indicator'

var IndicatorConstructor = Vue.extend(IndicatorTheme);
var instance;

const open = (options) => {
    if (!instance) {
        instance = new IndicatorConstructor({
            el: document.createElement('div')
        });
    }
    if (instance.visible) return;

    var defaults = {
        text: '',
        spinnerColor:'#fff',
        size:'.32rem'
    };

    if(typeof options === 'string'){
        instance = Object.assign(instance,defaults,{text:options})
    }else{
        instance = Object.assign(instance,defaults,options)
    }

    instance.hideIndicator = close;

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
        instance.visible = true;
    });
};

const close = ()=> {
    if (instance) {
        instance.visible = false;
        instance.$destroy();
        instance.$el.remove();
        instance = null;
    }
};
const Indicator =  {
    open  : open,
    close : close
};

export default Indicator;
export { Indicator };
