<template>
  <div>
    <button class="btn btn-primary" @click="saveUser">Save user</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'UserDialog',
  emits: ['userUpdated'],
  methods: {
    saveUser() {
      // perform other operations
      this.$emit('userUpdated', true) // emits event
    }
  }
})
</script>
