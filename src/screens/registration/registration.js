import React from 'react'
import { Mainpage, Container, RegistrationText, RegiBelowText, FieldName, InputField, Button, ButtonText, HaveAccountText, RedLoginText } from './registration.styles'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const history =useNavigate();

  return (
    <Mainpage>
      <Container>
        <RegistrationText>Registration</RegistrationText>
        <RegiBelowText>Welcome to registration page, Create a account here </RegiBelowText>
        <FieldName>UserName</FieldName>
        <InputField></InputField>
        <FieldName>Email</FieldName>
        <InputField></InputField>
        <FieldName>Create Password</FieldName>
        <InputField></InputField>
        <Button><ButtonText>Register</ButtonText></Button>
        <HaveAccountText>Already have a Accont, <RedLoginText onClick={() => history('/')}>Login Here</RedLoginText></HaveAccountText>
      </Container>
    </Mainpage>
  )
}

export default Registration