<template>
  <div class="posts-tab">
    <ul class="posts-sidebar">
      <li
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:class="{ selected: post === selectedPost }"
        v-on:click="selectedPost = post"
      >
        {{ post.title }}
      </li>
    </ul>
    <div class="selected-post-container">
      <div
        v-if="selectedPost"
        class="selected-post"
      >
        <h3>{{ selectedPost.title }}</h3>
        <div v-html="selectedPost.content"></div>
      </div>
      <strong v-else>
        点击左侧
      </strong>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabPosts",
    data: function () {
      return {
        posts: [
          {
            id: 1,
            title: 'One',
            content: '<p>One Content</p><input type="text" value="1">'
          },
          {
            id: 2,
            title: 'Two',
            content: 'Two Content'
          },
          {
            id: 3,
            title: 'Three',
            content: 'Three Content'
          }
        ],
        selectedPost: null
      }
    },
  }
</script>

<style scoped>

</style>
