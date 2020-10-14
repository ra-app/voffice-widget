<template>
  <div class="userDiv" @click="setCall(data.uuid)">
    <h4 slot="title">
      <img class="userImg" :src="data.avatar" /> <p class="noMargin text-truncate">{{ data.name }}</p> <at-button @click="setCall(data.uuid) " circle class="noBorder font15 btnCall" icon="icon-phone"></at-button>
    </h4>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {

  props: ['data', 'remoteStreams'],
  methods: {
    ...mapMutations([
      'setCallTo'
    ]),
    setCall (uuid) {
      this.setCallTo(uuid)
      this.$router.push({ name: 'callView' })
    }
  }
}
</script>
<style scoped>
.userDiv{
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #f2f2f2;
  position: relative;
}
.userImg{
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 50%;
}
.noBorder{
  border: none !important;
}
.noMargin{
  margin: 0px;
}
.text-truncate{
  display: inline-block;
  white-space: nowrap!important;
  overflow: hidden!important;
  text-overflow: ellipsis!important;
  vertical-align: middle;
  max-width: 180px;
}
.btnCall{
  position: absolute;
  right: 0;
  top: 8px;
}
</style>
<style>
.noBorder.font15 > i{
  font-size: 15px;
}
</style>
