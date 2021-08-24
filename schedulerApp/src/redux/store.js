import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import mountsReducer from './mountSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    mount_info: mountsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
