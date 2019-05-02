<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close');
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // 监听本身或者父级元素的DOM结构变化会自我刷新一次。
        observeParents: true,
        observer: true
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .container /deep/ .swiper-container {
    overflow: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .wrapper {
      width: 100%;
      height: 100vw;
      .gallery-img {
        width: 100%;
      }
      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }
    }
  }
</style>
