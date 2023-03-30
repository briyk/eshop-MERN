import React from 'react'
import styled from 'styled-components'
import 'boxicons'
import Badge from '@mui/material/Badge';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { tablet, mobile } from '../../responsive';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        {/* ----------------------- Left Col of Navbar --------------------------- */}
        <Left>
          <Language>
            <span>EN</span>
          </Language>
          <SearchContainer>
            <input type='text' name='search' placeholder='search for product..' />
            <SearchOutlinedIcon style={{color: 'gray'}}/>
          </SearchContainer>
        </Left>
        {/* ----------------------- Center Col of Navbar --------------------------- */}
        <Center>
          <Logo>ESHOP.</Logo>
        </Center>
        {/* ----------------------- Right Col of Navbar --------------------------- */}
        <Right>
          <MenuItem>Sign Up</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon  color="action" />
            </Badge>
           </MenuItem> 
        </Right>
      </Wrapper>
    </Container>
  )
}

 

// =============================================Navbar styles
const Container = styled.div`
      height: 70px;
`
const Wrapper = styled.div`
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${tablet({padding: '010px 5px'})}
`
const Left = styled.div`
        flex: 1 ;
        display: flex;
        align-items: center;
        ${mobile({display: 'none'})}

`
const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${tablet({display: 'none'})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray ;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 3px 5px;
    border-radius: 15px;
    text-align: left;
    ${tablet({marginLeft: '0'})}
    input{
      border: none;
      outline: none;
      padding-inline: 5px;
    }
    box-icon{
      cursor: pointer;
      color: gray !important;
      font-size:16px;
    }
`

const Center = styled.div`
      flex: 1 ;
`
const Logo = styled.h1`
    font-weight: 900;
    font-size: 24px;
    text-align: center;
`
const Right = styled.div`
      flex: 1 ;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ${tablet({flex: '2'})}
`
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-inline: 10px;
`

export default Navbar