<template>
  <div id="app">
  <fab
    :position="position"
    :bg-color="bgColor"
    :actions="fabActions"
    @cache="cache"
    @alertMe="alert"
  ></fab>
    <!-- access root props via $root -->
    <h1 style="text-align: center" v-if="$root.title">{{ $root.title }}</h1>

    <at-menu mode="horizontal" :active-name="activeTab" @on-select="switchTab">
      <at-menu-item name="list">
        <i class="icon icon-list"></i>
        List
      </at-menu-item>
      <at-menu-item name="edit">
        <i class="icon icon-plus-square"></i>
        Add new
      </at-menu-item>
    </at-menu>
    <br>
    <router-view />
  </div>
</template>

<script>

import fab from 'vue-fab'


export default {
  components: {
    fab
  },
  props: ['title'],
  data () {
    return {
      bgColor: '#778899',
          position: 'bottom-right',
          fabActions: [
              {
                  name: 'cache',
                  icon: 'cached'
              },
              {
                  name: 'alertMe',
                  icon: 'add_alert'
              }
          ],
      activeTab: ''
    }
  },
  created () {
    this.activeTab = this.$route.name
  },
  methods: {
    switchTab (tab) {
      this.$router.push({ name: tab })
    },
    cache(){
          console.log('Cache Cleared');
      },
      alert(){
          alert('Clicked on alert icon');
      }
  },
  watch: {
    '$route.name' () {
      this.activeTab = this.$route.name
    }
  }
}
</script>
