import React from 'react'
import { useSelector } from 'react-redux'
import Auth0 from './components/Auth0'
import Home from './components/Home'

export default function App() {
  const authenticated = useSelector((state) => state.auth.authenticated)
  if (!authenticated) return <Auth0 />
  else return <Home />
}
