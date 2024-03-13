<template>
      <input type="text" class="form-control" placeholder="Booking Name" v-model="booking.name" />
      <input type="number" class="form-control" placeholder="Price" v-model="booking.price" />
      <button class="btn btn-primary" @click="saveBooking">Save Booking</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'BookingForm',
  data() {
    return {
      thisModal: ref(null),
      booking: {
        name: '',
        price: 0
      }
    }
  },
  emits: ['bookingAdded'],
  methods: {
    showModal() {
      ;(this.thisModal as any)?.value.Show()
    },
    saveBooking() {
      this.$emit('bookingAdded', this.booking)
    }
  },
})
</script>
