import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios'
import api from "../../api/apiInstance";

interface PasswordResetState {
  loading: boolean;
  error: string | null;
  success: boolean;
  step: "request" | "verify" | "reset";
}

const initialState: PasswordResetState = {
  loading: false,
  error: null,
  success: false,
  step: "request", 
};


export const requestResetOTP = createAsyncThunk(
  "passwordReset/requestOTP",
  async (email: string, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/request-reset", { email });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to send OTP");
    }
  }
);


export const VerifyEmail = createAsyncThunk(
  "passwordReset/verifyOTP",
  async (
    { email, otp }: { email: string; otp: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Invalid OTP");
    }
  }
);


export const resetPassword = createAsyncThunk(
  "passwordReset/resetPassword",
  async (
    { email, newPassword }: { email: string; newPassword: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await api.post("/auth/reset-password", {
        email,
        newPassword,
      });
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Password reset failed");
    }
  }
);

const passwordResetSlice = createSlice({
  name: "passwordReset",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<PasswordResetState["step"]>) => {
      state.step = action.payload;
    },
    clearState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/fulfilled"),
        (state) => {
          state.loading = false;
          state.success = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: any) => {
          state.loading = false;
          state.error = action.payload || "Something went wrong";
        }
      );
  },
});

export const { setStep, clearState } = passwordResetSlice.actions;
export default passwordResetSlice.reducer;
