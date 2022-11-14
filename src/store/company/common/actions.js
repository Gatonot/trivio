import { types } from './types.js'

const actions = {
    setCompany({ commit, state }, company) {
        const cloneCompanies = JSON.parse(JSON.stringify(state.companies))
        const updatedCompanyName = cloneCompanies.map(cloneCompany => (
            cloneCompany.id === company.id ? { ...cloneCompany, name: company.name } : cloneCompany
        ))
        commit(types.SET_COMPANY, updatedCompanyName)
    },
    deleteCompany({ commit, state }, companyId) {
        const cloneCompanies = JSON.parse(JSON.stringify(state.companies))
        const updatedCompanies = cloneCompanies.filter(company => company.id !== companyId)
        commit(types.SET_COMPANY, updatedCompanies)
    },
    setNewCompany({ commit, state }, newCompany) {
        const cloneCompanies = JSON.parse(JSON.stringify(state.companies))
        cloneCompanies.push(newCompany)
        commit(types.SET_COMPANY, cloneCompanies)
    }
}

export default actions