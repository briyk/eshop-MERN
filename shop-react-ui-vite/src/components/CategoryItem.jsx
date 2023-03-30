import styled from 'styled-components'

const CategoryItem = ({item}) => {
  return (
    <Container>
          <Image src={item.img} alt="" />
          <Info>
               <Title>{item.title}</Title>
               <Button>ORDER NOW</Button>
          </Info>
    </Container>
  )
}





// =================================== styles
const Container = styled.div`
     flex: 1;
     /* margin-inline: 5px; */
     position: relative;
     height: 70vh;
`
const Image = styled.img`
     width: 100%;
     display: block;
     /* max-height: 500px; */
     height: 100%;
     object-fit: cover;
     opacity: 0.9;
     transition: all 0.3s ease-in-out;
     &:hover{
          opacity: 1;
     }
`
const Info = styled.div`
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%,-50%);
     text-align: center;
`
const Title = styled.h2`
     color: #fff;
     font-size: 18px;
     margin-bottom: 15px;
     text-shadow: 1px 1px 1px #000 ;
`
const Button = styled.button`
     padding: 10px;
     border: 0;
     background: #f1f1f1;
     color: gray;
     font-size: 14px;
     font-weight: 500;
`

export default CategoryItem