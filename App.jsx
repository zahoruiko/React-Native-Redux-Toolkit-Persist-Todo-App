import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Todos from './components/Todos/Todos';
import Loader from './components/Loader/Loader';

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
