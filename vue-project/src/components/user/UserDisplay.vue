<template>
  <div class="user-box">
    <h2>{{ user.name }}</h2>
    <div>{{ user.age }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface User {
  name: string
  age: number
}
export default defineComponent({
  name: 'UserDisplay',
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  }
})
</script>

<style scoped>
.user-box {
  border: 1px solid #ccc;
  padding: 1em;
  margin: 1em;
  width: 200px;
}
</style>
