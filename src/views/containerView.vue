<template>
  <div class="panelContainer">
    <at-menu mode="horizontal" :active-name="activeTab" @on-select="switchTab">
       <at-menu-item name="list">
          <i class="icon icon-list"></i>
          Bereich
        </at-menu-item>
        <at-menu-item name="edit">
          <i class="icon icon-plus-square"></i>
          Mitglieder
        </at-menu-item>
      </at-menu>
      <br>
      <router-view />
  </div>
</template>
<script>
export default {
  props: ['title'],
  data () {
    return {
      activeTab: ''
    }
  },
  created () {
    this.activeTab = this.$route.name
  },
  watch: {
    '$route.name' () {
      this.activeTab = this.$route.name
    }
  },
  methods: {
    switchTab (tab) {
      this.$router.push({ name: tab })
    }
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
