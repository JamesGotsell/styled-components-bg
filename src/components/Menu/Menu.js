import React, { Component } from 'react';
import styled , { ThemeProvider } from 'styled-components';
import {theme} from '../../theme/theme'
import {Icon} from 'react-fa'

const MenuIcon = styled.div`
  height: 20px;
  width: 20px;
  background: transparent;
  position:absolute; 
  top:0;
  right:0;
  padding:10px;
  margin:10px;
/* background-color: ${props => props.isOpen ? theme.open : theme.closed}; */
  & .fa {
    font-size: 1.5em;
    line-height:1.3;
    color: ${props => props.isOpen ? theme.open : theme.closed}; 
  }
 
 
`
class Menu extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render() {
    
    const { toggle , isOpen} = this.props
    return (
      <div>
      <ThemeProvider theme={theme}>
        <MenuIcon isOpen={isOpen} onClick={() => toggle()} >
            <Icon name={ this.props.isOpen ? 'times': 'bars'} />
        </MenuIcon>
      </ThemeProvider >
      </div>
     
    );
  }
}

export default Menu;