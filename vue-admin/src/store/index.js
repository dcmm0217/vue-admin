import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import app from "./modules/app";
import login from "./modules/login";
import common from './modules/common';
import infoDetailed from './modules/infoDetailed';
import permission from './modules/permission';

export default new Vuex.Store({
  modules: {
    app,
    login,
    common,
    infoDetailed,
    permission
  }
});


/* import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"; */

/* export default new Vuex.Store({
  state: {
    isCollapse: false
  },
  mutations: {
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  getters: {},
  actions: {}
}); */
/* export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
}); */