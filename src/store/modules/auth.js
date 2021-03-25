import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanseStorage'

const state = {
  isSubmitting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmitting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  }
}

const actions = {
  register(contex, credentials) {
    return new Promise(resolve => {
      contex.commit('registerStart')
      authApi
        .register(credentials)
        .then(response => {
          contex.commit('registerSuccess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch(result => {
          contex.commit('registerFailure', result.response.data.errors)
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
