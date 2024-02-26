import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const RegistrationSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.data.push({ ...action.payload });
    },
  },
});

export const { addUser } = RegistrationSlice.actions;

export default RegistrationSlice.reducer;
