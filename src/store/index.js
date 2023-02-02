import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slices/carsSlice";
import formReducer from "./slices/formSlice";
import { addCar, changeSearch, removeCar } from "./slices/carsSlice";
import { changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carReducer,
  },
});

export default store;
export { addCar, changeSearch, removeCar, changeName, changeCost };
