import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, auth0Client } from '../reducers/auth'
import { Button } from 'react-bootstrap'
import createAuth0Client from '@auth0/auth0-spa-js'
import axios from 'axios'

export default function Auth0() {
  const auth0 = useSelector((state) => state.auth.auth0)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    auth()
    async function auth() {
      const auth0 = await createAuth0Client({
        domain: process.env.REACT_APP_AUTH0_DOMAIN,
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
      })
      dispatch(auth0Client(auth0))
      const authenticated = await auth0.isAuthenticated()
      if (authenticated) {
        axios.defaults.headers['Authorization'] = await auth0.getTokenSilently()
        dispatch(authenticate())
      } else setLoading(false)
    }
  }, [dispatch])

  const login = async () => {
    await auth0.loginWithPopup()
    dispatch(authenticate())
  }

  return (
    <div className="text-center p-5">
      {loading ? (
        <div>Loading. . .</div>
      ) : (
        <Button onClick={login}>Login</Button>
      )}
    </div>
  )
}
