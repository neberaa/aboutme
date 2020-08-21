import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menuIsOpen: false,
    menuPreOpen: false,
  },
  mutations: {
    togglePreOpenMenu(state) {
      state.menuPreOpen = !state.menuPreOpen;
    },
    toggleMenu(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },
    closeMenu(state) {
      if (state.menuIsOpen) {
        state.menuIsOpen = false;
      }
    },
    loadJSON(state, name) {
      const json = localStorage.getItem(name);
      if (json) {
        state[name] = JSON.parse(json);
      }
    },
  },
  getters: {
  }
});

export default store;
