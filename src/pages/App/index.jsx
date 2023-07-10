import React from 'react'
import { Container } from './style'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <Container>
      <Outlet/>
    </Container>
  )
}
