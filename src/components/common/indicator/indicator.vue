<template>
    <transition name="fade">
        <div class="indicator" v-show="visible">
            <div class="indicator-wrapper">
                <div class="indicator-spin">
                    <div class="spinner-snake" :style="setStyle()"></div>
                </div>
                <span class="indicator-text" v-show="text">{{text}}</span>
            </div>
            <div class="indicator-mask" @click="hideIndicator()"></div>
        </div>
    </transition>
</template>

<script>
    var defaults = {
        visible: false,
        text: '',
        spinnerColor:'',
        size:''
    };
    export default {
        data() {
            return {
              ...defaults
            };
        },
        created() {
            this.rendered = true;
        },
        methods: {
            setStyle (){
                return {
                    'border-top-color'      : this.spinnerColor,
                    'border-left-color'     : this.spinnerColor,
                    'border-bottom-color'   : this.spinnerColor,
                    'width' : this.size,
                    'height': this.size,
                }
            }
        }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .indicator{
        .indicator-wrapper {
            position: fixed;
            left: 50%;
            top:50%;
            z-index: 9999;
            padding: .2rem;
            line-height: 0;
            transform: translate(-50%, -50%);
            border-radius: .1rem;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            box-sizing: border-box;
            text-align: center;
        }
        .indicator-text {
            display: block;
            color: #fff;
            text-align: center;
            margin-top: .1rem;
            font-size: .28rem;
            line-height: .4rem;
        }
        .indicator-spin{
            display: block;
            text-align: center;
        }
        .indicator-mask {
            position: fixed;
            left: 0;
            top:0;
            z-index: 9998;
            width: 100%;
            height:100%;
            opacity: 0;
            background: transparent;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition:opacity .3s
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .spinner-snake {
        display: block;
        margin: 0 auto;
        animation: spinner-rotate 0.8s infinite linear;
        border: .04rem solid transparent;
        border-radius: 50%;
    }
    @keyframes spinner-rotate {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
</style>
