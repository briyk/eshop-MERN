import styled from 'styled-components'


const Announcement = () => {
  return (
    <Container>
          <p>Super Deal! Free Shipping on Orders Over $50</p>
    </Container>
  )
}



// ================================= styled

const Container = styled.div`
     width: 100%;
     height: 30px;
     background: teal;
     color: #fff;
     text-align: center;
     line-height: 30px;
`


export default Announcement