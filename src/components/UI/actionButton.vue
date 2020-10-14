<template>
  <vue-fab
  :mainBtnColor="mainBtnColor"
  :clickAutoClose="false">
    <fab-item :idx="1">
      <div class="MainMenu">
        <HeaderPanel :title="title"/>
        <ContainerView :title="title"/>
        <FooterPanel/>
      </div>
    </fab-item>
  </vue-fab>
</template>
<script>
import ContainerView from '../../views/containerView.vue'
import HeaderPanel from './headerPanel'
import FooterPanel from './footerPanel'
export default {
  components: { ContainerView, HeaderPanel, FooterPanel },
  props: ['title'],
  data () {
    return {
      showMenu: false,
      mainBtnColor: '#01879d'
    }
  },
  methods: {
    clickMainBtn: function () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
<style scoped>
.MainMenu{
    position: fixed;
    min-width: calc(100% / 5);
    bottom: 11%;
    height: 50%;
    right: 3%;
    /* border: 1px solid #f2f2f2; */
    border-radius: 10px;
    box-shadow: 0px 0px 1px #a4a4a4;
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
