import {
    post,
} from '../utils/request';

const adminmenu = [
    {
        key: 'Sports',
        children: [
            {
                key: 'paiqiu',
                route: '/App/Sports',
            },
            {
                key: 'gofo',
                route: '/App/Goout/:id',
            },
            {
                key: 'Deskbool',
                children: [
                    {
                        key: 'slk',
                    },
                ],
            },
        ],
    },
    {
        key: 'Traveling',
        children: [
            {
                key: 'ou',
            },
            {
                key: 'mei',
            },
        ],
    },
];

const usermenu = [
    {
        key: 'Sports',
        children: [
            {
                key: 'zuqiu',
                route: '/App/Foods',
            },
            {
                key: 'Deskbool',
                children: [
                    {
                        key: 'slk',
                    },
                ],
            },
        ],
    },
    {
        key: 'foods',
        children: [
            {
                key: 'tancu',
            },
        ],
    },

];
export function getMenu() {
    const menu = JSON.parse(localStorage.getItem('userInfo')).username === '1' ? adminmenu : usermenu;
    return menu;
}

export function login(data) {
    return post('/api/login', data);
    // TODO: 单独处理特殊的请求直接用axios做特殊的配置，比如登陆不要token
    // return axios({
    //     method: 'post',
    //     url: '/api/login',
    //     data,
    //     headers: {
    //         lang: 'zhzh',
    //         clintId: 'CAA',
    //     },
    // });
}

export function logout() {
    return post('/api/logout');
}
