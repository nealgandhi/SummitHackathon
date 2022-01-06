import React, { useState } from 'react';

function Category({ addCost, name, total }) {
  const clickHandle = (e) => {
    e.preventDefault();
    if (isNaN(parseFloat(document.getElementById('amount').value))) {
      alert("You didn't enter a number ");
    } else {
      addCost(name, parseFloat(document.getElementById('amount').value));
    }
  };
  return (
    <>
      <form>
        <input type='number' id='amount' />
        <button onClick={clickHandle}>Add Amount</button>
      </form>
    </>
  );
}

export default Category;

// import React, { useState } from 'react';

// function Category({ addCost, name, total }) {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newTotal =
//       total + parseFloat(document.getElementById('amount').value);
//     addCost(name, newTotal);
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type='number' id='amount' />
//         <button type='submit' value='submit'>
//           Add Amount
//         </button>
//       </form>
//     </>
//   );
// }

// export default Category;
