import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/keyboards',
            name: 'keyboards',
            component: () =>
                import(/* webpackChunkName: "keyboards" */ './pages/keyboards'),
        },
        {
            path: '/career',
            component: () =>
                import(/* webpackChunkName: "career" */ './pages/career'),
            children: [
                {
                    path: '',
                    name: 'career',
                    component: () =>
                        import(
                            /* webpackChunkName: "career" */ './pages/career/home'
                        ),
                },
                {
                    path: 'nxoc',
                    name: 'career-nxoc',
                    component: () =>
                        import(
                            /* webpackChunkName: "career" */ './pages/career/nexon-oc'
                        ),
                },
                {
                    path: 'nxa',
                    name: 'career-nxa',
                    component: () =>
                        import(
                            /* webpackChunkName: "career" */ './pages/career/nexon-america'
                        ),
                },
            ],
        },
    ],
});
