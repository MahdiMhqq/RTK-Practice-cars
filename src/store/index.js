import { configureStore } from "@reduxjs/toolkit";
import carReducer, {
  addCar,
  changeSearch,
  removeCar,
} from "./slices/carsSlice";
import formReducer, { changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carReducer,
  },
});

export default store;
export { addCar, changeSearch, removeCar, changeName, changeCost };
