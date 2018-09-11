/*
 * @Author: hzq
 * @Date: 2018-08-28 17:50:19
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-11 21:25:41
 * @文件说明: 所有路由处理
 */
let all = [
    {
        path: 'home' // 路由路径，不需要再加斜杠(/)，已经自动处理了
        // src: 'home' // 路由文件路径，以@/views/开始的路径，因为@/views/已经自动处理了
    },
    {
        path: 'about-me'
    },
    {
        path: 'web-xlf',
        src: 'web/web-index'
    },
    {
        path: 'web-yxy',
        src: 'web/web-index'
    },
    {
        path: 'mobile-index',
        src: 'mobile/mobile-index'
    },
    {
        path: 'plane-index',
        src: 'plane/plane-index'
    }
];
let routes = all.map(val => {
    val.name = val.path;
    val.src = val.src || val.name;
    val.path = '/' + val.path;
    val.component = () => import('@/views/' + val.src + '.vue');
    return val;
});

export default routes;
