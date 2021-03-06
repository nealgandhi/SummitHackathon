import React, { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import Footer from "./Footer";

export default function Dashboard() {
  const [budget, setBudget] = useState(0);
  const [askBudget, setAskBudget] = useState(true);
  const [totalSpent, setTotalSpent] = useState(0);

  const handleClick = (number) => {
    setBudget(parseFloat(number));
  };

  const updateBudget = (amount) => {
    setBudget(budget - amount);
    setTotalSpent(totalSpent + amount);
  };

  return (
    <div class="ml-8 mr-8 min-height h-screen">
      <div class="grid grid-cols-12 gap-8 grid-flow-col auto-cols-max grid-flow-row auto-rows-max">
        <div class="col-span-3 rounded-lg p-4 pt-9 pb-9 text-center">
          <div class="text-6xl mb-4">Hello User</div>
          <div class="text-lg whitespace-nowrap">Welcome to Your Dashboard</div>
        </div>
        <div class="row-start-2 col-span-3 bg-beauBlue p-6 rounded-lg text-lg">
          {askBudget ? (
            <div>
              <div class="text-3xl">What's your budget?</div>
              <div class="space-x-2 space-y-4">
                <input
                  type="number"
                  id={budget}
                  onChange={(e) => handleClick(e.target.value)}
                />
                <button
                  type="button"
                  class="inline-block px-6 py-2.5 bg-paleCerulean text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => {
                    setAskBudget(false);
                  }}
                >
                  Set
                </button>
              </div>
            </div>
          ) : (
            <></>
          )}

          {!askBudget ? (
            <div class="h-1">
              <div class="text-2xl mb-6">Your budget for this month is...</div>
              <div class="text-mono text-center text-8xl">${budget}</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div class="h1 row-start-3 col-span-3 bg-paleCerulean rounded-lg pt-6">
          <div class="text-2xl text-center mb-6">You have spent</div>
          <div class="text-mono text-center text-8xl">${totalSpent}</div>
          <div class="text-2xl text-center mt-6">today</div>
        </div>
        <div class="row-start-2 col-span-9 row-span-2 bg-aliceBlue p-4 rounded-lg">
          <CategoryList updateBudget={updateBudget} />
        </div>
      </div>
    </div>
  );
}
