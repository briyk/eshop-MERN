import React from 'react'
import { Announcement, Footer, Navbar, Newsletter } from '../components'
import styled from 'styled-components'
import imageProduct from '../assets/girl.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const SingleProduct = () => {
     return (
          <Container>
               <Navbar />
               <Announcement />
               <Wrapper>
                    <ImageWrapper>
                         <img src={imageProduct} alt='product image' />
                    </ImageWrapper>
                    <InfoWrapper>
                         <h2>Product</h2>
                         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam maiores odio enim, architecto distinctio quaerat sapiente eveniet accusamus id ullam corrupti facilis iusto vero voluptatum culpa at blanditiis molestiae porro ipsum et quasi, aliquam laboriosam quam. Maxime culpa excepturi neque.</p>
                         <Price> $ 20 </Price>
                         <FilterContainer>
                              <Filter>
                                   <FilterText>Colors</FilterText>
                                   <FilterColor color="black" />
                                   <FilterColor color="darkblue" />
                                   <FilterColor color="gray" />
                              </Filter>
                              <Filter>
                                   <FilterText>Size</FilterText>
                                   <FilterSize>
                                        <Option>XS</Option>
                                        <Option>S</Option>
                                        <Option>M</Option>
                                        <Option>XL</Option>
                                        <Option>2XL</Option>
                                   </FilterSize>
                              </Filter>
                         </FilterContainer>
                         <AddContainer>
                              <AmountContainer>
                                   <AddIcon />
                                   <Amount>5</Amount>
                                   <RemoveIcon />
                              </AmountContainer>
                              <Button>Add To Cart</Button>
                         </AddContainer>
                    </InfoWrapper>
               </Wrapper>
               <Newsletter />
               <Footer />
          </Container>
     )
}

// ====================================== styles

const Container = styled.div`
     
`
const Wrapper = styled.div`
     display: flex;
     justify-content: space-between;
     margin: 30px;
     align-items: center;
`
const ImageWrapper = styled.div`
     flex: 1;
     display: flex;
     justify-content: center;
     align-items: center;
     img{
          width: 80%;
     }
`
const InfoWrapper = styled.div`
     flex: 1;

     h2{
          font-size: 30px;
          margin-bottom: 20px;
     }
     p{
          font-size: 16px;
          color: gray;
          margin-bottom: 20px;
     }
    
`
const Price = styled.span`
     font-size: 40px;
     font-weight: 400;

`
const FilterContainer = styled.div`
     margin: 20px  0;
     width: 80%;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
     display: flex;
     align-items: center;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`
const FilterColor = styled.div`
     width: 25px;
     height: 25px;
     border-radius: 50%;
     background-color: ${props => props.color};
     display: flex;
     margin: 0 5px;
     cursor: pointer;
`
const FilterSize = styled.select`
  border: 0.2 solid #e1e1e1;
  outline: none;
  margin-inline: 10px;
  font-size: 16px;
  padding: 5px;
`
const Option = styled.option`
  padding: 10px;
`
const AddContainer = styled.div`
     width: 80%;
     
`
const AmountContainer = styled.div`
     display: flex;
     align-items: center;
     margin: 20px 0;
     /* flex: 1; */
     cursor: pointer;
`
const Amount = styled.span`
     font-size: 18px;
     padding: 0 10px;
`

const Button = styled.button`
    background: #f2f2f2;
    border: 0.1px solid teal;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
     transform: scale(1.1);
    }
`


export default SingleProduct