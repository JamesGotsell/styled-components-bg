import React, { Component } from 'react';
// import  from 'styled-components'

// import br from '../../../public/svg/br.svg'
import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

import { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Raisonne';
    src: url('../../../public/fonts/Raisonne-DemiBold.woff2');
  }
  @font-face {
    font-family: 'AkkuratStd';
    src: url('../../../public/fonts/AkkuratStd-Mono.woff2');
  }

`;

class App extends Component {
  render() {
    return (
       <div className="App">
     
        <Header></Header>
        
        <Main></Main>

        <Footer></Footer>
       </div>
    );
  }
}

export default App;
