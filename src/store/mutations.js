export default {
  changeCity(state, city) {
    state.city = city;
    localStorage.city = city;
  },
  changeId(state, id) {
    state.lastId = id;
  }
};
