<template>
  <div class="my-4 flex items-center">
    <input
      v-model="searchTerm"
      @keyup.enter="filterUsers"
      placeholder="Search users..."
      class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 flex-grow mr-2"
    />
    <button
      @click="filterUsers"
      class="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600"
    >
      Search
    </button>
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
    filterUsers() {
      // Emit an event to notify the parent component about the search term
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>
