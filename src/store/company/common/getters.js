const getters = {
    getCompanies: state => state.companies,
    getTransformCompanies: state => {
        const transformCompanies = {}
        state.companies.forEach(company => {
            transformCompanies[company.id] = company.name
        })
        return transformCompanies
    }
}

export default getters