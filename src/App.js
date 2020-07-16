import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp';
import './config/ReactotronConfig';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SignUp} />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
