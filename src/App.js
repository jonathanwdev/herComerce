import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import Routes from './routes/routes';
import Header from './components/Header';

import { store, persistor } from './store';

import GlobalStyles from './styles/globalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
