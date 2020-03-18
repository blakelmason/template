const LOG_IN = 'LOG_IN'

export const activate = () => ({
  type: LOG_IN
})

export const user = (state = { loggedIn: false }, action) =>
  ({
    [LOG_IN]: { loggedIn: true }
  }[action.type] || state)
