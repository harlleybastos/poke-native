import React from 'react';
import PokeDate from './context/PokeDate';
import Main from './pages/Main';

function App() {
  return (
    <PokeDate>
      <Main />
    </PokeDate>
  );
}

export default App;
