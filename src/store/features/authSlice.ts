import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  user: { name: string; email: string } | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Simulated login API (replace with real API)
const fakeLoginApi = async (data: { name: string; email: string; password: string }) => {
  return new Promise<{ user: { name: string; email: string }; token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (data.password === "password123") {
        resolve({ user: { name: data.name, email: data.email }, token: "fake-jwt-token" });
      } else {
        reject("Invalid password");
      }
    }, 1000);
  });
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await fakeLoginApi(userData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: { name: string; email: string }; token: string }>) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
