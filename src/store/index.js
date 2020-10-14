import Vue from 'vue'
import Vuex from 'vuex'

import moment from 'moment'

import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: moment().format('x'),
        title: `I'm your new todo!`,
        text: 'Just wish I remembered what I wanted to write..'
      }
    ],
    contacts: [
      {
        id: 1,
        name: `Test`,
        img: 'https://beta.voffice.pro/userMedia/avatars/beta.voffice.pro/beta.voffice.pro.png?_=1602602102950'
      },
      {
        id: 2,
        name: `Test 1`,
        img: 'https://beta.voffice.pro/userMedia/avatars/beta.voffice.pro/beta.voffice.pro.png?_=1602602102950'
      },
      {
        id: 3,
        name: `Test 2`,
        img: 'https://beta.voffice.pro/userMedia/avatars/beta.voffice.pro/beta.voffice.pro.png?_=1602602102950'
      }
    ]
  },
  getters,
  mutations
})
