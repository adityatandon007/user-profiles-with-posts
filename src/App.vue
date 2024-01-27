<template>
  <div id="app" class="flex justify-center items-center flex-col">
    <div class="users-container flex flex-wrap justify-center space-x-4 space-y-4">
      <UserProfileCard v-for="(user) in usersList" :key="user.id" :user="user" class="mb-4" />
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
}
</style>
