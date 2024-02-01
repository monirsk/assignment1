import { Facebook, Instagram, MailLockOutlined, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from "styled-components"
// import {Link} from 'react-router-dom'

import FooterLink from './FooterLink';

const Container =styled.div`
display: flex;
background-color: #01000eeb;
color: white;
padding: 20px;
padding-bottom: 40px;

    
`
const Left =styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
    
`
const Logo = styled.h1`
    
`

const Desc = styled.div`
    margin: 20px 0;
`

const SocialContainer = styled.div`
display: flex;
    
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

    
`
const Center =styled.div`
flex: 1;
padding: 20px;
    
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
   flex-wrap: wrap;
`

// const ListItem = styled.li`
// width: 50%;
// cursor: pointer;
// margin-bottom: 10px;

    
// `

const Right =styled.div`
flex:1;
padding: 20px;
    
`

const ContactItem =styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
    
`

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>E-commerce</Logo>
              <Desc>
                  Hello everyone. Welcome to our shop. Here you will get the best quality products.
              </Desc>
              <SocialContainer>
                  <SocialIcon color='3B5999'>
                      <Facebook></Facebook>
                      
                  </SocialIcon>
                   <SocialIcon color='E4405F'>
                       <Instagram></Instagram>
                      
                      </SocialIcon>
                      <SocialIcon color='55ACEE'>
                          <Twitter></Twitter>
                      
                      </SocialIcon>
                      <SocialIcon color='3B5999'>
                      <Pinterest></Pinterest>
                      </SocialIcon>
              </SocialContainer>

          </Left>

          <Center>
              <Title>Useful Links</Title>
              <List>
                  {/* <ListItem> <Link to={"/"}>Home</Link></ListItem>
                  <ListItem> <Link to={"/products"}>Product</Link></ListItem>
                  <ListItem> <Link to={"/cart"}>Cart</Link></ListItem>
                  <ListItem> <Link to={"/"}>Home</Link></ListItem> */}

                  <FooterLink></FooterLink>
                
                

              </List>

          </Center>
          <Right>
              <Title>Contact Us</Title>
              <ContactItem><Room   style={{marginRight:"10px"}}></Room> Rajshahi, Bangladesh</ContactItem>
              <ContactItem> <Phone  style={{marginRight:"10px"}}></Phone> 017128376874</ContactItem>
              <ContactItem><MailLockOutlined style={{marginRight:"10px"}}></MailLockOutlined>   kmsehab130@gmail.com</ContactItem>
          </Right>

      </Container>
  
  )
}

export default Footer
