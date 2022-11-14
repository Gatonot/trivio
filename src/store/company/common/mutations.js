import { types } from './types.js'

const mutations = {
    [types.SET_COMPANY]: (state, companies) => state.companies = companies
}

export default mutations