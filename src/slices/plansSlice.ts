import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SLICES } from "../utils/constants";
import { Plan, TypesOptionsValues } from "../interfaces";
import { RootState } from "../app/store";
import PlanService from "../services/planService";

interface HomeState {
  plans: Plan[];
  selectedPlan: Plan | null;
  selectedOption: TypesOptionsValues | null;
}

const initialState: HomeState = {
  plans: [],
  selectedPlan: null,
  selectedOption: null,
};

export const getPlans = createAsyncThunk(
  `${SLICES.PLANS}/list_plans`,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const plans = state.plans.plans;
    if (plans.length) return;
    const data = await PlanService.getList();
    thunkAPI.dispatch(updatePlans(data.list));
  }
);

const plansSlice = createSlice({
  name: SLICES.PLANS,
  initialState,
  reducers: {
    updatePlans: (state, action: PayloadAction<Plan[]>) => {
      state.plans = action.payload;
    },
    updateSelectedOption: (
      state,
      action: PayloadAction<TypesOptionsValues>
    ) => {
      state.selectedOption = action.payload;
    },
    updateSelectedPlan: (state, action: PayloadAction<Plan>) => {
      state.selectedPlan = action.payload;
    },
  },
});

export const { updatePlans, updateSelectedOption, updateSelectedPlan } =
  plansSlice.actions;

export default plansSlice.reducer;
