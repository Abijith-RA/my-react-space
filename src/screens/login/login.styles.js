import styled from "styled-components";

export const Mainpage = styled.div`
display:flex;
height:100vh;
justify-content:center;
align-items:center;
background-color: #2a50ff;
`;

export const BackToHome = styled.div`
  position:absolute;
  top:20px;
  left:20px;
  color:white;
  font-size:25px;
`;

export const Container = styled.div`
display:flex;
flex-direction:column;
width:630px;
height:500px;
background-color: #ffffffff;
border-radius:20px;
box-shadow:10px 10px 30px #252525e8;
`;

export const LoginText = styled.h1`
margin-left:30px;
color:#000000;
font-size:35px;
`;

export const LoginBelowText = styled.h1`
margin-left:30px;
margin-top:-20px;
color: #8b8888ff;
font-size:18px;
`;

export const FieldName = styled.h1`
margin-left:30px;
color:#0D0C0C;
font-size:17px;
`;

export const Inputfield = styled.input`
margin-left:30px;
width:570px;
height:50px;
border:none;
border-radius:5px;
background-color:#E4DCF5;
`;

export const Button = styled.div`
display:flex;
margin-top:30px;
align-self:center;
background-color: #615AC7;
width:500px;
height:55px;
justify-content:center;
align-items:center;
border-radius:5px;
`;

export const ButtonText = styled.div`
color:white;
font-family:bold;
font-size:25px;
`;

export const CreateAccountText = styled.p`
color:grey;
text-align:center;
font-size:15px;
`;

export const Redtext = styled.span`
color:red;
cursor:pointer;
font-size:18px;
`;