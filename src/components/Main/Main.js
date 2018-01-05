import React, { Component } from 'react';
import styled from 'styled-components'

import TileLinks from '../TileLinks/TileLinks';
import SearchByProducts from '../SearchByProducts/SearchByProducts';
import SearchByStore from '../SearchByStore/SearchByStore';
import AdventureHero from '../AdventureHero/AdventureHero'

const MainWrapper = styled.div`
   
   ${'' /* background-color:#efefef; */}
   &:after {
     content: ''
   }
`

class Main extends Component {

  render() {
  
    return (
       <MainWrapper> 
          <TileLinks></TileLinks>
          <SearchByProducts></SearchByProducts>
          <SearchByStore></SearchByStore>
          <AdventureHero></AdventureHero> 
       </MainWrapper>
    );
  }
}

export default Main;