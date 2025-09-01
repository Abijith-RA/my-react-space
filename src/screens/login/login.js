import React from 'react'
import { Container, Mainpage, BackToHome, LoginText, FieldName } from './login.styles'

const Login = () => {
  return (
    <div>
    <BackToHome>Back to Home</BackToHome>
    <Mainpage>
    <Container>
    <LoginText>Login</LoginText>
    <FieldName>username</FieldName>
    </Container>
    </Mainpage>
    </div>
  )
}

export default Login