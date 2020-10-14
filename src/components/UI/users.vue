<template>
  <div class="userDiv" @click="setCall(data.uuid)">
    <h4 slot="title">
      <img class="userImg" :src="data.avatar" /> {{ data.name }}
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
      // this.setCallTo(uuid)
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
}
.userImg{
  height: 25px;
  width: 25px;
  vertical-align: middle;
  margin-right: 5px;
  border-radius: 50%;
}
</style>
