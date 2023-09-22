import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loader from './components/Loader/Loader';
import Todos from './components/Todos/Todos';
import {
  persistor,
  store,
} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <Todos />
      </PersistGate>
    </Provider>
  );
};
export default App;
