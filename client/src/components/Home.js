import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import axios from 'axios'

export default function Home() {
  const auth0 = useSelector(({ auth }) => auth.auth0)
  const logout = () => auth0.logout()

  useEffect(() => {
    axios
      .get('/api/test')
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <div>Home</div>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}
