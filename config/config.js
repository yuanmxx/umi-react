// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes: [
      {
        path: '/',
        component: '../layouts/index',
        routes: [
          // { path: '/', redirect:'/Sports' },
          { path: '/Sports', component: '../pages/Home/index' },
          { path: '/Foods', component: '../pages/About/index' },
          { path: '/Learning', component: '../pages/User/index' },
          { path: '/Goout/:id', component: '../pages/Goout/$id' },
          { path: '/Login',component: '../pages/Login/index' },
        ]
      }
    ],
    "disableCSSModules":true,
    outputPath: './build',
    publicPath: './',
    plugins: [
      // ref: https://umijs.org/plugin/umi-plugin-react.html
      ['umi-plugin-react', {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'my-umiapp',
        dll: false,
        
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      }],
    ],
  }