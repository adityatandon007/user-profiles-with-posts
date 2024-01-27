<template>
  <div class="user-profile-card min-h-250 border border-gray-300 rounded-md shadow-md p-4 transition-transform duration-300 transform">
    <!-- Display user details -->
    <div class="user-details bg-gray-100 p-4 mb-4 rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-2">{{ user.name }}</h2>
      <div class="mb-2">
        <p class="text-gray-700">Email: {{ user.email }}</p>
        <p class="text-gray-700">Website: {{ user.website }}</p>
      </div>
      <div>
        <strong class="text-gray-800">Address:</strong>
        <p class="text-gray-700">{{ user.address?.street }}, {{ user.address?.city }}</p>
        <p class="text-gray-700">{{ user.zipcode }}</p>
      </div>
    </div>

    <!-- Button to toggle user posts visibility -->
    <button
      @click="togglePostsVisibility"
      class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
    >
      {{ showPosts ? 'Hide Posts' : 'Show Posts' }}
    </button>

    <!-- Display user posts -->
     <!-- Display user posts -->
     <div v-if="showPosts" class="user-posts mt-4 border rounded-md p-4">
      <user-post v-for="post in userPosts[user.id]" :key="post.id" class="mb-4">
        <div class="post-title text-lg font-semibold mb-2">{{ post.title }}</div>
        <div class="post-body text-gray-800">{{ post.body }}</div>
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
