<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for='item of swiperList' :key='item.id'>
        <img :src='item.imgUrl' class='swiper-img' alt=''>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }]
    };
  }
};
</script>

<style lang="less" scoped>
  .wrapper /deep/ .swiper-pagination-bullet-active {
    background: #fff;
  }
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 31.25vw;
    background: #ccc;
    // height: 0;
    // padding-bottom: 31.25%;
    .swiper-img {
      width: 100%;
    }
  }
</style>

