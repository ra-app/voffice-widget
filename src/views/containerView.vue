<template>
  <div class="panelContainer">
    <router-view />
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.panelContainer{
  padding: 10px;
  overflow: auto;
  max-height: calc(100% - 90px);
}
</style>
