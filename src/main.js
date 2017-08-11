// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/Goods';
import ratings from './components/ratings/Ratings';
import seller from './components/seller/Seller';
import './common/stylus/index.styl';

Vue.use(VueResource);
Vue.use(VueRouter);

let routes = [{
    path: '/', redirect: '/goods'
}, {
    path: '/goods', component: goods
}, {
    path: '/ratings', component: ratings
}, {
    path: '/seller', component: seller
}];

let router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: routes
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
});

