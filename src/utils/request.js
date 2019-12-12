import axios from 'axios';
import { message } from 'antd';
axios.defaults.timeout =  5000;
axios.interceptors.request.use((config) => {
    console.log(config)
    return config
},error => {
    return Promise.reject(error);
})


axios.interceptors.response.use(
    (data) => {
        /**
         * TODO: 全局容错处理（用code判断错误类型,code需要规范）
         */
        switch(data.data.code){
            case '500' :
                message.error(data.data.msg)
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
