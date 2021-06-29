import React from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
`

function App() {
  return (
    <>
      <h1>Cafe</h1>
      <GlobalStyle />
      <div>
        hello
      </div>
    </>
  );
}

export default App;
