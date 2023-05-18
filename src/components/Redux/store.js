import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { usersReducer } from './userSlice';
import { followerReducer } from './followerSlice';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  users: usersReducer,
  followers: followerReducer,
});

export const store = configureStore({
  reducer: rootReducer, 
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);