import Vuex from 'vuex'
import Vue from 'vue'
import { createStore } from 'vuex'

import usersModule from './users/index.js'
import companyModule from './company/index.js'


export default createStore({
  modules: {
    user: usersModule,
    company: companyModule
  }
})
