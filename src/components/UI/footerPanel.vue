<template>
  <div class="navbar">
    <div class="colum">
      <at-button @click="gotTo('contacts') " class="noBorder font15" size="large" icon="icon-users"></at-button>
      <at-button @click="gotTo('') " class="noBorder font15" size="large" icon="icon-message-circle"></at-button>
      <at-button @click="gotTo('') " class="noBorder font15" size="large" icon="icon-phone"></at-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: ''
    }
  },
  methods: {
    gotTo (page) {
      this.$router.push({ name: page })
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://cdn.lineicons.com/1.0.1/LineIcons.min.css');
.navbar{
  width: 100%;
  height: 45px;
  background-color: white;
  border-top: 1px solid #f2f2f2;
  bottom: 0;
  position: absolute;
  border-radius: 0px 0px 10px 10px;
  display: flex;
}
.colum{
  display: flex;
  width: 100%;
  height: 45px;
  align-items: center;
  justify-content: center;
}
.noBorder{
  border: none !important;
}
</style>
<style>
.noBorder.font15 > i{
  font-size: 18px;
}
</style>
