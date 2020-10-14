import { findIndex } from 'lodash'
import Vue from 'vue'
import moment from 'moment'

export default {
  editTodo (state, data) {
    const index = findIndex(state.todos, { id: data.id })
    if (index < 0) state.todos.push({ ...data, id: moment().format('x') })
    else state.todos.splice(index, 1, data)
  },
  removeTodo (state, id) {
    const index = findIndex(state.todos, { id: id })
    if (index > -1) state.todos.splice(index, 1)
  },
  setContacts (state, contacts) {
    contacts.forEach(el => {
      const index = findIndex(state.contacts, { uuid: el.uuid })
      if (index < 0) state.contacts.push(el)
    })
  },
  setCallTo (state, uuid) {
    if (!state.remoteStreams[uuid]) {
      Vue.set(state.remoteStreams, uuid, { first: undefined, second: undefined })
    }
  },
  removeCallTo (state, uuid) {
    if (state.remoteStreams[uuid]) {
      const index = state.remoteStreams.indexOf(uuid)
      if (index > -1) state.remoteStreams.splice(index, 1)
    }
  }
}
