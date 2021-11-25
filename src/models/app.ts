import { request } from 'umi'
import pathToRegexp from 'path-to-regexp'

const AppModel: any = {
  namespace: 'app',
  state: {
    userInfo: {time: Date.now()}
  },
  effects: {
  
  },
  reducers: {
    editProp(state, { key, value }) {
      return { ...state, [key]: value }
    },
    mergeState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  // subscriptions: {
  //   setup({ dispatch, history }) {
  //     return history.listen(({ pathname }) => {
  //       dispatch({ type: 'getAppConfig', pathname })
  //     })
  //   },
  // },
}
export default AppModel
