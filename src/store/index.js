import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';

Vue.use(Vuex);

// 创建一个store
export default new Vuex.Store({
  // 共用数据
  state,
  // 当操作比较简单时【不涉及异步操作】，组件可以直接commit改变数据，actions更适合复杂的场景
  // actions: {
  //   changeCity(ctx, city) {
  //     // ctx是上下文的意思，作用是拿到commit方法。
  //     ctx.commit('changeCity', city);
  //   }
  // },
  // mmutations改变数据
  mutations
});
