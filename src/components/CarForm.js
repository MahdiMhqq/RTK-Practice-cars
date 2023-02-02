import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  // REDUX
  const formStore = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(e.target.value));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(
      addCar({
        name: formStore.name,
        cost: formStore.cost,
      })
    );
  };

  return (
    <div className="car-form panel pb-3 mb-3 border-b">
      <h4 className="text-lg font-bold">Add Car</h4>
      <form onSubmit={handleSubmitForm}>
        <div className="flex items-end gap-4">
          <div className="flex flex-col grow">
            <label className="label" htmlFor="">
              Name
            </label>
            <input
              type="text"
              className="border border-purple-400 rounded-md px-4 py-1 "
              value={formStore.name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex flex-col grow">
            <label className="label" htmlFor="">
              Cost
            </label>
            <input
              type="text"
              className="border border-purple-400 rounded-md px-4 py-1 "
              value={formStore.cost}
              onChange={handleCostChange}
            />
          </div>
          <button
            type="submit"
            className="rounded-md px-4 py-1 transition bg-green-300 cursor-pointer active:bg-green-700 hover:bg-green-500"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
