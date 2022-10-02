import { useState, useEffect } from "react";
import React from "react";

const filter = ({ filter, setFilter }) => {
  return (
    <div className="w-11/12 sm:w-2/3 lg:w-3/6 mx-auto p-4 mb-8 bg-slate-100 shadow-md rounded flex justify-center items-center">
      <label className="w-0 sm:w-1/3 mb-2 text-gray-800 font-bold">
        Filter Expenses
      </label>
      <form className="border-2 bg-gray-100 w-11/12">
        <select
          name="category"
          id="category"
          className="w-full p-1 mb-2 rounded hover:bg-gray-100 transition-colors text-center bg-gray-100 focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">-- Select --</option>
          <option value="Savings">Savings</option>
          <option value="Food">Food</option>
          <option value="Home">Home</option>
          <option value="Micellaneous">Micellaneous</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Suscriptions">Suscriptions</option>
        </select>
      </form>
    </div>
  );
};

export default filter;
