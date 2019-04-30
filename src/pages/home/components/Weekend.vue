<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
          <div class="item-img-wrapper">
            <img :src="item.imgUrl" class="item-img" alt="">
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
};
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';
  .title {
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item-img-wrapper {
    height: 37.09vw;
    overflow: hidden;
    .item-img {
      width: 100%;
    }
  }
  .item-title {
    line-height: .54rem;
    font-size: .32rem;
    .ellipsis();
  }
  .item-desc {
    line-height: .4rem;
    color: #ccc;
    .ellipsis();
  }
</style>
