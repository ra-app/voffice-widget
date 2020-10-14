import { orderBy } from 'lodash'

export default {
  todos (state) {
    return orderBy(state.todos, ['id'], ['desc'])
  },
  contacts (state) {
    return orderBy(state.contacts, ['name'], ['asc'])
  }
}
