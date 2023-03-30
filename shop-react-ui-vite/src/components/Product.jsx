import styled from 'styled-components'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Product = ({ item }) => {
     return (
          <Container>
               <Circle />
               <Image src={item.img} alt="" />
               <Info>
                    <Icon>
                         <ShoppingCartIcon />
                    </Icon>
                    <Icon>
                         <SearchIcon />
                    </Icon>
                    <Icon>
                         <FavoriteIcon />
                    </Icon>
               </Info>
          </Container>
     )
}

/* =================================================== Styles */

const Info = styled.div`
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background: rgba(0,0,0,0.5);
     z-index: 3;
     display: flex;
     justify-content: center;
     align-items: center;
     opacity: 0;
     transition: all 0.3s ease-in-out;

     
`

const Container = styled.div`
     flex: 1 ;
     margin: 5px;
     min-width: 240px;
     height: 350px;
     display: flex;
     align-items: center;
     justify-content: center;
     background: #f5fbfd;
     position: relative;

     &:hover ${Info}{
          opacity: 1;
     }
`
const Circle = styled.div`
     width: 200px;
     height: 200px;
     border-radius: 50%;
     position: absolute;
     
     background: #f1f1f1;
`
const Image = styled.img`
     height: 70%;
     z-index: 2;
`

const Icon = styled.span`
     width: 40px;
     height: 40px;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #fff;
     margin: 0 10px;
     cursor: pointer;
     transition: all 0.3s ease-in-out;
     &:hover{
          background-color: #e7f5f5;
          transform: scale(1.1);
     }
`



export default Product