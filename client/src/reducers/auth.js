const AUTHENTICATE = 'AUTHENTICATE'
const AUTH0 = 'AUTH0'

export function authenticate() {
  return { type: AUTHENTICATE }
}

export function auth0Client(auth0) {
  return { type: AUTH0, payload: auth0 }
}

export function auth(
  state = {
    authenticated: false,
    auth0: '',
  },
  { type, payload }
) {
  return (
    {
      [AUTHENTICATE]: { ...state, authenticated: true },
      [AUTH0]: { ...state, auth0: payload },
    }[type] || state
  )
}
