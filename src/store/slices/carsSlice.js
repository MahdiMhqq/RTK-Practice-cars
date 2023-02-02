import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    search: "",
    cars: [],
  },
  reducers: {
    changeSearch(state, action) {
      state.search = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      return {
        ...state,
        cars: [...state.cars].filter((car) => car.id !== action.payload),
      };
    },
  },
});

export const { changeSearch, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
