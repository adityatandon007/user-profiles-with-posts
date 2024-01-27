<template>
  <div id="app">
    <div class="users-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <UserProfileCard v-for="(user) in usersList" :key="user.id" :user="user" />
    </div>
  </div>
</template>

<script>
import UserProfileCard from './components/UserProfileCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    UserProfileCard,
  },
  created() {
    // Fetch users when component is created
    this.fetchUsers();
  },
  computed: {
    ...mapState('users', ['usersList']),
  },
  methods: {
    ...mapActions('users', ['fetchUsers']),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.users-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
