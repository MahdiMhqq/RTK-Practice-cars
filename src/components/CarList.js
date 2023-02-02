import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();
  const carsStore = useSelector((store) => store.cars);

  const handleRemoveCar = (id) => {
    dispatch(removeCar(id));
  };

  const renderedCars = carsStore?.cars?.map((car) => (
    <div
      key={car.id}
      className="flex items-center gap-4 border-b last:border-none mb-3"
      onClick={() => handleRemoveCar(car.id)}
    >
      <span className={`font-medium`}>
        {car.name} - ${car.cost}
      </span>
      <button className="rounded-md bg-red-400 h-8 w-8 ml-auto">X</button>
    </div>
  ));

  return <div className="flex flex-col">{renderedCars}</div>;
}

export default CarList;
