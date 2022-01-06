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
        <button onClick={() => addCost(name, amount)}>Add Amount</button>
      </div>
    </>
  );
}

export default Category;
