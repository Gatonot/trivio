import { types } from './types.js'

const mutations = {
  [types.SET_USERS]: (state, users) => state.users = users
}

export default mutations