import Vue from 'vue';
import App from './App';
import router from './router';
import LButton from './components/l-button';
import LSideNav from './components/l-side-nav';
import LFooter from './components/l-footer';
import LBanner from './components/l-banner';

Vue.component('l-button', LButton);
Vue.component('l-side-nav', LSideNav);
Vue.component('l-banner', LBanner);
Vue.component('l-footer', LFooter);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
