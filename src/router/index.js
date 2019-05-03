import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/home/Home';
import City from '@/pages/city/City';
import Detail from '@/pages/detail/Detail';

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
    }, {
      // 动态路由参数:id
      path: '/detail/:id',
      // 路由名字
      name: 'Detail',
      // 访问组件
      component: Detail,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
