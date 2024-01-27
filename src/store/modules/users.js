const state = {
  loading: false,
  error: '',
  usersList: [],
  userPosts: {}
};

const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_USERS_LIST(state, usersList) {
    state.usersList = usersList;
  },
  SET_USER_POSTS(state, userPosts) {
    state.userPosts = {...state.userPosts, ...userPosts};
  },
};

const actions = {
  async fetchUsers({ commit }) {
    try {
      commit('SET_LOADING', true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const usersList = await response.json();
      commit('SET_USERS_LIST', usersList);
    } catch (error) {
      commit('SET_ERROR', 'Failed to fetch users. Try Again 😔');
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async fetchUserPosts({ commit }, userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const posts = await response.json();
    const userPosts = {[userId]: posts}
    commit('SET_USER_POSTS', userPosts);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
