import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

import Logo from '../Data/pic2.jpg'
import { sliderItems  } from "../data"
import { useState } from "react"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"

const Container=styled.div`
width:100%;
height:100vh;
display:flex;
background-color:#7BB5FF;
position:relative;
overflow:hidden;
${mobile({display : "none"})}
`

const Arrow=styled.div`
width:50px;
height:50px;
background-color:#fff7f7;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
left:${props=> props.direction === "left" && "10px"};
right:${props=> props.direction === "right" && "10px"};
margin:auto;
cursor:pointer;
opacity:0.5;
z-index:2;
`
const Wrapper=styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform:translateX(${props=>props.slideIndex * -100}vw );
`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:#${props=>props.bg};
`;
const ImgContainer=styled.div`
height:100;
flex:1;
`;
const Image=styled.image`
height:80%;
`
const InfoContainer=styled.div`
flex:1;
padding:50px;

`;
const Title=styled.h1`
font-size:70px;
font-family: 'Abril Fatface', cursive;
`
const Desc=styled.p`
font-family: 'Abril Fatface', cursive;
font-weight:bold;
font-size:20px;
margin:5px;
letter-spacing:2px;
`
const Button=styled.button`
font-family: 'Abril Fatface', cursive;
padding:5px;
font-size:15px;
background-color:transparent;
cursor:pointer;

`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick=(direction) => {
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
        }
    };
  return (
   <Container>

       <Arrow direction="left" onClick={()=>handleClick("left")}>
           <ArrowLeftOutlined/>
       </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            
             <Slide bg={item.bg} key={item.id}>
             <ImgContainer>
             <Image>
             <img src={item.img}/>
             </Image>
             </ImgContainer>
             <InfoContainer>
                 <Title>{item.title}</Title>
                 <Desc>{item.desc}
                     </Desc>
                 <Button><Link to='/productlist'>SHOP NOW!!</Link></Button>
             </InfoContainer>
             </Slide>
        ))}
        </Wrapper>
       <Arrow direction="right" onClick={()=>handleClick("right")}>
           <ArrowRightOutlined/>
       </Arrow>
   </Container>
  )
}


export default Slider
