import React from 'react'
import { Container, Mainpage, BackToHome, LoginText, FieldName, Inputfield, Button, ButtonText, CreateAccountText, Redtext } from './login.styles'

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
    <Button onClick={()=>{}}><ButtonText>Login</ButtonText></Button>
    <CreateAccountText>Don't have accont? <Redtext>Create Now</Redtext></CreateAccountText>
    </Container>
    </Mainpage>
    </div>
  )
}

export default Login