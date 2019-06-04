<template>
  <div class="home">
    <LandingHero v-if="!loggedIn" />
    <Dashboard v-if="loggedIn && user" />
  </div>
</template>

<script>

import { mapState } from 'vuex'
import LandingHero from '@/components/LandingHero.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'home',
  components: {
    LandingHero,
    Dashboard,
  },
  computed: {
    ...mapState(['loggedIn', 'user'])
  },
  data: function () {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
