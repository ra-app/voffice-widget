<template>
  <div>
    <Users v-for="contact in contacts"
      :key="contact.id"
      :data="contact" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Users from '../components/UI/users'

export default {
  computed: {
    ...mapGetters([
      'contacts'
    ])
  },
  components: {
    Users
  }
}
</script>
