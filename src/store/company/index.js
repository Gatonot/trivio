import mutations from './common/mutations.js'
import state from './common/state.js'
import actions from './common/actions.js'
import getters from './common/getters.js'

const companyModule = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default companyModule