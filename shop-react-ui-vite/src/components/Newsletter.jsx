import styled from "styled-components"
import SendIcon from '@mui/icons-material/Send';
const Newsletter = () => {
  return (
    <Container>
          <Title>Newsletter</Title>
          <Info>Get timely updates from your favorite products.</Info>
          <FormContainer>
               <Input type="email" placeholder="Your Email Address"/>
               <Button type="submit">
                         <SendIcon/>
               </Button>
          </FormContainer>
    </Container>
  )
}


// ======================== styles
const Container = styled.div`
     width: 100%;
     height: 60vh;
     padding: 30px 0;
     display: flex;
     justify-content: center;
     flex-direction: column;
     text-align: center;
     background: #fcf5f5;
`
const Title = styled.h2`
     font-size: 70px;
     margin: 20px 0;
`
const Info = styled.p`
     font-size: 18px;
     margin-bottom: 22px;
`
const FormContainer = styled.form`
     display: flex;
     align-items: center;
     justify-content: center;
`
const Input = styled.input`
     width: 40%;
     padding: 10px;
     outline: none;
     border: 0.8px solid gray;

`
const Button = styled.button`
     padding: 5px 20px;
     border: none;
     background: teal;
     color: #fff;
     cursor: pointer;
`



export default Newsletter