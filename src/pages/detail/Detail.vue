<template>
  <div>
    <detail-banner
     :sightName="sightName"
     :bannerImg="bannerImg"
     :bannerImgs="galleryImgs"
    >
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';
import axios from 'axios';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      galleryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      // axios.get(`/api/detail.json?id=${this.$route.params.id}`);
      // 尽量不要拼接，有更好的写法
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc);
    },
    handleGetDataSucc(res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.galleryImgs = data.galleryImgs;
        this.list = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang="less" scoped>
  .content {
    height: 50rem;
  }
</style>
