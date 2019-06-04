// import Vue from 'vue';
// import Vuex from 'vuex';
// import Router from 'vue-router';

export function isDashboard () {
    // check if a specific component is active
    return this.$route.name === 'dashboard'
}

export function isActive(componentName) {
    return this.$route.name === componentName.toString();
}