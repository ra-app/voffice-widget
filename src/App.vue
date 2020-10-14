<template>
  <div id="app">
    <ActionButton :title="title"/>
  </div>
</template>
<script>
import ActionButton from './components/UI/actionButton.vue'
export default {
  components: {
    ActionButton
  },
  props: ['title'],
  data () {
    return {}
  },
  mounted () {
    this.$router.push({ name: 'contacts' })
  }
}
</script>
