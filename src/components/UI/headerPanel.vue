<template>
  <div class="headerPanel">
    {{$root.title}}
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {}
  },
  methods: {}
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
</style>
