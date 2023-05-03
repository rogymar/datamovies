import React from 'react';

// Components
import Header from './components/Header';
import Home from './components/Home';

// Styles
import { GlobalStyle } from './GobalStyle';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    <GlobalStyle />
    </div>
  );
}

export default App;