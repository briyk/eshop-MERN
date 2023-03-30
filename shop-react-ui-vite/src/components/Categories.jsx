import styled from 'styled-components'
import {categories} from '../../data'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <Container>
          {
               categories.map( item => <CategoryItem item={item} key={item.id}/> )
          }
    </Container>
  )
}



// =================================== styles
const Container = styled.div`
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     padding: 20px;
     grid-gap: 5px;
     justify-content: space-between;

     @media(max-width:900px){
          grid-template-columns: repeat(1, 1fr);

     }
`








export default Categories