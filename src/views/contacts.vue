<template>
  <div>
    <Users v-for="contact in contacts"
      :key="contact.id"
      :data="contact"
      :remoteStreams="remoteStreams"/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Users from '../components/UI/users'

export default {
  computed: {
    ...mapGetters([
      'contacts', 'remoteStreams'
    ])
  },
  mounted () {
    this.getUsers()

    // setInterval(() => {
    //   this.getUsers()
    // }, 3000)
  },
  components: {
    Users
  },
  methods: {
    ...mapMutations([
      'setContacts'
    ]),
    async getUsers () {
      try {
        const result = await fetch('https://beta.voffice.pro/api/beacon', {
          method: 'GET',
          headers: {
            Accept: 'application/json'
          }
        }).then(res => res.json())
        if (result.success) {
          this.setContacts(result.users)
        }
      } catch (error) {
        console.warn('Error on fetch', error)
      }
    }
  }
}
</script>
