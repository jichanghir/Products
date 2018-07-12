import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Scheduler from './components/scheduler';


export default new VueRouter({
    routes: [
        {path: '/', component: Scheduler},
    ]
});
