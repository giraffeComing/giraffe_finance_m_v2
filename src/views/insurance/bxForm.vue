<template>
    <!--better-scroller的ref要直接跟着一个div结构-->
    <div class="page-view">
        <!--header-->
        <v-header :opts="headerData" ref="sfHeader"></v-header>
        <div ref="comBodySf" class="scroller">
            <div>
              <div class="detail">
                <div class="titwrap" v-if="advImg">
                    <v-swiper :opts="swiperOpts" :dataVal="advImg"></v-swiper>
                </div>
                <div class="bxEnsure">
                    <h2 class="tit">保险保障</h2>
                    <div class="item" v-for="(item, key) in bxbzdata">
                        <label>{{key}}</label>
                        <span>{{item}}</span>
                    </div>
                </div>
                <div class="bxNr">
                    <h2 class="tit">保险内容</h2>
                    <div class="item" v-if="plan&&plan.type==='select'">
                       <label>{{plan.name}}</label>
                       <div class="choose">
                            <select v-model="formData.planjihua">
                                <option :value="item" v-for="(item, key) in plan.value">{{key}}</option>
                            </select>
                       </div>
                    </div>
                    <div class="item">
                        <label>生效时间</label>
                        <input type="text" :value="effectdate" class="date" readonly @click="bzDate"/>
                    </div>
                    <div class="item" v-if="expirydate&&expirydate.type==='select'">
                       <label>{{expirydate.name}}</label>
                       <div class="choose">
                            <select v-model="formData.expirydate">
                                <option :value="item" v-for="(item, key) in expirydate.value">{{key}}</option>
                            </select>
                       </div>
                    </div>
                </div>
                <div class="orderInfo">
                    <div v-if="userInfo&&userInfo.name">
                        <h2 class="tit">购买人<span class="edit" v-show="editStatu" @click="edit">{{editStatu}}</span></h2>
                        <div class="form">
                            <div class="info-item">
                                <label>{{insuer.username.name}}</label>
                                <input type="text" maxlength="6" autocomplete="off" :disabled="isDisabled" :value="userInfo.name" ref="username_inp"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.usercardnum.name}}</label>
                                <input type="text" maxlength="18" autocomplete="off" :disabled="isDisabled" :value="userInfo.cardnum" ref="usercardnum_inp"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.usertelphone.name}}</label>
                                <input type="tel"  maxlength="11" autocomplete="off" :disabled="isDisabled" :value="userInfo.phone" ref="usertelphone_inp"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.useraddress1.name}}</label>
                                <input type="text"  autocomplete="off" :disabled="isDisabled" :value="userInfo.address" ref="useraddress_inp" @click="selectUseAdress"/>                                <input type="text"  autocomplete="off" :disabled="isDisabled" :value="userInfo.address" ref="useraddress_inp" @click="selectUseAdress"/>                                                                                       
                            </div>
                            <div class="info-item">
                                <label>{{insuer.useraddress2.name}}</label>
                                <input type="text"  autocomplete="off" :disabled="isDisabled" :value="userInfo.address1" ref="useraddress1_inp"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.userbirthday.name}}</label>
                                <input type="text" class="date" autocomplete="off" :disabled="isDisabled" :value="userInfo.birthday" ref="userbirthday_inp"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.usereamil.name}}</label>
                                <input type="text" maxlength="32" autocomplete="off" :disabled="isDisabled" :value="userInfo.email" ref="useremail_inp"/>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h2 class="tit">购买人</h2>
                        <div class="form">
                            <div class="info-item">
                                <label>{{insuer.username.name}}</label>
                                <input type="text" v-model.trim="formData.username" maxlength="6" autocomplete="off" placeholder="请输入姓名"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.usercardnum.name}}</label>
                                <input type="text" v-model.trim="formData.usercardnum" maxlength="18" autocomplete="off" placeholder="请输入身份证号码"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.usertelphone.name}}</label>
                                <input type="tel" v-model.trim="formData.usertelphone" maxlength="11" autocomplete="off" placeholder="请输入手机号"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.useraddress1.name}}</label>
                                <input type="text" autocomplete="off" placeholder="请选择地址" readonly @click="selectUseAdress"/>
                            </div>
                            <div class="info-item">
                                <label>{{insuer.useraddress2.name}}</label>
                                <input type="text" v-model.trim="formData.useraddress1" autocomplete="off" placeholder="请输入详细地址">
                            </div>
                            <div class="info-item">
                                <label>{{insuer.userbirthday.name}}</label>
                                <input type="text" class="date" v-model.trim="formData.userbirthday" autocomplete="off" placeholder="请选择生日">
                            </div>
                            <div class="info-item">
                                <label>{{insuer.usereamil.name}}</label>
                                <input type="text" maxlength="32" v-model.trim="formData.useremail" autocomplete="off" placeholder="请输入邮箱">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relation">
                    <div class="info-item">
                        <label>被保人</label>
                        <div class="choose">
                            <select @change="selectev" v-model="formData.applicantrelationship">
                                <option :value="item" v-for="(item, key) in relation.value">{{key}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="hidden" v-if="!isMe">
                        <div class="info-item">
                            <label>{{insuer.Insuredpersonname.name}}</label>
                            <input type="text" v-model.trim="formData.Insuredpersonname" maxlength="6" autocomplete="off" placeholder="请输入姓名" />
                        </div>
                        <div class="info-item">
                            <label>{{insuer.insuredpersoncard.name}}</label>
                            <input type="text" v-model.trim="formData.insuredpersoncard" maxlength="18" autocomplete="off" placeholder="请输入身份证号码" />
                        </div>
                        <div class="info-item">
                            <label>{{insuer.insuredpersonmobile.name}}</label>
                            <input type="text" v-model.trim="formData.insuredpersonmobile" autocomplete="off"  placeholder="输入被保人手机号"/>
                        </div>
                        <div class="info-item">
                            <label>{{insuer.Insuredpersonaddress1.name}}</label>
                            <input type="text" v-model.trim="formData.Insuredpersonadress" autocomplete="off"  placeholder="请选择地址"/>
                        </div>
                        <div class="info-item">
                            <label>{{insuer.Insuredpersonaddress2.name}}</label>
                            <input type="text"  v-model.trim="formData.Insuredpersonadress1" autocomplete="off" placeholder="请输入详细地址"/>
                        </div>
                        <div class="info-item">
                            <label>{{insuer.Insuredpersonage.name}}</label>
                            <input type="text" class="date" v-model.trim="formData.Insuredpersonage" autocomplete="off" placeholder="请选择生日"/>
                        </div>
                        <div class="info-item">
                            <label>{{insuer.Insuredpersonmail.name}}</label>
                            <input type="text" v-model.trim="formData.Insuredpersonmail" maxlength="32" autocomplete="off" placeholder="请输入邮箱"/>
                        </div>
                    </div>
                </div>
                <div class="protocol">
                    <p>本人已充分了解本保险产品，并承诺投保信息的真是性，理解并同意<a href="#">《保险条款》</a>和<a href="#">《投保须知》</a>的全部内容。</p>
                </div>
              </div>
            </div>
        </div>
        <v-area :props-show="show" :props-result="result" v-on:result="areaResult"></v-area>
        <v-calendar @onChange="chooseDate" v-model="succDate.calendarShow" :minDate="succDate.minDate"></v-calendar>
        <!--footer-->
        <div class="footer" ref="sfFooter" @click="tobuy">
            <a href="javascripr:;" class="btn">立即购买</a>
        </div>
    </div>
</template>

<script>
    import VHeader from '../../components/layout/header/header.vue'
    import VSwiper from '../../components/plug/swiper/swiper.vue'
    import Toast from '../../components/common/toast/toast.js'
    import VArea from '../../components/common/area/area.vue'
    import VCalendar from '../../components/common/calendar/calendar.vue'
    import BScroll from 'better-scroll';
    const RES_OK = 0;  //请求成功
    export default {
        components: {
            VHeader,
            VSwiper,
            VArea,
            VCalendar

        },
        data () {
            return {
                comBodyScrollSf:'',
                headerData:{
                    name: "填写保单",
                    backBtn: true
                },
                swiperOpts:{
                    //pagination: '.swiper-pagination',
                    slidesPerView: 1,
                    speed:800,
                    paginationClickable: true,
                    //loop: true,
                    //autoplay: 4000,
                },
                show: false,
                result:{},
                succDate:{
                    calendarShow: false,
                    minDate:new Date(),
                    maxDate:new Date(new Date().getTime() + 24*60*60*1000*30)
                },
                id: '',  //保险参数id
                advImg:'',  //banner图
                bxbzdata: '',  //保险保障
                plan:'', //保障计划
                effectdate:'', //生效时间
                expirydate: '', //保障期限
                plan:'', //保障计划
                insuer:'',   //购买人、被保人显示信息
                userInfo:'', //接口初始化拉取购买人信息
                isMe: true,  //是否选择本人
                isDisabled: true, //表单是否可编辑
                relation:'',
                formData:{
                    planjihua:''||'plan1',    //保险计划
                    effectivedate:'',   //生效时间
                    expirydate:''||'1',    //保障期限
                    username:'',    //购买人姓名
                    usercardnum:'', //购买人身份证号
                    usertelphone:'', //购买人电话
                    useraddress:'', //购买人地区
                    useraddress1:'', //购买人详细地址
                    userbirthday:'', //购买人生日
                    useremail:'', //购买人邮箱

                    applicantrelationship:''|| '1',  //与本人关系
                    Insuredpersonname:'', //被保人姓名
                    Insuredpersonmail:'', //被保人邮箱
                    Insuredpersonadress:'', //被保人地址
                    Insuredpersonadress1:'', //被保人详细
                    Insuredpersonmail:'', //被保人邮箱
                    Insuredpersonage:'', //被保人生日
                    insuredpersonmobile:'', //被保人手机号
                    insuredpersoncard:'', //被保人身份证号码

                },
                aCity:{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"},
                ordernum: ''   //订单号 
            }
        },
        computed:{
            editStatu(){
                return this.isDisabled ? true : false;
            }
        },
        created(){
            //初始化生效日期
            var self = this;
            this._getJsData('http://hq.sinajs.cn/list=sys_time',function(){
                var _sys_time = window['hq_str_sys_time'];
                if(_sys_time){
                    var myDate = new Date(_sys_time * 1000);
                    var Y = myDate.getFullYear(),M = myDate.getMonth() + 1,D = myDate.getDate() + 1;
                    var init = Y +'-' + M + '-' + D;
                    self.effectdate = init.replace(/\s/g, "");
                }
            })
            this.$http({
                port : 'getInuranceUserInfo',
                openLoader:true
            }).then((res)=>{
                if(res.code === RES_OK){
                    this.userInfo = res.data;
                    this.$nextTick(() => {
                        setTimeout(()=>{
                            this.indexScrollSf();
                        },300)
                    })
                }
            })

            this.$http({
                port : 'getInsuranceInfo',
                data:{id: this.$route.query.id},
                openLoader:true
            }).then((res)=>{
                if(res.code === RES_OK){
                    this.advImg = res.data.logo.map(item => {
                        return {
                            imgSrc:item.imgsrc,
                            href:item.href ? item.href : 'JavaScript:;'
                        }
                    })
                    this.bxbzdata = res.data.coverage;
                    this.plan = res.data.insurancecontent.planjihua;
                    this.relation = res.data.insuer.applicantrelationship;
                    this.insuer = res.data.insuer;
                    console.log(res)
                    this.expirydate = res.data.insurancecontent.expirydate;
                    this.$nextTick(() => {
                        setTimeout(()=>{
                            this.indexScrollSf();
                        },30)
                    })
                }
            })
            //购买人信息
            this.$http({
                port : 'getInuranceUserInfo',
                data:{uid: '12891530351'},
                openLoader:true
            }).then((res)=>{
                if(res.code === RES_OK){
                    this.userInfo = res.data;
                    this.$nextTick(() => {
                        setTimeout(()=>{
                            this.indexScrollSf();
                        },300)
                    })
                }
            })
        },
        methods:{
            indexScrollSf() {
                let pageH=this.$el.offsetHeight;
                let headerH=this.$refs.sfHeader.$el.offsetHeight;
                let footerH=this.$refs.sfFooter.offsetHeight;
                this.$refs.comBodySf.style.height = pageH - (headerH + footerH) +'px';
                this.comBodyScrollSf = new BScroll(this.$refs.comBodySf,{
                    click: true,
                    deceleration: 0.001,
                });
            },
            _initDate(date,fmt){
                var o = {
                    "M+": date.getMonth() + 1,
                    "d+": date.getDate()
                };
                if(/(y+)/.test(fmt))
                    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for(var k in o)
                    if(new RegExp("(" + k + ")").test(fmt))
                        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            },
            _getJsData (e, d, c) {
                var b = document.createElement("script");
                if (typeof d === "string") {
                    b.charset = d
                }
                b.onreadystatechange = b.onload = function () {
                    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
                        if (d && typeof d === "function") {
                            d()
                        }
                        if (c && typeof c === "function") {
                            c()
                        }
                        b.onreadystatechange = b.onload = null;
                        b.parentNode.removeChild(b)
                    }
                };
                b.src = e;
                document.getElementsByTagName("head")[0].appendChild(b)
            },
            selectev (e) {
                e.target.value == 1 ? this.isMe = true : this.isMe = false;
                this.$nextTick(() => {
                    setTimeout(()=>{
                        this.indexScrollSf();
                    },10)
                })
            },
            edit (event){
                if (!event._constructed) {
                    return
                }
                this.isDisabled = false;
            },
            selectUseAdress(){
                this.show = true;
            },
            areaResult: function(show, result){
                this.show = show;
                this.result = result;
                console.log(this.result);
                this.$refs.useraddress_inp.value = this.result.province.name;
            },
            bzDate(){
                this.succDate.calendarShow = true;
            },
            chooseDate(date){
                console.log(this._initDate(date,"yyyy-MM-dd"));
                this.effectdate = this._initDate(date,"yyyy-MM-dd");
            },

            tobuy () {
                
                if(this.userInfo&&this.userInfo.name){   // 编辑后的购买人信息
                    this.formData.username = this.$refs.username_inp.value;
                    this.formData.usercardnum = this.$refs.usercardnum_inp.value;
                    this.formData.usertelphone = this.$refs.usertelphone_inp.value;
                    this.formData.useraddress = this.$refs.useraddress_inp.value;
                    this.formData.useraddress1 = this.$refs.useraddress1_inp.value;
                    this.formData.userbirthday = this.$refs.userbirthday_inp.value;
                    this.formData.useremail = this.$refs.useremail_inp.value;
                    
                }
                if (!this.isMe) {  //添加被保人校验
                    const telReg=/^1[0-9][0-9]\d{8}$/;
                    const emailReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
                    //校验姓名
                    if(!this.formData.Insuredpersonname){
                        Toast('请输入被保人姓名!');
                        return false;
                    }
                    //校验身份证
                    if(!this.formData.insuredpersoncard){
                        Toast('请输入被保人身份证号！');
                        return false;
                    }
                    var iSum = 0 ;
                    if(!/^\d{17}(\d|x)$/i.test(this.formData.insuredpersoncard)){
                        Toast('被保人身份证格式错误！');
                        return false;
                    }
                    this.formData.usercardnum = this.formData.insuredpersoncard.replace(/x$/i,"a"); 
                    if(this.aCity[parseInt(this.formData.insuredpersoncard.substr(0,2))]==null){
                        Toast('被保人身份证地区非法！');
                        return false;
                    }; 
                    const sBirthday=this.formData.insuredpersoncard.substr(6,4)+"-"+Number(this.formData.insuredpersoncard.substr(10,2))+"-"+Number(this.formData.insuredpersoncard.substr(12,2)); 
                    const d = new Date(sBirthday.replace(/-/g,"/")) ;
                    if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())){
                        Toast('被保人身份证出生日期非法！');
                        return false;
                    }
                    for(var i = 17;i>=0;i --){
                        iSum += (Math.pow(2,i) % 11) * parseInt(this.formData.insuredpersoncard.charAt(17 - i),11);
                    }
                    if(iSum%11!=1){
                        Toast('被保人身份证号非法！');
                        return false;
                    }; 
                    //校验手机号
                    if(!this.formData.insuredpersonmobile){
                        Toast("请输入被保人手机号！");
                        return false;
                    }
                    if(!telReg.test(this.formData.insuredpersonmobile.replace(/\s/g, ""))){
                        Toast("请输入被保人正确的手机号！");
                        return false;
                    }
                    //校验地址
                    if(!this.formData.Insuredpersonadress){
                        Toast('请选择被保人的地址!');
                        return false;
                    }
                    //校验详细地址
                    if(!this.formData.Insuredpersonadress1){
                        Toast('请输入被保人详细地址!');
                        return false;
                    }
                    //校验生日
                    if(!this.formData.Insuredpersonage){
                        Toast('请输入被保人生日!');
                        return false;
                    }
                    //校验邮箱
                    if(!this.formData.Insuredpersonmail){
                        Toast("请输入被保人邮箱");
                        return false;
                    }
                    if(!emailReg.test(this.formData.Insuredpersonmail.replace(/\s/g, ""))){
                        Toast("请输入被保人正确的邮箱");
                        return false;
                    }
                }

                //本人校验
                const telReg=/^1[0-9][0-9]\d{8}$/;
                const emailReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
                //校验姓名
                if(!this.formData.username){
                    Toast('请输入姓名!');
                    return false;
                }
                //校验身份证
                if(!this.formData.usercardnum){
                    Toast('请输入您的身份证号码！');
                    return false;
                }
                var iSum = 0 ;
                if(!/^\d{17}(\d|x)$/i.test(this.formData.usercardnum)){
                    Toast('身份证长度或格式错误！');
                    return false;
                }
                this.formData.usercardnum = this.formData.usercardnum.replace(/x$/i,"a"); 
                if(this.aCity[parseInt(this.formData.usercardnum.substr(0,2))]==null){
                    Toast('您的身份证地区非法！');
                    return false;
                }; 
                const sBirthday=this.formData.usercardnum.substr(6,4)+"-"+Number(this.formData.usercardnum.substr(10,2))+"-"+Number(this.formData.usercardnum.substr(12,2)); 
                const d = new Date(sBirthday.replace(/-/g,"/")) ;
                if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate())){
                    Toast('身份证上的出生日期非法！');
                    return false;
                }
                for(var i = 17;i>=0;i --){
                     iSum += (Math.pow(2,i) % 11) * parseInt(this.formData.usercardnum.charAt(17 - i),11);
                }
                if(iSum%11!=1){
                    Toast('您输入的身份证号非法！');
                    return false;
                }; 
                //校验手机号
                if(!this.formData.usertelphone){
                    Toast("请输入手机号！");
                    return false;
                }
                if(!telReg.test(this.formData.usertelphone.replace(/\s/g, ""))){
                    Toast("请输入正确的手机号！");
                    return false;
                }
                //校验地址
                if(!this.formData.useraddress){
                    Toast('请选择您的地址!');
                    return false;
                }
                //校验详细地址
                if(!this.formData.useraddress1){
                    Toast('请输入您详细地址!');
                    return false;
                }
                //校验生日
                if(!this.formData.userbirthday){
                    Toast('请输入生日!');
                    return false;
                }
                //校验邮箱
                if(!this.formData.useremail){
                    Toast("请输入邮箱");
                    return false;
                }
                if(!emailReg.test(this.formData.useremail.replace(/\s/g, ""))){
                    Toast("请输入正确的邮箱");
                    return false;
                }

                //请求获得订单号
                this.$http({
                    port : 'getquotations',
                    //method: 'post',
                    data:{
                        pid:this.$route.query.id,
                        uid:'',
                        planjihua: this.formData.planjihua,
                        effectivedate: this.effectdate,
                        expirydate: this.formData.expirydate,
                        username: this.formData.username,
                        usercardnum: this.formData.usercardnum,
                        usertelphone: this.formData.usertelphone,
                        useraddress: this.formData.useraddress,
                        useraddress1: this.formData.useraddress1,
                        userbirthday: this.formData.userbirthday,
                        useremail: this.formData.useremail,
                        applicantrelationship: this.formData.applicantrelationship,
                        Insuredpersonname: this.formData.Insuredpersonname,
                        Insuredpersonmail: this.formData.Insuredpersonmail,
                        Insuredpersonage: this.formData.Insuredpersonage,
                        insuredpersonmobile: this.formData.insuredpersonmobile,
                        insuredpersoncard: this.formData.insuredpersoncard,
                    },
                    openLoader:true
                }).then((res)=>{
                    if(res.code === RES_OK){
                        this.ordernum = res.data.orderNum;
                        //请求成功 跳转 传订单号
                        this.$router.push({
                            path:'/paysure',
                            query:{ordernum:this.ordernum}
                        })
                        this.$nextTick(() => {
                            setTimeout(()=>{
                                this.indexScrollSf();
                            },30)
                        })
                    }else{
                        Toast(res.msg);
                        return false;
                    }
                })
            }
        },
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    .page-view{
        height: 100%;
        overflow: hidden;
        background: #fff;
        .scroller{
            margin-top: .9rem;
            height: 100%;
            overflow: hidden;
            background: #f5f5f5;
        }
        .detail{
           .titwrap{
               width: 100%;
               height: 2.6rem;
               background: #fff;
               margin: 0.02rem 0 0.15rem 0;
               img{
                   display: block;
                   width: 100%;
                   height: 100%;
               }
           }
           .bxEnsure{
               background: #fff;
               margin-bottom: 0.15rem;
              .tit{
                height: 0.66rem;
                line-height: 0.66rem;
                padding-left: 0.2rem;
                border-bottom: 1px solid #eee;
                font-size: 0.28rem;
                color: #333;
                font-weight: 700;
             }
             .item{
                 margin-left: 0.3rem;
                 border-bottom: 1px solid #eee;
                 @include clearfix;
                 height: 0.9rem;
                 line-height: 0.9rem;
                 &:last-child{ border: none;}
                 label{
                     float: left;
                     color: #333;
                     font-size: 0.28rem;
                 }
                 span{
                     float: right;
                     padding-right: 0.4rem;
                     color: #808080;
                     font-size: 0.28rem;
                 }
             }
           }
           .bxNr{
               background: #fff;
               margin-bottom: 0.15rem;
              .tit{
                height: 0.66rem;
                line-height: 0.66rem;
                padding-left: 0.2rem;
                border-bottom: 1px solid #eee;
                font-size: 0.28rem;
                color: #333;
                font-weight: 700;
             }
             .item{
                 margin-left: 0.3rem;
                 border-bottom: 1px solid #eee;
                 @include clearfix;
                 height: 0.9rem;
                 line-height: 0.9rem;
                 &:last-child{ border: none;}
                 label{
                     float: left;
                     color: #333;
                     font-size: 0.28rem;
                 }
                 span{
                     float: right;
                     padding-right: 0.4rem;
                     color: #ff484a;
                     font-size: 0.32rem;
                     font-weight: 700;
                 }
                 .date{
                     float: right;
                     height: 100%;
                     text-align: right;
                     background: url(./img/right_arrow.png) no-repeat right center;
                     background-size: 0.14rem auto;
                     padding-right: 0.3rem;
                     margin-right: 0.2rem;
                     color: #333;
                     font-size: 0.28rem;
                     border:none; 
                     outline: none;
                 }
                 .choose{
                     float: right;
                     height: 100%;
                     select{
                         appearance: none;
                         height: 100%;
                         border: none;
                         outline: none;
                         background: url(./img/right_arrow.png) no-repeat right center;
                         background-size: 0.14rem auto;
                         padding-right: 0.3rem;
                         margin-right: 0.2rem;
                         padding-left: 3rem;
                     }
                 }
             }
           }
           .orderInfo{
               background: #fff;
               margin-bottom: 0.15rem;
               .tit{
                    height: 0.66rem;
                    line-height: 0.66rem;
                    padding-left: 0.2rem;
                    border-bottom: 1px solid #eee;
                    font-size: 0.28rem;
                    color: #333;
                    font-weight: 700;
                    .edit{
                        float: right;
                        width: 1.2rem;
                        text-indent: 999em;
                        height: 100%;
                        background: url(./img/edit.png) no-repeat center center;
                        background-size: 0.35rem auto;
                    }
               }
               .info-item{
                    margin-left: 0.3rem;
                    border-bottom: 1px solid #eee;
                    @include clearfix;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    &:last-child{ border: none;}
                    label{
                        float: left;
                        color: #333;
                        font-size: 0.28rem;
                    }
                    input{
                        float: right;
                        background:#fff;
                        width: 65%;
                        height: 100%;
                        text-align: right;
                        padding-right: 0.3rem;
                        margin-right: 0.2rem;
                        color: #333;
                        font-size: 0.28rem;
                        border:none; 
                        outline: none;
                    }
                    .date{
                        background: url(./img/right_arrow.png) no-repeat right center;
                        background-size: 0.14rem auto;
                    }
               }
           }
           .relation{
                background: #fff;
               .info-item{
                    margin-left: 0.3rem;
                    border-bottom: 1px solid #eee;
                    @include clearfix;
                    height: 0.9rem;
                    line-height: 0.9rem;
                    &:last-child{ border: none;}
                    label{
                        float: left;
                        color: #333;
                        font-size: 0.28rem;
                    }
                    input{
                        float: right;
                        width: 65%;
                        height: 100%;
                        text-align: right;
                        padding-right: 0.3rem;
                        margin-right: 0.2rem;
                        color: #333;
                        font-size: 0.28rem;
                        border:none; 
                        outline: none;
                    }
                    .date{
                        background: url(./img/right_arrow.png) no-repeat right center;
                        background-size: 0.14rem auto;
                    }
                    .choose{
                        float: right;
                        height: 100%;
                        select{
                            appearance: none;
                            height: 100%;
                            border: none;
                            outline: none;
                            background: url(./img/right_arrow.png) no-repeat right center;
                            background-size: 0.14rem auto;
                            padding-right: 0.3rem;
                            margin-right: 0.2rem;
                            padding-left: 3rem;
                        }
                    }
               }
            }
            .protocol{
                padding: 0.32rem 0.32rem 0.38rem 0.32rem;
                p{
                    font-size: 0.24rem;
                    color: #666;
                    line-height: 0.4rem;
                    text-indent: 2em;
                    a{ color: #508cee;}
                }
            }
        }
        .footer{
            width: 100%;
            height: 1rem;
            position: fixed;
            bottom: 0;
            overflow: hidden;
            line-height: 1.65rem;
            z-index: 99;
            background: #ff484a;
            color: #fff;
            line-height: 1rem;
            text-align: center;
        }
    }
</style>
