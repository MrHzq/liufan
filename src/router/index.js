import Vue from 'vue';
import Router from 'vue-router';
import routes from './all';
Vue.use(Router);
routes.unshift({path: '/', redirect: '/home'});
export default new Router({routes});
