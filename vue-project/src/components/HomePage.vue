<template>
  <div class="home-page">
    <h1>
      Home Page
    </h1>
    <button type="button" class="btn btn-primary">Primary</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {}
  },
  methods: {}
})
</script>

<style lang="css" scoped>
  .home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
