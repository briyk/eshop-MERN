import { useState } from 'react';
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import girlImage from '../assets/girl.png'
import slideImage2 from '../assets/girl4.png'
import slideImage3 from '../assets/girl3.png'
import { sliderItems } from '../../data.js'
import { tablet, mobile } from '../../responsive';


const Slider = () => {
     const [slideIndex, setSlideIndex] = useState(0);

     const handleClick = (direction) => {
          if(direction === 'left'){
               setSlideIndex( slideIndex > 0 ? slideIndex - 1 : 2)
          } else{
               setSlideIndex( slideIndex < 2 ? slideIndex + 1 : 0)
          }
     }


     return (
          <Container>
               <Arrow direction="left" onClick={() => handleClick('left')}>
                    <ArrowLeftOutlinedIcon style={{ fontSize: "30px" }} />
               </Arrow>
               <Wrapper slideIndex={slideIndex}>
                    {
                         sliderItems.map(slide => (
                              <Slide bg={slide.bg} key={slide.id}>
                                   <ImageContainer>
                                        <Image src={slide.img} alt="" />
                                   </ImageContainer>
                                   <ContentContainer>
                                        <Title>{slide.title}</Title>
                                        <Info>{slide.desc}</Info>
                                        <ButtonWrapper>
                                             <button>Shop Now</button>
                                        </ButtonWrapper>
                                   </ContentContainer>
                              </Slide>
                         ))
                    }

               </Wrapper>
               <Arrow direction="right" onClick={() => handleClick('right')}>
                    <ArrowRightOutlinedIcon style={{ fontSize: "30px" }} />
               </Arrow>
          </Container>
     )
}





//=========================================styled
const Container = styled.div`
     width: 100%;
     height: 100vh;
     display: flex;
     position: relative;
     overflow: hidden;

`
const Arrow = styled.div`
     width: 40px;
     height: 40px;
     background: #fff7f7;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     position: absolute;
     top: 0;
     bottom: 0;
     margin: auto;
     left: ${props => props.direction === 'left' && '10px'} ;
     right: ${props => props.direction === 'right' && '10px'} ;
     opacity: 0.7;
     z-index: 2;
     ${tablet({display: 'none'})}
`

const Wrapper = styled.div`
     height: 100%;
     display: flex;
     transform: translateX(${props => props.slideIndex * -100}vw);
     transition: all 1s ease-in-out
     ${tablet({justifyContent: 'center'})}
`
const Slide = styled.div`
       display: flex ;
       align-items: center;
       width: 100vw;
       height: 100%;
       background-color: ${(props) => props.bg === 'dbd2ef' && '#eae5f6'};
       background-color: ${(props) => props.bg === 'fcf1ed' && '#fcf1ed'};
       background-color: ${(props) => props.bg === 'f5fafd' && '#f5fafd'};
       ${tablet({flexDirection: 'column', justifyContent: 'center'})}
`
const ImageContainer = styled.div`
     flex: 1 ;
     height: 100%;
     width: 100%;
     display: flex;
     justify-content: center;
     ${tablet({display: 'none'})}
`
const Image = styled.img`
     height: 90%;
     
`
const ContentContainer = styled.div`
     flex: 1 ;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     ${tablet({textAlign: 'Center', padding: "10px"})}
`
const Title = styled.h1`
     font-size: 70px;
     ${mobile({fontSize: '40px'})}

`

const Info = styled.p`
     margin-block: 35px;
     font-size: 18px;
     letter-spacing: 4px;
     padding-right: 50px;
     line-height: 1.5;
     font-weight: 500;
     ${mobile({fontSize: '20px'})}
`

const ButtonWrapper = styled.div`
     
     button{
          padding: 10px;
          font-size: 18px;
          font-weight: 500;
          background: transparent;
          cursor: pointer;
     }
`

export default Slider