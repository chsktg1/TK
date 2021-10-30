import styled from "styled-components"

export const Main=styled.div`
display:flex;
height:100vh;
width:100vw;
justify-content:center;
align-items:center;
`

export const ExtraDiv=styled.div`
width:50vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
`

export const LoginDiv=styled.div`
min-width:456px;
min-height:523px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius:9px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const Text=styled.h1`
font-family: DM Sans;
color: #F7931E;
font-size: 24px;
`
export const LogText=styled.p`
font-family: DM Sans;
font-size: 32px;

`

export const LoginButton=styled.button`
margin-top:10px;
width:100%;
`

export const Input=styled.input`
margin-bottom:10px;
width:360px;
max-width:360px;
`

export const Form=styled.form`
width:100%
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const ErrorText=styled.p`
color:red
`