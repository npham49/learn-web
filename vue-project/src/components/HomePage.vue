<template>
  <section>
    <div class="nav-bar"></div>
    <h1>Relecloud Galaxy Tours</h1>

    <div>
      <h2>Welcome!</h2>
      <UserDisplay :user="user" ></UserDisplay>
      <h2>{{ cruise.name }}</h2>
      <div>{{ cruise.description }}</div>
      <hr />

      <BookingList :bookings="bookings"></BookingList>
    </div>
    <button class="btn btn-primary">Hello</button> 
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserDisplay from './user/UserDisplay.vue'
import BookingList from './bookings/BookingList.vue'
export default defineComponent({
  data() {
    return {
      cruise: {
        name: 'Cruise to the moon',
        description:
          'Cruise to the moon in our luxurious shuttle. Watch the astronauts working outside the International Space Station.',
        cabins: [
          { name: 'Coach', price: 125000 },
          { name: 'Business', price: 275000 },
          { name: 'First', price: 430000 }
        ]
      },
      bookings: [{ name: 'Sample', price: 0 }],
      user: {
        name: 'Cheryl',
        age: 28
      }
    }
  },
  components: {
    UserDisplay,
    BookingList
  }
})
</script>

<style lang="css" scoped>
body {
  background-color: #f2f2f2;
  margin: 0, 5%;
  font-family: tahoma, sans-serif;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  vertical-align: middle;
  margin: 2em;
}

.button {
  background-color: #39495c;
  border-radius: 5px;
  color: white;
  text-align: center;
}

.nav-bar {
  background: linear-gradient(-50deg, #010801, #0d0d60);
  height: 60px;
  margin-bottom: 25px;
}
</style>
