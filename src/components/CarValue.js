import React from "react";
import { useSelector } from "react-redux";

function CarValue() {
  const { cars, search } = useSelector((store) => store.cars);
  const value = cars
    .filter((car) => car.name.includes(search.toLowerCase()))
    .reduce((acc, curr) => (acc += Number(curr.cost)), 0);

  return (
    <div className="font-bold text-xl ml-auto w-max mt-4">
      Total Value: ${value}
    </div>
  );
}

export default CarValue;
