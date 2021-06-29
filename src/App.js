import React from 'react';
import { createGlobalStyle } from 'styled-components'
import { Navbar } from './Navbar/Navbar';
import { Banner } from './Banner/Banner';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
`

function App() {
  return (
    <>
      
      <GlobalStyle />
      <Navbar/>
      <Banner/>

      <div>
        hello
      </div>
    </>
  );
}

export default App;
