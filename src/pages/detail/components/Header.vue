<template>
  <div>
    <router-link
     to="/"
     tag="div"
     class="header-abs"
     v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
     class="header-fixed"
     v-show="!showAbs"
     :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 50) {
        let opacity = top / 130;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity }
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll);
  },
  // 当页面即将被替换成新页面时触发
  deactivated() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="less" scoped>
  @import '~styles/variables.less';
  .header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .7rem;
    height: .7rem;
    border-radius: .4rem;
    text-align: center;
    line-height: .8rem;
    background: rgba(0, 0, 0, .8);
    .header-abs-back {
      color: #fff;
      font-size: .4rem;
    }
  }
  .header-fixed {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: @headerHeight;
    line-height: @headerHeight;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .35rem;
    .header-fixed-back {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
