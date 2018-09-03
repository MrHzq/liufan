/*
 * @Author: hzq
 * @Date: 2018-08-28 17:50:19
 * @Last Modified by: hzq
 * @Last Modified time: 2018-09-03 22:29:38
 * @文件说明: 所有路由处理
 */
import home from './home';
let all = [...home];
let routes = all.map(val => {
  val.name = val.path;
  val.path = '/' + val.path;
  val.component = () => import('@/views/' + val.src + '.vue');
  return val;
});

export default routes;
