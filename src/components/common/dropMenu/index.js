/**
 * Created by pengfei25 on 2017/7/21.
 */

import Vue from 'vue'
import dropDown from './dropMenu.vue'

var DropConstructor = Vue.extend(dropDown);

var instance;

const closeDropMenu = () => {
    instance.visible = false;

    setTimeout(() => {
        instance.rendered = false;
        instance.$destroy();
        instance.$el.remove();
        instance = null;
    }, 300);
};

const DropMenu = (target,option) => {

    if (!instance) {
        instance = new DropConstructor({
            el: document.createElement('div')
        });

        document.body.appendChild(instance.$el);

        console.log(target)

        Object.assign(instance,{target:target},option);

        console.log(target)
        console.log(instance)

        instance.hideDropMenu = function () {
            let isCallBack = instance.callback && typeof instance.callback === 'function';
            if(isCallBack){

                instance.callback();
            }
            closeDropMenu()
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
export default DropMenu;
export { DropMenu };
