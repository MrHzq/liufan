import Vue from 'vue';
import Router from 'vue-router';
import routes from './all';
Vue.use(Router);
routes.unshift({ path: '/', redirect: '/home' });
export default new Router({ routes });
// import Vue from 'vue';
// import Router from 'vue-router';

// Vue.use(Router);

// export default new Router({
//     // mode: 'history',
//     // scrollBehavior(to, from, savedPosition) {
//     //     if (savedPosition) {
//     //         return savedPosition;
//     //     } else return { x: 0, y: 0 };
//     // },
//     routes: [
//         { path: '/', redirect: '/home' },
//         {
//             path: '/home',
//             name: 'home',
//             component: () => import('@/views/home.vue')
//         },
//         {
//             path: '/about-me',
//             name: 'about-me',
//             component: () => import('@/views/about-me.vue')
//         },
//         {
//             path: '/web-xlf',
//             name: 'web-xlf',
//             component: () => import('@/views/web-index.vue')
//         },
//         {
//             path: '/web-yxy',
//             name: 'web-yxy',
//             component: () => import('@/views/web-index.vue')
//         },
//         {
//             path: '/mobile-index',
//             name: 'mobile-index',
//             component: () => import('@/views/mobile-index.vue')
//         },
//         {
//             path: '/plane-index',
//             name: 'plane-index',
//             component: () => import('@/views/plane-index.vue')
//         },
//         {
//             path: '/hand-index',
//             name: 'hand-index',
//             component: () => import('@/views/hand-index.vue')
//         }
//     ]
// });
