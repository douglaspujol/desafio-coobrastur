import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import SignUp from './pages/SignUp';
import './config/ReactotronConfig';
import store from './store';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={SignUp} />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
