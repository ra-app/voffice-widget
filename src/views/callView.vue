<template>
  <div class="mainCallView">
    Call container
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    ...mapMutations([
      'removeCallTo'
    ])
  },
  mounted () {
  },
  components: {

  },
  methods: {
  }
}
</script>
