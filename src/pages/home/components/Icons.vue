<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png" alt="">
          </div>
          <p class="icon-desc">景点门票</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {},
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0006',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png'
      }]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
};
</script>

<style lang="less" scoped>
  @import '~styles/variables.less';
  @import '~styles/mixins.less';
  .icons /deep/ .swiper-container {
    height: 50vw;
  }
  .icons {
    margin-top: .1rem;
    .icon {
      position: relative;
      overflow: hidden;
      float: left;
      width: 25%;
      padding-bottom: 25%;
      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: .44rem;
        box-sizing: border-box;
        padding: .1rem;
        .icon-img-content {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }
      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: .44rem;
        line-height: .44rem;
        color: @darkTextColor;
        text-align: center;
        .ellipsis();
      }
    }
  }
</style>
