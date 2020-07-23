import {
    post,
} from '../utils/request';

const adminmenu = [
    {
        // title: '运动',
        // entitle: 'sports',
        key: 'Sports',
        children: [
            {
                // title: '排球',
                // entitle: 'paiqiuball',
                key: 'paiqiu',
                route: '/App/Sports',
            },
            {
                // title: '高尔夫',
                // entitle: 'gaoerfu',
                key: 'gofo',
                route: '/App/Goout/:id',
            },
            {
                // title: '桌球',
                // entitle: 'tableball',
                key: 'Deskbool',
                children: [
                    {
                        // title: '斯洛克',
                        // entitle: 'ssiluoke',
                        key: 'slk',
                    },
                ],
            },
        ],
    },
    {
        // title: '出行',
        // key: 'goout',
        key: 'Traveling',
        children: [
            {
                // title: '欧洲',
                // entitle: 'ouzhou',
                key: 'ou',
            },
            {
                // title: '美洲',
                // entitle: 'meizhou',
                key: 'mei',
            },
        ],
    },
];

const usermenu = [
    {
        // title: '运动',
        // entitle: 'sports',
        key: 'Sports',
        children: [
            {
                // title: '足球',
                // entitle: 'socerball',
                key: 'zuqiu',
                route: '/App/Foods',
            },
            {
                // title: '桌球',
                // entitle: 'tableball',
                key: 'Deskbool',
                children: [
                    {
                        // title: '斯洛克',
                        // entitle: 'ssiluoke',
                        key: 'slk',
                    },
                ],
            },
        ],
    },
    {
        // title: '美食',
        // entitle: 'foods',
        key: 'foods',
        children: [
            {
                // title: '糖醋排骨',
                // entitle: 'paigu',
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
}

export function logout() {
    return post('/api/logout');
}
