import {
    post,
} from '../utils/request';
const adminmenu =  [
    {
        title:'运动',
        entitle:'sports',
        key:'sports',
        children:[
            {
                title:'足球',
                entitle:'socerball',
                key:'sports1',
                route:'/Foods',
            },
            {
                title:'篮球',
                entitle:'backetaball',
                key:'sports2',
                route:'/Learning',
            },
            {
                title:'排球',
                entitle:'paiqiuball',
                key:'sports3',
                route:'/Sports',
            },
            {
                title:'高尔夫',
                entitle:'gaoerfu',
                key:'sports4',
                route:'/Goout/:id',
            },
            {
                title:'游泳',
                entitle:'swimming',
                key:'sports5',
            },{
                title:'桌球',
                entitle:'tableball',
                key:'sports6',
                children:[
                   {
                    title:'斯洛克',
                    entitle:'ssiluoke',
                    key:'sports61',
                   },
                   {
                    title:'美式桌球',
                    entitle:'UStableball',
                    key:'sports62',
                   }
                ]
            }
        ]
    },
    {
        title:'美食',
        entitle:'foods',
        key:'foods',
        children:[
            {
                title:'糖醋排骨',
                entitle:'paigu',
                key:'foods1',
            },
            {
                title:'鱼香肉丝',
                entitle:'rousi',
                key:'food2',
            },
            {
                title:'口水鸡',
                entitle:'ji',
                key:'food3',
            },
            {
                title:'火锅',
                entitle:'huohuo',
                key:'food4',
            },
            {
                title:'串串',
                entitle:'chuanchuan',
                key:'food5',
            }
        ]
    },
    {
        title:'学习',
        key:'learning',
        entitle:'learning',
    },
    {
        title:'出行',
        key:'goout',
        entitle:'traveling',
        children:[
            {
                title:'欧洲',
                entitle:'ouzhou',
                key:'goout1',
            },
            {
                title:'美洲',
                entitle:'meizhou',
                key:'goout2',
            },
            {
                title:'澳洲',
                entitle:'ouzhou',
                key:'goout3',
            },
            {
                title:'非洲',
                entitle:'feizhou',
                key:'goout4',
            }
        ]
    }
]

const usermenu = [
    {
        title:'运动',
        entitle:'sports',
        key:'sports',
        children:[
            {
                title:'足球',
                entitle:'socerball',
                key:'sports1',
                route:'/Foods',
            },
            {
                title:'篮球',
                entitle:'backetaball',
                key:'sports2',
                route:'/Learning',
            },
            {
                title:'排球',
                entitle:'paiqiuball',
                key:'sports3',
                route:'/Sports',
            },
            {
                title:'高尔夫',
                entitle:'gaoerfu',
                key:'sports4',
                route:'/Goout/:id',
            },
            {
                title:'游泳',
                entitle:'swimming',
                key:'sports5',
            },{
                title:'桌球',
                entitle:'tableball',
                key:'sports6',
                children:[
                   {
                    title:'斯洛克',
                    entitle:'ssiluoke',
                    key:'sports61',
                   },
                   {
                    title:'美式桌球',
                    entitle:'UStableball',
                    key:'sports62',
                   }
                ]
            }
        ]
    },
    {
        title:'美食',
        entitle:'foods',
        key:'foods',
        children:[
            {
                title:'糖醋排骨',
                entitle:'paigu',
                key:'foods1',
            },
        ]
    }

]
export function getMenu() {
    const menu = JSON.parse(localStorage.getItem('userInfo')).username === "袁铭湘" ? adminmenu : usermenu;
    return menu;
}

export function login(data) {
    return post('/api/login', data)
}

export function logout() {
    return post('/api/logout')
}