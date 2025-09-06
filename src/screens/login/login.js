import React from 'react'
import { Container, Mainpage, BackToHome, LoginText, FieldName, Inputfield, Button, ButtonText, CreateAccountText, Redtext, LoginBelowText } from './login.styles'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const history = useNavigate(); /*use navigate is a hooks funtion And the hooks fuction assign to a variable*/

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
    <Button onClick={() => history('/home')}><ButtonText>Login</ButtonText></Button>
    <CreateAccountText>Don't have accont? <Redtext onClick={() => history('/register')}> Create Now</Redtext></CreateAccountText>
    </Container>
    </Mainpage>
    </div>
  )
}

export default Login