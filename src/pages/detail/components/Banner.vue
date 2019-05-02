<template>
  <div>
    <div class="banner" @click="handleBannerClick()">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连海洋世界</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          39
        </div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
  },
  data() {
    return {
      showGallery: false,
      imgs: [
        "http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg",
        "http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"
      ]
    }
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    }
  },
}
</script>

<style lang="less" scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 55vw;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number {
        height: .32rem;
        margin-top: .14rem;
        line-height: .32rem;
        padding: 0 .4rem;
        font-size: .24rem;
        background: rgba(0, 0, 0, .8);
        .banner-icon {
          font-size: .24rem;
        }
      }
    }
  }
</style>
