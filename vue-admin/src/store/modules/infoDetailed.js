const state = {
  id: '' || sessionStorage.getItem('infoId'),
  title: '' || sessionStorage.getItem('infoTitle')
}
const getters = {
  infoId: state => state.id,
  infoTitle: state => state.title,
}
const mutations = {
  UPDATE_STATE_VALUE(state,params){
    for(let key in params){
      state[key] = params[key].value
      if(params[key].session){
        sessionStorage.setItem(params[key].sessionKey, params[key].value);
      }
    }
  },
  /* SET_ID(state, value) {
    state.id = value
    sessionStorage.setItem('infoId', value);
  },
  SET_TITLE(state, value) {
    state.title = value
    sessionStorage.setItem('infoTitle', value);
  } */
}
const actions = {

}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}