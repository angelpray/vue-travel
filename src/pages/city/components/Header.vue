<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'City'
};
</script>

<style lang="less" scoped>
  @import '~styles/variables.less';
  .header {
    position: relative;
    height: @headerHeight;
    line-height: @headerHeight;
    overflow: hidden;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .35rem;
    .header-back {
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
