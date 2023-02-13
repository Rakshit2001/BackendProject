import styled from "styled-components"
import { mobile } from "../responsive"
import { Link } from "react-router-dom"
const Container = styled.div`
flex:1;
margin:3px;
height: 50vh;
position:relative;
`
const Image = styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 ${mobile({height : "25vh"})}
`
const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
align-items: center;
justify-content:center;
`
const Title = styled.h1` 
color:white;
margin-bottom:20px;
font-family: 'Abril Fatface', cursive;

`
const Button = styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`
const CategoryItem = ({item}) => {
  return (
    <Container>
         <Image src={item.img}/>
         <Info>
             <Title>{item.title}</Title>
             <Button><Link to='/productlist'>EXPLORE NOW!!</Link> </Button>
         </Info>
    </Container>
  )
}

export default CategoryItem