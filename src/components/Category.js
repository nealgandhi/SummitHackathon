import React, { useState } from 'react';

function Category({ addCost, name }) {
  const [amount, setAmount] = useState(0);

  const onChangeHandler = (number) => {
    setAmount(parseFloat(number));
  };

  return (
    <>
      <div>
        <input
          type='number'
          id={amount}
          onChange={(e) => onChangeHandler(e.target.value)}
        />
        <button type="button"
              class="inline-block px-6 py-2.5 bg-paleCerulean text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => addCost(name, amount)}>Add</button>
      </div>
    </>
  );
}

export default Category;
