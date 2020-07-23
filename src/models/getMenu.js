import { getMenu } from '../service/getMenu';

export default {
    namespace: 'getMenu',
    state: {
        navList: [],
    },
    reducers: {
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload,
            };
        },
    },
    effects: {
        *getMenu(_, { put, call }) {
            const navList = yield call(getMenu);
            yield put({
                type: 'updateState',
                payload: {
                    navList,
                },
            });
        },
    },
};
