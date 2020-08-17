import intl from 'react-intl-universal';
import router from 'umi/router';
import locales from '../locales';
import storage from '../utils/localStorage';
import { login, logout } from '../service/getMenu';

export default {
    namespace: 'global',

    state: {
        currLocale: storage.get('locale') || 'zh-CN',
        localeLoad: false,
    },

    effects: {
        // 初始化和改变国际化
        *initlocal({ payload }, { put, select }) {
            const { currLocale } = yield select(({ global }) => global);
            const endlocal = payload || currLocale;
            const params = {
                currentLocale: endlocal,
                locales,
            };
            yield intl.init(params);
            yield put({
                type: 'setLocale',
                payload: {
                    currLocale: endlocal,
                    localeLoad: true,
                },
            });
            // 存localstorage
            storage.add('locale', endlocal);
        },

        *login({ payload }, { call }) {
            const data = yield call(login, payload);
            console.log(data);
            if (data.code === '200') {
                router.push('/');
            }
        },

        *logout(_, { call }) {
            const data = yield call(logout);
            if (data.code === '200') {
                // localStorage.clear();
                router.push('/Login');
            }
        },
    },

    reducers: {
        setLocale(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },
};
