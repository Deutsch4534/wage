<template>
  <div id="app">
    <AppNavbar v-if="isDashboard"/> 
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import { isDashboard, } from './utils.js'
import AppNavbar from '@/components/_App/Nav.vue'
import { mapState, mapActions, } from 'vuex'

export default {
name: 'App',
  components: { AppNavbar, },
  computed: {
    ...mapState(['session'])
  },
  methods: {
    ...mapActions(['addUser']),
    isDashboard
  },
  mounted() {
    if (this.session.isUserSignedIn()) {
        const userData = this.session.loadUserData()
        const user = new this.$blockstack.Person(userData.profile)
        user.username = userData.username
        user.email = userData.email
        user.name = userData.name
        this.addUser(user)
    } else if (this.session.isSignInPending()) {
      this.session.handlePendingSignIn().then(() => {
        window.location = window.location.origin
        // do stuff with authResponse token
        // IMPLEMENT LATER: --> Initiate onboarding [are you a dispatcher or worker?]
      })
    }
  }
}
</script>


<style lang="scss">
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
