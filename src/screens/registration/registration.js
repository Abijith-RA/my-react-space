import React from 'react'
import { Mainpage, Container, RegistrationText, RegiBelowText, FieldName, InputField } from './registration.styles'
const Registration = () => {
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
      </Container>
    </Mainpage>
  )
}

export default Registration