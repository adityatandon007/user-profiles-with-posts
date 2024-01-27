<template>
  <div class="user-profile-card min-h-250 border border-gray-300 rounded-md shadow-md p-4">
    <!-- Display user details -->
    <div class="user-details bg-gray-100 p-4 mb-4 rounded-md">
      <h2 class="text-xl font-bold">{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Website: {{ user.website }}</p>
      <div>
        <strong>Address:</strong>
        <p>{{ user.address?.street }}, {{ user.address?.city }}</p>
        <p>{{ user.zipcode }}</p>
      </div>
    </div>

    <!-- Button to toggle user posts visibility -->
    <button @click="togglePostsVisibility" class="bg-green-500 text-white px-4 py-2 rounded">
      Toggle Posts
    </button>

    <!-- Display user posts -->
    <div v-if="showPosts" class="user-posts mt-4">
      <user-post v-for="post in userPosts" :key="post.id">
        <div>{{ post.title }}</div>
        <div>{{ post.body }}</div>
      </user-post>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'UserProfileCard',
  components: {
    UserPost: () => import('./UserPost.vue'), // Dynamic import for better optimization
  },
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      showPosts: false,
    };
  },
  computed: {
    ...mapState('users', ['userPosts']),
  },
  methods: {
    ...mapActions('users', ['fetchUserPosts']),
    togglePostsVisibility() {
      this.showPosts = !this.showPosts;
      if (this.showPosts) {
        this.fetchUserPosts(this.user.id);
      }
    },
  },
};
</script>
