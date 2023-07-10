import React, { useState } from 'react'
import { SignUpCont, Container, LogoCont, SignUpWrap, SignUpTitle, StyledInput, SignUpCreateBtn, SignUpText, StyledLink } from './style'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Signup() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password1: '',
    password2: ''
  })

  function setEmail(e) {
    setData(prev => ({ ...prev, email: e.target.value }))
  }

  function setPassword1(e) {
    setData(prev => ({ ...prev, password1: e.target.value }))
  }

  function setPassword2(e) {
    setData(prev => ({ ...prev, password2: e.target.value }))
  }

  function handleSubmit() {
    if (data.email.trim() !== '' && data.password1.trim() !== '' && data.password2.trim() !== '') {
      if (data.password1 === data.password2) {
        fetch('http://localhost:8000/register', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email: data.email, password: data.password1 })
        })
          .then(res => res.json())
          .then(res => {
            const date = new Date()
            console.log(res, date.getTime())
            localStorage.setItem('data', JSON.stringify({
              ...res,
              date: date.getTime() + 3_600_000
            }))
            navigate('/app/home')
          })
      }
    }
  }

  return (
    <SignUpWrap>
      <LogoCont>
        <Logo fill='#fc4747' />
      </LogoCont>
      <Container>
        <SignUpCont>
          <SignUpTitle>Sign Up</SignUpTitle>

          <StyledInput type="email" placeholder='Email address' value={data.email} onChange={setEmail} />
          <StyledInput type="password" placeholder='Password' value={data.password1} onChange={setPassword1} />
          <StyledInput type="password" placeholder='Repeat password' value={data.password2} onChange={setPassword2} />
          <SignUpCreateBtn onClick={handleSubmit}>Create an account</SignUpCreateBtn>

          <SignUpText>
            Already have an account?
            <StyledLink to="/login">Login</StyledLink>
          </SignUpText>
        </SignUpCont>
      </Container>
    </SignUpWrap>
  )
}
