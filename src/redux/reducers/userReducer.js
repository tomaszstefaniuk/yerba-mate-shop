import userConstants from '../constants/userConstants'

export default function(state={}, action) {
  switch(action.type) {
    case userConstants.ADD: {
        return action.user
    }
    case userConstants.UPDATE: {
      if (state)
        return Object.assign(state, action.user)
      else
        return state
    }
    case userConstants.DELETE: {
        return {}
    }
    default: {
      return state
    }
  }
}
