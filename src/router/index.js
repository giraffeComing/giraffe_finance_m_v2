import Vue from 'vue'
import Router from 'vue-router'


import VApi from '../demos/apiDemo.vue'
import VSwiper from '../demos/swiperDemo.vue'
import VBetterScroll from '../demos/betterScrollDemo.vue'


import VIndex from '../views/index/index.vue'
import VMy from '../views/my/my.vue'
import VError from '../views/404/404.vue'
import VDemo from '../views/allDemos/allDemos.vue'
import VLicai from '../views/licai/licai.vue'
import VAccount from '../views/account/account.vue'

import VFund from '../views/fund/fund.vue'
import VFundDetail from '../views/fund/fundDetail.vue'
import VFunHistory from '../views/fund/funHistory.vue'

import VInsurance from '../views/insurance/insurance.vue'

import VPaysucc from '../views/insurance/paysucc.vue'
import VPaysure from '../views/insurance/paysure.vue'
import VBxForm from '../views/insurance/bxForm.vue'


import VInsHome from '../views/insuranceHome/insHome.vue'


import VBorrow from '../views/borrow/borrow.vue'

import VSfBao from '../views/sfBao/sfBao.vue'
import VMyLicaiCount from '../views/myLicaiCount/myLicaiCount.vue'
import VAsset from '../views/myAsset/asset.vue'
import VRealName from '../views/realName/realName.vue'
import VSetpassword from '../views/setPassWord/setPassWord.vue'
import VIndexFund from '../views/indexFund/indexFund.vue'


Vue.use(Router)

export default new Router({
  routes: [
      //路由重定向
      { path: '/', redirect: '/index'},
      //首页
      {
          path: '/index',
          component: VIndex,
          name: 'VIndex',
      },
      //理财
      {
          path: '/licai',
          component: VLicai,
          name: 'VLicai',
      },
      //首页-基金
      {
          path: '/indexfund',
          component: VIndexFund,
          name: 'VIndexFund',
      },
      //我的
      {
          path: '/my',
          component: VMy,
          name: 'VMy',
      },
      //私房宝
      {
          path: '/sfbao',
          component: VSfBao,
          name: 'VSfBao',
      },
      //总资产
      {
          path: '/asset',
          component: VAsset,
          name: 'VAsset',
      },
      //我的-理财账户
      {
          path: '/mylicai',
          component: VMyLicaiCount,
          name: 'VMyLicaiCount',
      },
      //个人中心
      {
          path: '/account',
          component: VAccount,
          name: 'VAccount',
      },
      //实名认证
      {
          path: '/realname',
          component: VRealName,
          name: 'VRealName',
      },
      //设置密码
      {
          path: '/setpassword',
          component: VSetpassword,
          name: 'VSetpassword',
      },
      //基金
      {
          path: '/fund',
          component: VFund,
          name: 'VFund',
      },
      //基金详情页
      {
          path: '/fundDetail/:fundcode',
          component: VFundDetail,
          name: 'VFundDetail'
      },
      //基金交易记录
      {
          path: '/funHistory',
          component: VFunHistory,
          name: 'VFunHistory'
      },
      //保险
      {
          path: '/insurance',
          component: VInsurance,
          name: 'VInsurance',
      },
      //保险首页
      {
          path: '/insHome',
          component: VInsHome,
          name: 'VInsHome',
      },
      //借钱
      {
          path: '/borrow',
          component: VBorrow,
          name: 'VBorrow',
      },
      // demo集合页
      {
          path: '/demos',
          component: VDemo,
          children: [
              { path: '/', redirect: 'api' },
              {
                  path: 'api',
                  component: VApi,
                  name: 'api'
              },
              {
                  path: 'betterScroll',
                  component: VBetterScroll,
                  name: 'betterScroll'
              },
              {
                  path: 'swiper',
                  component: VSwiper,
                  name: 'swiper'
              },
          ]
      },
      //404页面
      {
          path: '*',
          component: VError,
          name: 'Error'
      },
  ]
})
