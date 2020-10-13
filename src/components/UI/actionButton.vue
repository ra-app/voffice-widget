<template>
  <vue-fab
  :mainBtnColor="mainBtnColor"
  :clickAutoClose="false">
    <fab-item :idx="1">
      <div class="MainMenu">
        <h1 style="text-align: center" v-if="$root.title">{{ $root.title }}</h1>
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
    </fab-item>
  </vue-fab>
</template>
<script>
export default {
  props:['title'],
  data () {
    return {
      showMenu: false,
      mainBtnColor: '#01879d',
      activeTab: ''
    }
  },
  created () {
    this.activeTab = this.$route.name
  },
  methods: {
    clickMainBtn: function () {
      this.showMenu = !this.showMenu;
    },
    switchTab (tab) {
      this.$router.push({ name: tab })
    }
  },
  watch: {
  '$route.name' () {
    this.activeTab = this.$route.name
  }
}
}
</script>
<style scoped>
.MainMenu{
    position: fixed;
    min-width: 33%;
    bottom: 11%;
    height: 50%;
    right: 3%;
    border: 1px solid #f2f2f2;
    border-radius: 10px;
    padding: 10px;
    box-shadow: azure;
    box-shadow: 0px 0px 2px #a4a4a4;
}
.fab-item{
  display: flex;
  justify-content: center;
  transition: none !important;;
  top: -50px;
  width: 0% !important;
}
.fab-main-container{
  right: 8% !important;
}
</style>
