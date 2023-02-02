import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../store";

function CarSearch() {
  const carsStore = useSelector((store) => store.cars);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <h6 className="font-bold text-blue-800 text-xl">My Cars</h6>
      <input
        type="text"
        placeholder="Search..."
        className="px-3 py-1 border rounded-md outline-none border-gray-500 focus:border-gray-700"
        value={carsStore.search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default CarSearch;
