<template>
  <div class="menu">
    <ul class="menu-wrap">
      <li class="menu-item" v-for="item in opts.contents" @click="toLink(item)">
        <span><img :src="item.image">{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'menu',
    props: {
      opts: ""
    },
    data () {
      return {}
    },
    methods: {
        toLink(item){
          var id = item.id;
          if(id == 3){
            this.$router.push({ path: '/indexfund' })
          }else if(id == 4){
            this.$router.push({ path: '/insHome' })
          }else{
              window.location.href = item.url
          }
        }
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .menu {
    background: #fff;
    padding: 0 .2rem .3rem .2rem;
    .menu-wrap {
      display: -webkit-box;
      display: flex;
      .menu-item {
        flex: 1;
        img {
          width: 1rem;
          height: 1rem;
          display: block;
          margin: 0 auto .12rem;
        }
        span {
          display: block;
          text-align: center;
          margin-top: .3rem;
          color: #666;
          font-size: .28rem;
          text-decoration: none;
        }
      }
    }
  }
</style>
