<template>
  <div>
    <input v-model="searchTerm" @input="searchUsers" placeholder="Search users..." />
  </div>
</template>

<script>
export default {
  name: 'UserSearch',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    searchUsers() {
      // Implement logic to trigger search
    },
  },
};
</script>
