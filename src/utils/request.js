import axios from 'axios';
import { message } from 'antd';
// TODO: 非组件内调用dispath
// console.log(window.g_app, 'window');

axios.defaults.timeout = 5000;
axios.interceptors.request.use((config) => {
    const cof = {
        ...config,
        headers: {
            ...config.headers,
            // language: 'zh',
        },
    };
    // console.log(cof);
    return cof;
}, error => {
    return Promise.reject(error);
});


axios.interceptors.response.use(
    (data) => {
        /**
         * TODO: 全局容错处理（用code判断错误类型,code需要规范）
         */
        // console.log(data);
        switch (data.data.code) {
        case '500':
            message.error(data.data.msg);
            break;
        default:
        }
        return data.data;
    },
    error => {
        message.error(error.toString());
        return Promise.reject(error);
    },
);

export const {
    post,
} = axios;
