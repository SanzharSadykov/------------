import Vue from 'vue'
import Vuex from 'vuex'
import favorites from './favorites.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    favorites
  }
})
