import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SLICES } from "../utils/constants";
import { User } from "../interfaces";
import { RootState } from "../app/store";
import UserService from "../services/userService";

interface HomeState {
  user: null | User;
}

const initialState: HomeState = {
  user: null,
};

export const getDataUser = createAsyncThunk(
  `${SLICES.HOME}/user`,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const user = state.home.user;
    if (user) return;
    const userData = await UserService.getData();
    thunkAPI.dispatch(updateUser(userData));
  }
);

const homeSlice = createSlice({
  name: SLICES.HOME,
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { updateUser } = homeSlice.actions;

export default homeSlice.reducer;
