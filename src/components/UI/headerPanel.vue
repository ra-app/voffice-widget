<template>
  <div class="headerPanel" :class="{'noRadius': remoteStreams > 0}">
    {{$root.title}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['title'],
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters([
      'remoteStreams'
    ])
  }
}
</script>
<style scoped>
.headerPanel{
  text-align: center;
  height: 35px;
  background: #02889c;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: white;
  padding: 5px;
  font-size: 15px;
  box-shadow: 0px 0px 1px #a4a4a4;
}
.noRadius{
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}
</style>
