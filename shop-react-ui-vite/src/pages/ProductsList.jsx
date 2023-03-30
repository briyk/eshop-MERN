import React from 'react'
import { Announcement, Footer, Navbar, Newsletter, Products } from '../components'
import styled from 'styled-components'

const ProductsList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Men's Clothing</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products: </FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>red</Option>
                    <Option>green</Option>
                    <Option>black</Option>
                    <Option>white</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>orange</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>XL</Option>
                    <Option>2XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select>          
                    <Option>newest</Option>
                    <Option>price (asc)</Option>
                    <Option>price  (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

// =========================================== styles
const Container = styled.div`
  
`
const Title = styled.h2`
    margin: 20px ;
    font-size: 22px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 18px;
  font-weight: 700;
  margin-right: 15px;
`
const Select = styled.select`
  border: none;
  outline: none;
  margin-inline: 10px;
  font-size: 16px;
`
const Option = styled.option`
  padding: 10px;
`

export default ProductsList