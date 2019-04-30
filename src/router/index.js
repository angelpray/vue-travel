import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import City from '@/pages/city/City';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      // 路由名字
      name: 'Home',
      // 访问组件
      component: Home,
    }, {
      path: '/city',
      // 路由名字
      name: 'City',
      // 访问组件
      component: City,
    }
  ],
});
