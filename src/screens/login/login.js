import React from 'react'
import { Container, Mainpage, BackToHome, LoginText, FieldName, Inputfield, Button, ButtonText, CreateAccountText, Redtext, LoginBelowText } from './login.styles'

const Login = () => {
  return (
    <div>
    <BackToHome>Back to Home</BackToHome>
    <Mainpage>
    <Container>
    <LoginText>Login</LoginText>
    <LoginBelowText>Hai Welcome to LoginPage,If you already have an account Login</LoginBelowText>
    <div>
    <FieldName>username</FieldName>
    <Inputfield/>
    </div>
    <div>
        <FieldName>Password</FieldName>
        <Inputfield/>
    </div>
    <Button onClick={()=>{}}><ButtonText>Login</ButtonText></Button>
    <CreateAccountText>Don't have accont? <Redtext>Create Now</Redtext></CreateAccountText>
    </Container>
    </Mainpage>
    </div>
  )
}

export default Login