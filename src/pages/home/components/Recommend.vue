<template>
  <div>
    <div class="title">热销组件</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <img src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg" class="item-img" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '世界宫殿建筑典范'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '世界宫殿建筑典范'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '世界宫殿建筑典范'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        title: '故宫',
        desc: '世界宫殿建筑典范'
      }]
    };
  }
};
</script>

<style lang="less" scoped>
  @import '~styles/mixins.less';
  .title {
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0;
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
      .item-button {
        line-height: .44rem;
        margin-top: .3rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
</style>
