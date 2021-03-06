import createPersistedState from 'vuex-persistedstate'
/*
  This little plugin is the surprisingly-easy way to make Vuex stuff persist in
  a user's browser's localStorage. Super useful, especially for the cookie consent
  banner so it won't show up every time they refresh the page
*/

export default ({ store, isHMR }) => {
  if (isHMR) { return }

  window.onNuxtReady((nuxt) => {
    createPersistedState()(store)
  })
}
