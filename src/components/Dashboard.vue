<template>
  <div class="dashboard">
    <!-- -->
    <h2>Welcome to the Wage Dashboard.</h2>
    <h1>Hi, {{ user.username }}.</h1>
    <h1>Email: {{ user.email }}.</h1>
     <button v-on:click="logout()" type="submit">Sign out of Blockstack</button>
     <!-- -->
     <LandingFooter />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LandingFooter from '@/components/LandingFooter.vue'

export default {
  name: 'Dashboard',
  components: { LandingFooter, },
  data: function () {
    return {
      // domain_name: "Wage.pm",
    }
  },
  computed: {
    ...mapState(['loggedIn', 'user'])
  },
  methods: {
    ...mapActions(['logout'])
  },
}
</script>

<style scoped lang="scss">
h2 {
  margin: 40px 0 0;
}

button {
        color: white;
        font-size: 18px;
        background-color: #211f6d;
        padding: 19px 34px;
        border-radius: 44px;
        cursor: pointer;
        transform: translateY(2px);
        transition: background-color 0.2s ease;
  }
button:hover {
        background-color: blue;
}
</style>
