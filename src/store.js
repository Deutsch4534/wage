import Vue from 'vue'
import Vuex from 'vuex'
// import Router from 'vue-router'
import { UserSession, AppConfig } from 'blockstack'

const appConfig = new AppConfig(['store_write', 'email', 'publish_data'])
const session = new UserSession({ appConfig })

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      session: session,
      loggedIn: null,
      user: null
    },
    mutations: {
      login (state) {
        state.loggedIn = true
      },
      logout (state) {
        state.loggedIn = null
        state.user = null
      },
      addUser (state, user) {
        state.loggedIn = true
        state.user = user
      }
    },
    actions: {
      login({ commit }) {
        commit('login')
        localStorage.setItem("loggedIn", true)
        session.redirectToSignIn() // prepare user for signup ... can use `redirectToSignInWithAuthRequest()`
      },
      logout({ commit }) {
        commit('logout')
        localStorage.removeItem("loggedIn")
        session.signUserOut()
        window.location = window.location.origin
      },
      addUser({ commit }, user) {
        commit('addUser', user)
      }
    }
})