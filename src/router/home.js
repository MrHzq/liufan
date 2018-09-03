/*
 * @Author: hzq
 * @Date: 2018-08-28 17:45:25
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-03 22:32:26
 * @文件说明: 首页路由
 */
// name不需要写，因为我们的项目里面path与name是相同的，所以只需要写path
export default [
  {
    path: 'home', // 路由路径，不需要再加斜杠(/)，已经自动处理了
    src: 'home' // 路由文件路径，以@/views/开始的路径，因为@/views/已经自动处理了
  }
];
