import intl from 'react-intl-universal';
import locales from '../locales';
import storage from '../utils/localStorage';
import router from 'umi/router';
import { login,logout}  from '../service/getMenu'
  const defaultState = {
    currLocale: storage.get('locale') || 'zh_CN',
    localeLoad: false,
  }
 
  export default {
    namespace: 'global',
 
    state: defaultState,
 
    effects: {
      // 初始化国际化
      *initlocal({_},{ put,select }){
        const { currLocale } = yield select(({ global }) => global);
        const params = {
          currentLocale:currLocale,
          locales
        };
        yield intl.init(params);
        yield put({
          type: 'setLocale',
          payload: {
            localeLoad: true,
          }
        });
        storage.add('locale',currLocale);
      },

      // 切换改变语种
      *changeLocale({ payload }, { put }) {
        yield put({
          type: 'setLocale',
          payload: {
            currLocale: payload,
            localeLoad: true,
          }
        });
        // 把当前国际化持久化到 localstorage 中
        storage.add('locale',payload);
      },

      *login({payload},{call,put}) {
        const data = yield call(login,payload)
        if(data.code === "200") {
          router.push('/')
        }
      },
      
      *logout(_,{call,put}) {
        const data = yield call(logout)
        if(data.code === "200") {
          localStorage.clear();
          router.push('/Login')
        }
      }
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
