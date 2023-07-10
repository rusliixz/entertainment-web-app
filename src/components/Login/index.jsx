import React, { useState } from 'react'
import { LoginCont, Container, LogoCont, LoginWrap, LoginTitle, StyledInput, LoginCreateLink, LoginText, LoginLink } from './style'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const [data, setData] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  useEffect(() => {
    let now = new Date()
    now = now.getTime()
    let date = JSON.parse(localStorage.getItem('data'))?.date
    if (date !== undefined && now < date) {
      navigate('/app/home')
    }
  }, [])

  function setEmail(e) {
    setData(prev => ({ ...prev, email: e.target.value }))
  }

  function setPassword(e) {
    setData(prev => ({ ...prev, password: e.target.value }))
  }

  function handleSubmit() {
    if (data.email.trim() !== '' && data.password.trim() !== '') {
      fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: data.email, password: data.password })
      })
        .then(res => {
          if(res.ok){
            return res.json()
          }else{
            return new Error("So'rovda xatolik bor!")
          }
        })
        .then(res => {
          const date = new Date()
          localStorage.setItem('data', JSON.stringify({
            ...res,
            date: date.getTime() + 3_600_000
          }))
          navigate('/app/home')
        })
    }
  }

  return (
    <LoginWrap>
      <LogoCont>
        <Logo fill='#fc4747' />
      </LogoCont>
      <Container>
        <LoginCont>
          <LoginTitle>Login</LoginTitle>

          <StyledInput type="email" placeholder='Email address' value={data.email} onChange={setEmail} />
          <StyledInput type="password" placeholder='Password' value={data.password} onChange={setPassword} />
          <LoginCreateLink onClick={handleSubmit}>Login to your account</LoginCreateLink>

          <LoginText>
            Don't have an account?
            <LoginLink href="http://localhost:3000/register">Sign Up</LoginLink>
          </LoginText>
        </LoginCont>
      </Container>
    </LoginWrap>
  )
}
