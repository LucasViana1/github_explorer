import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalSyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalSyle />
    </>
  );
}

export default App;
