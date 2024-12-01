import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import statement
import App from './App.jsx';
import './index.css';
import { store, persistor } from './redux/store.js'; // Import persistor from Redux store
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);


