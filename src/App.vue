<template>
  <div id="app">
    <div class="users-container">
      <div class="text-2xl text-white text-center">User profiles with search and toggled posts functionality</div>
      <UserSearch @search="filterUsers" />
      <LoaderComponent v-if="loading" />
      <div v-if="error">
        {{ error }}
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <UserProfileCard v-for="(user) in filteredUsers" :key="user.id" :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserProfileCard from './components/UserProfileCard.vue';
import UserSearch from './components/UserSearch.vue';
import LoaderComponent from './components/LoaderComponent.vue'

export default {
  name: 'App',
  components: {
    UserProfileCard,
    UserSearch,
    LoaderComponent
  },
  data() {
    return {
      filteredUsers: [],
    }
  },
  created() {
    // Fetch users when component is created
    this.fetchUsers().then(() => {
      // Set both usersList and filteredUsers initially
      this.filteredUsers = this.usersList.slice();
    });
  },
  computed: {
    ...mapState('users', ['usersList', 'loading', 'error']),
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
    filterUsers(searchTerm) {
      // Filter users based on the search term
      this.filteredUsers = this.usersList.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss">
#app {
  padding: 30px 0;
  /* Gradient background */
  background: linear-gradient(135deg, #f06, #9f6);
}

.users-container {
  max-width: 1200px;
  margin: 0px auto;
}
</style>
