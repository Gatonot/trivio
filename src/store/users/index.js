import mutations from './common/mutations.js'
import state from './common/state.js'
import actions from './common/actions.js'
import getters from './common/getters.js'

const usersModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default usersModule