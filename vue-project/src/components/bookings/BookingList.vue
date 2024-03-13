<template>
  <section>
    <h2>Here's your current bookings:</h2>

    <div class="row" v-for="(booking, index) in bookings" :key="index">
      <div>{{ booking.name }}</div>
    </div>

    <h3 class="row">Total: {{ totalDisplay }}</h3>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Booking {
  name: string
  price: number
}

export default defineComponent({
  name: 'BookingList',
  props: {
    bookings: {
      type: Array as () => Booking[],
      required: true
    }
  },
  computed: {
    totalDisplay() {
      let totalCost = 0
      if (this.bookings && this.bookings.length > 0) {
        totalCost = this.bookings.map((b:any) => b.price).reduce((a, b) => a + b)
      }
      return '$ ' + totalCost.toLocaleString('en-US')
    }
  },
})
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
  margin: 0.5em;
}
</style>
