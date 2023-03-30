import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import payImage from '../assets/pay.png'
import { tablet } from '../../responsive';

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ESHOP.</Logo>
        <Info>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, adipisci natus esse qui dolorem eum non, numquam hic atque nemo sed dolorum iure explicabo aliquid quam labore. Eos, nam beatae.</Info>
        <SocialIcons>
          <Icon bg="4267B2">
            <FacebookIcon />
          </Icon>
          <Icon bg="00acee">
            <TwitterIcon />
          </Icon>
          <Icon bg="0072b1">
            <LinkedInIcon />
          </Icon>
          <Icon bg="FF0000">
            <YouTubeIcon />
          </Icon>
        </SocialIcons>
      </Left>
      <Center>
        <LinkTitle>Useful Links</LinkTitle>
        <Menu>
          <ul>
            <li>Home</li>
            <li>Men's Fashion</li>
            <li>Accessories</li>
            <li>Order Tracking</li>
            <li>Terms</li>
          </ul>
          <ul>
            <li>Cart</li>
            <li>Women's Fashion</li>
            <li>My Account</li>
            <li>Wishlist</li>
          </ul>
        </Menu>
      </Center>
      <Right>
        <LinkTitle>Contact</LinkTitle>
        <List>
            <li>
                <IconWrapper>
                    <LocationOnIcon/>
                </IconWrapper>
                <p>622 Dixie Path , South Tobinchester 98336</p>
            </li>
            <li>
                <IconWrapper>
                    <CallIcon/>
                </IconWrapper>
                <p>+1 234 56 78</p>
            </li>
            <li>
                <IconWrapper>
                    <AttachEmailIcon/>
                </IconWrapper>
                <p>support@eshop.dev</p>
            </li>
        </List>
        <Payment src={payImage} alt="" />
      </Right>
    </Container>
  )
}

// =================================== styles

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding: 15px 20px;
  ${tablet({gridTemplateColumns: 'repeat(1,1fr)'})}
  
`
const Left = styled.div`
  flex: 1 ;
`
const Logo = styled.h1`
    font-weight: 900;
    font-size: 20px;
`
const Info = styled.p`
  margin: 10px 0;
  font-size: 14px;
  width: 90%;
`
const SocialIcons = styled.div`
  margin-block: 15px;
  display: flex;
  align-items: center;
`
const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-inline: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  background: #${props => props.bg};
`
const Center = styled.div`
  flex: 1 ;
  ${tablet({margin: '20px 0'})}

`
const LinkTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between ;
  padding-right: 30px;
   ul{
    list-style: none;

    li{
      padding: 5px 0;
    }
   }
`
const Right = styled.div`
  flex: 1 ;
  padding: 0 10px ;
`
const List = styled.ul`
  list-style: none;
  li{
    display: flex;
  }
  p{
    font-size: 14px;
    color: gray;
    margin-left: 10px;
  }
`

const IconWrapper = styled.span`
  
`
const Payment = styled.img`
  width: 50%;
`
export default Footer