import styled from "styled-components"
import { Navbar } from "../components"


const Login = () => {
     return (
          <Container>
               <Wrapper>
                    <Title>Log to your account</Title>
                    <Form>
                         <Input type="email" placeholder="Email" />
                         <Input type="password" placeholder=" Password" />
                         <Button>Login</Button>
                         <Link>Forget Your Password</Link>
                         <Link>Create An Account</Link>
                    </Form>
               </Wrapper>
          </Container>
     )
}


// =========================styles

const Container = styled.div`
     width: 100vw;
     height: 100vh;
     background: linear-gradient( to right,rgba(255,255,255,0.4), rgba(255,255,255,0.7) ),url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
     background-size: cover;
     background-position: center;
     display: flex;
     justify-content: center;
     align-items: center;
`
const Wrapper = styled.div`
     width: 45%;
     display: flex;
     flex-direction: column;
     background-color: #fff;
     box-shadow: 0 2 2 2 rgba(0,0,0,1);
     padding: 20px;
`
const Title = styled.h2`
     font-size: 28px;
     margin: 20px 0;
     font-weight: 300;
`
const Form = styled.form`
        display: flex;
        flex-direction: column;
       flex-wrap: wrap;
`
const Input = styled.input`
     flex: 1;
     min-width: 40%;
     margin: 10px 5px;
     padding: 10px;
     border: 0.1 solid rgba(209, 209, 209, 0.9);
     outline: none;
`
const Button = styled.button`
     width: 40%;
     border: none;
     background: teal;
     padding: 15px 20px;
     font-size: 20px;
     color: #fff;
     margin: 10px;
     cursor: pointer;
`
const Agreement = styled.p`
     margin: 10px;
     font-size: 12px;
     color: gray;
     width: 100%;
`
const Link  = styled.a`
     margin: 10px;
     text-decoration: underline;
`


export default Login