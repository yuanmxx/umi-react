module.exports = {
    treeShaking: true,
    routes: [
        {
            path: '/',
            redirect: '/App',
        },
        {
            path: '/App',
            component: '../layouts/index',
            routes: [
                { path: '/App', redirect: '/App/Sports' },
                { path: '/App/Sports', component: '../pages/Home/index' },
                { path: '/App/Foods', component: '../pages/About/index' },
                { path: '/App/Learning', component: '../pages/User/index' },
                { path: '/App/Goout/:id', component: '../pages/Goout/$id' },
            ],
        }, {
            path: '/Login',
            component: '../pages/Login/index',
        },
    ],
    disableCSSModules: true,
    outputPath: '/build',
    publicPath: '/',
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
            antd: true,
            dva: true,
            dynamicImport: true,
            title: 'my-umiapp',
            locale: {
                default: 'zh-CN',
                antd: true,
            },
        }],
    ],
};
