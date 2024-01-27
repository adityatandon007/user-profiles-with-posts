const state = {
  usersList: [],
  userPosts: {}
};

const mutations = {
  SET_USERS_LIST(state, usersList) {
    state.usersList = usersList;
  },
  SET_USER_POSTS(state, userPosts) {
    state.userPosts = {...state.userPosts, ...userPosts};
  },
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersList = await response.json();
    commit('SET_USERS_LIST', usersList);
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
