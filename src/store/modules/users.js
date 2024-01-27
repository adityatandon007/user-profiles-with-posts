const state = {
  userDetails: {
    name: 'Dummy'
  },
  userPosts: [],
};

const mutations = {
  SET_USER_DETAILS(state, userDetails) {
    state.userDetails = userDetails;
  },
  SET_USER_POSTS(state, userPosts) {
    state.userPosts = userPosts;
  },
};

const actions = {
  async fetchUserDetails({ commit }, userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userDetails = await response.json();
    commit('SET_USER_DETAILS', userDetails);
  },
  async fetchUserPosts({ commit }, userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const userPosts = await response.json();
    commit('SET_USER_POSTS', userPosts);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
