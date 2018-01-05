import React, { Component } from 'react';
// import logo from '../../logo.svg';
import Menu from '../Menu/Menu'
import Nav from '../Nav/Nav'
// import SVG  from 'react-inlinesvg';
import styled from 'styled-components'
const imgPath= 'http://www.beargrylls.com/static/media/img/home/header/03.jpg';

const HeaderEle = styled.header`
  background-color: #222;
  height: 100vh;
  padding: 20px;
  color: white;
  text-align:center;
  padding:0;

  background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #f1f1f1;
   background-image:url('http://www.beargrylls.com/store/bundles/octerweb/img/homepage/b1-compressor.jpg');
`

const HeaderOverlay = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.45); 
    
`
const HeaderContentWrapper = styled.div`
  position: absolute;
  left: 100px;
  top: 45%;
  padding-bottom: 0;
  text-align:left;
  display: ${props => props.isOpen ? 'none' : 'block'};
`
const HeaderContentTitle = styled.div`
  font-size: 3.385vw;
`
const HeaderContentTitleSpan = styled.span`
    display: block;
    left: -100px;
`
const HeaderContent = styled.div`
    color: #fff;
    width: 90%;
    margin-top: 1rem;
    max-width: 53em;
    & p {
      margin-bottom: 1rem;
      line-height: 1.5em;
      letter-spacing: -.062em;
    }
`
const HeaderLogo = styled.div`
  font-size: 1.5em;
  float:left;
  padding:10px;
  color: ${props => props.isOpen ? 'white' : 'black'};
  
`
const ImgEle = styled.div`
 /* top:0;
 bottom:0;
 left:0;
 right:0;
 height:100vh;
  z-index:3; */
 background:url(${imgPath}) no-repeat center center fixed;
 background-size: cover;
`
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
   this.toggleMenu = this.toggleMenu.bind(this)
  }
 
  toggleMenu () {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state)
  }
  render() {
  
    return (
        <HeaderEle>
          <HeaderOverlay/>
          <HeaderContentWrapper isOpen={this.state.isOpen}>
            <HeaderContentTitle >       
               <HeaderContentTitleSpan>Store</HeaderContentTitleSpan>
            </HeaderContentTitle>
    
              <HeaderContent>
                <p>Adventure is not a place or a thing, it is a state of mind.</p>
                <p>We’ve partnered with some of the best retailers to create a unique store where you can discover and compare a huge range of adventure kit. Not only Bear Grylls products but thousands of others at every different price point. We’ll help you out with our “Bear's Picks” on items we know and trust, but ultimately you can choose what’s right for you.</p>
                <p>Wherever you’re heading, be prepared, be safe, and above all, NEVER GIVE UP!</p>
              </HeaderContent>
           
          </HeaderContentWrapper>
          <HeaderLogo isOpen={this.state.isOpen} >BR</HeaderLogo>
            <Nav active={this.state.isOpen}></Nav>
            <Menu theme={this.props.theme} isOpen={this.state.isOpen} toggle={this.toggleMenu}></Menu>
            <ImgEle ></ImgEle>
         
        </HeaderEle>
    );
  }
}

export default Header;
