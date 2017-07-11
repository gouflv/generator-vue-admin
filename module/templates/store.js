import createStore from 'admin-common'
import { GET, PUT, POST, DELETE } from 'utils/ajax'

const module_state = {
  config: {
    api: 'admin/user'
  }
}

const module_action = {
}

const { state, actions } = createStore(module_state, module_action)
export { state, actions }

