import React, { Component } from 'react';
import styled from 'styled-components';
import { arrayOf, object } from 'prop-types'; 

const NavItems = [
    {pageName: 'Home'},
    {pageName: 'About'},
    {pageName: 'Television'},
    {pageName: 'Experiences'},
    {pageName: 'Social'},
    {pageName:'Blog'},
    {pageName:'Store'}
 ]

const NavMenu = styled.div`
    display: ${props => props.active ? 'block' : 'none'};
    z-index:60;
    background-color:blue;
    height:100vh;
`

const MenuWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`

const NavContainer = styled.ul`
    position: relative;
    margin: 3vh 0 0 27.9%;
    font-family: raisonne;
    font-size: calc(1.1rem + 3.94vh);
    letter-spacing: -.025em;
    color: #fff
& li {
    position: relative;
    margin: 0 0 1.05vh;
    display: block;
    overflow: hidden;
}
`


const Nav = ({
    active = false
    
 }) =>  (
            <NavMenu active={active} >
                <MenuWrap>
                    <NavContainer>
                       
                            { NavItems.map((navItem, i) => {
                               return  <NavContainer><li key={i+1}>{navItem.pageName}</li></NavContainer>
                            })}
                      
                    </NavContainer>
                </MenuWrap>
            </NavMenu>
    );
  


export default Nav;