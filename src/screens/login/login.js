import React from 'react'
import { Container, Mainpage, BackToHome, LoginText, FieldName, Inputfield } from './login.styles'

const Login = () => {
  return (
    <div>
    <BackToHome>Back to Home</BackToHome>
    <Mainpage>
    <Container>
    <LoginText>Login</LoginText>
    <div>
    <FieldName>username</FieldName>
    <Inputfield/>
    </div>
    <div>
        <FieldName>Password</FieldName>
        <Inputfield/>
    </div>
    </Container>
    </Mainpage>
    </div>
  )
}

export default Login