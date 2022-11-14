import { types } from './types.js'

const actions = {
  setUsers({ commit, state }, user) {
    const cloneUsers = JSON.parse(JSON.stringify(state.users))
    const updatedUsers = cloneUsers.map(cloneUser => (
      cloneUser.id === user.id ? { ...cloneUser, name: user.name } : cloneUser
    ))
    commit(types.SET_USERS, updatedUsers)

  },
  deleteUser({ commit, state }, userId) {
    const cloneUsers = JSON.parse(JSON.stringify(state.users))
    const updatedUsers = cloneUsers.filter(company => company.id !== userId)
    commit(types.SET_USERS, updatedUsers)
  },
  setNewUser({ commit, state }, newUser) {
    const cloneUsers = JSON.parse(JSON.stringify(state.users))
    cloneUsers.push(newUser)
    commit(types.SET_USERS, cloneUsers)
  }
}

export default actions