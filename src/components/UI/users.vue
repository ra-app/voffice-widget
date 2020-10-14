<template>
  <div class="userDiv">
    <h4 slot="title">
      <img class="userImg" :src="data.img" /> {{ data.name }}
    </h4>
  </div>
</template>


<script>
export default {
  props: ['data'],
  methods: {

  }
}
</script>
<style scoped>
.userDiv{
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
}
.userImg{
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 50%;
}
</style>
