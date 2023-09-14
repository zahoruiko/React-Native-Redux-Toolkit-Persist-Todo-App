import { combineReducers } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './slices/themeSlice';
import { todosReducer } from './slices/todosSlice';
import { translationReducer } from './slices/translationSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  theme: themeReducer,
  translation: translationReducer,
});

const persistConfig = {
  key: 'de.grammatikum.todos.persister',
  storage: AsyncStorage,
  // whitelist: ['key1', 'key2'],
  // blacklist: ['key3', 'key4'],
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
