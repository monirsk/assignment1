import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from "styled-components"
import { sliderItems } from '../slidepic'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;   //////learn
    display: flex;
   position: relative;
   overflow:hidden;

`
const Arrow= styled.div`
width: 50px;
height: 50px;
background-color: #f1f1f1;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin:auto;
left: ${props=>props.direction === "left" && "10px"};    ///learn
right: ${props=>props.direction === "right" && "10px"};  ///learn
cursor: pointer;
opacity: 0.5;
z-index: 2;
    
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex * -100}vw)

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
    
`
const ImageContainer = styled.div`
height: 100%;

flex: 1;
    
`

const Image = styled.img`
height: 80%;
border-radius: 40%;

`
const InfoContainer= styled.div`
flex: 1;

padding: 50px;

    
`

const Title = styled.h1`
font-size: 70px;

    
`

const Des = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 2.5px;
    
`

/* const Button = styled.button`
padding: 10px;
font-size: 20px;
font-weight: 400;
background-color: transparent;
cursor: pointer;
&:hover {
    color: #dd4707;
    font-weight: 700;
    //transition-duration: .01s;
    border: 1px solid white;

}

` */




const Slider = () => {

    const [slideIndex , setSlideIndex] = useState(0);

const handleClick = (direction)=>{
    if(direction === 'left'){
    setSlideIndex(slideIndex > 0 ? slideIndex-1 :2)}
    else{
        setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }

};





  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")} >
            <ArrowLeftOutlined></ArrowLeftOutlined>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item=>(
                  <Slide bg= {item.bg} key={item.id}>
            <ImageContainer>
                <Image src={item.img}></Image>

            </ImageContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Des>{item.desc}</Des>
                {/*<button><Link to={"/products"}>SHOP NOW</Link></button>   byme */}
                <NavLink to={`/category`} class="btn btn-dark">Shop Now</NavLink>
                
            </InfoContainer>
            </Slide>
        ))}
      
        </Wrapper>
        <Arrow direction="right"  onClick={()=>handleClick("right")}>
            <ArrowRightOutlined></ArrowRightOutlined>
        </Arrow>

    </Container>
  )
}

export default Slider
