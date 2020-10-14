import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import Edit from './views/Edit.vue'
import Contacts from './views/contacts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/edit/:id?',
      name: 'edit',
      component: Edit
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/*',
      redirect: { name: 'contacts' }
    }
  ],
  mode: 'abstract',
  linkActiveClass: 'active'
})
