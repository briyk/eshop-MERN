import styled from "styled-components";
import { Announcement, Footer, Navbar } from "../components";
import productImage from "../assets/product.jpg";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
     return (
          <Container>
               <Navbar />
               <Announcement />
               <Wrapper>
                    <Title>Your Bag</Title>
                    <Top>
                         <TopButton>Continue Shopping</TopButton>
                         <TextWrapper>
                              <TopText>
                                   Shopping bag(<span>5</span>)
                              </TopText>
                              <TopText>
                                   Your Wishlist(<span>2</span>)
                              </TopText>
                         </TextWrapper>
                         <TopButton bg="black">Clear Bag</TopButton>
                    </Top>
                    <Bottom>
                         <Info>
                              <Product>
                                   <ProductDetails>
                                        <Image src={productImage} alt="" />
                                        <ProductDetailsInfo>
                                             <ProductName>Jacket</ProductName>
                                             <ProductId>
                                                  <strong>Id:</strong>123654987
                                             </ProductId>
                                             <ProductColor color="black" />
                                             <ProductSize>
                                                  <strong>Size:</strong>XL
                                             </ProductSize>
                                        </ProductDetailsInfo>
                                   </ProductDetails>
                                   <PriceDetails>
                                        <AmountContainer>
                                             <AddIcon />
                                             <Amount>5</Amount>
                                             <RemoveIcon />
                                        </AmountContainer>
                                        <PriceValue>20 $</PriceValue>
                                   </PriceDetails>
                              </Product>
                              <Product>
                                   <ProductDetails>
                                        <Image src={productImage} alt="" />
                                        <ProductDetailsInfo>
                                             <ProductName>Jacket</ProductName>
                                             <ProductId>
                                                  <strong>Id:</strong>123654987
                                             </ProductId>
                                             <ProductColor color="black" />
                                             <ProductSize>
                                                  <strong>Size:</strong>XL
                                             </ProductSize>
                                        </ProductDetailsInfo>
                                   </ProductDetails>
                                   <PriceDetails>
                                        <AmountContainer>
                                             <AddIcon />
                                             <Amount>5</Amount>
                                             <RemoveIcon />
                                        </AmountContainer>
                                        <PriceValue>20 $</PriceValue>
                                   </PriceDetails>
                              </Product>

                         </Info>
                         <Summery>
                              <h3>ORDER Summery</h3>
                              <div>
                                   <span>
                                        Subtotal
                                   </span>
                                   <span>
                                        10$
                                   </span>
                              </div>
                              <div>
                                   <span>
                                   Estimated Shipping
                                   </span>
                                   <span>
                                        5.5$
                                   </span>
                              </div>
                              <div>
                                   <span>
                                   Discount
                                   </span>
                                   <span>
                                        -1$
                                   </span>
                              </div>
                              <div>
                                   <h6>
                                   Total
                                   </h6>
                                   <span>
                                        7$
                                   </span>
                              </div>
                              <button>Checkout Now</button>
                         </Summery>
                    </Bottom>
               </Wrapper>
               <Footer />
          </Container>
     );
};

// ================================== styles
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
  margin: 20px 0;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TopButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${(props) => props.bg === "black" && "black"};
  color: ${(props) => props.bg === "black" && "white"};
  cursor: pointer;
`;
const TextWrapper = styled.div`
  display: flex;
`;
const TopText = styled.p`
  font-size: 15px;
  /* color: gray; */
  margin: 0 5px;
  text-decoration: underline;
`;

const Bottom = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  
`;
const Info = styled.div`
  border: 1px solid teal;
  flex: 3;
  margin-right: 15px;
  
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
  border-bottom: 1px solid teal;
  padding: 10px;
  &:last-of-type{
     border: none;
  }
`;
const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
`;
const Image = styled.img`
  width: 150px;
  
`;
const ProductDetailsInfo = styled.div`
     padding: 20px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     line-height: 2.5;
`;
const ProductName = styled.div`
     font-size: 20px;
     font-weight: 700;
`;
const ProductId = styled.div``;
const ProductColor = styled.span`
      width: 25px;
     height: 25px;
     border-radius: 50%;
     background-color: ${props => props.color};
`;
const ProductSize = styled.div``;
const PriceDetails = styled.div`
     flex: 1;
`;

const Summery = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid teal;
  div{
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     margin: 10px 0;

     h6{
          font-size: 18px;
          font-weight: 700;
     }
  }
  h3{
     font-size: 22px;
     margin: 10px 0;
  }
  button{
     padding: 10px 20px;
     background-color: #000;
     color: #fff;
     cursor: pointer;
  }

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
const PriceValue = styled.p`
     font-size: 22px;
     font-weight: 500;
`
export default Cart;
