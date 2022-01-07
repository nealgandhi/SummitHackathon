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
        <button type="button"
        class="px-6 py-2.5 bg-paleCerulean text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => {
          setShowList(!showList);
          setShowCat(false)}
        }>Choose a category</button>
      ) : (
        <div>
          <button type="button"
              class="inline-block px-6 py-2.5 bg-paleCerulean text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={() => setShowList(!showList)}>
            Close Categories
          </button>
          {itemList.map((item) => {
            return (
              <div class="container bg-aliceBlue w-40 whitespace-nowrap">
                <button onClick={() => handleClick(item.Category)}>
                  {item.Category}
                </button>
              </div>
            );
          })}
        </div>
      )}
      {!showCat ? (
        <></>
      ) : (
        <div class="p-4">
          <h1>{name}</h1>
          <Category addCost={addCost} name={name} />
        </div>
      )}
    </>
  );
}

export default Dropdown;
