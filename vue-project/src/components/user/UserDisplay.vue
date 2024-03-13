<template>
  <div class="user-box">
    <h2>{{ user.name }}</h2>
    <div>{{ user.age }}</div>
    <UserDialog @userUpdated="handleUserUpdated"></UserDialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserDialog from './UserDialog.vue'

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
  },
  methods:{
    handleUserUpdated(update: boolean) {
      console.log('User updated', update)
    }
  },
  components: {
    UserDialog
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
