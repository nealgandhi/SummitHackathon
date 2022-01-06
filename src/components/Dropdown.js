import React, { useState } from 'react';
import Category from './Category';

function Dropdown({ itemList, addCost }) {
  const [showList, setShowList] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const [name, setName] = useState('');
  const handleClick = (name) => {
    setShowList(false);
    setShowCat(true);
    setName(name);
  };
  return (
    <>
      {!showList ? (
        <button onClick={() => setShowList(!showList)}>Show Categories</button>
      ) : (
        <div>
          <button onClick={() => setShowList(!showList)}>
            Close Categories
          </button>
          {itemList.map((item) => {
            return (
              <h2 onClick={() => handleClick(item.Category)}>
                {item.Category}
              </h2>
            );
          })}
        </div>
      )}
      {!showCat ? (
        <h1>Please choose a category from the dropdown menu</h1>
      ) : (
        <div>
          <h1>{name}</h1>
          <Category addCost={addCost} name={name} />
        </div>
      )}
    </>
  );
}

export default Dropdown;
