import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import passwordResetReducer from "./features/passwordResetSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    reset: passwordResetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
