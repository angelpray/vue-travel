<template>
  <div>
    <div class="banner" @click="handleBannerClick()">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.bannerImgs.length}}
        </div>
      </div>
    </div>
    <common-gallery :imgs="bannerImgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallery,
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data() {
    return {
      showGallery: false
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
