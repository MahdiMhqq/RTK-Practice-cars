import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/carsSlice";
import formSlice from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    cars: carsSlice.reducer,
  },
});

export default store;
