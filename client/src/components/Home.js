import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export default function Home() {
  const auth0 = useSelector((state) => state.auth.auth0)
  const logout = async () => auth0.logout()
  return (
    <div>
      <div>Home</div>
      <Button onClick={logout}>Logout</Button>
    </div>
  )
}
