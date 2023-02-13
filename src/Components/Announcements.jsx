import styled from "styled-components"

const Container=styled.div`
height:30px;
background-color:skyblue;
color:black;
display:flex;
align-items:center;
justify-content:center;
font-size:15px;
font-weight:500;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal!! Free Shipping on orders over Rs 999
    </Container>
  )
}

export default Announcements
