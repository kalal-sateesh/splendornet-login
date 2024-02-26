import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "../components/Registration/RegistrationSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});
