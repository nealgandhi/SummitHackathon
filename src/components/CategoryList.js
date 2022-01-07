import React, { useState, useEffect } from 'react';
import Category from './Category';
import Catergories from '../data/Categories.json';
import Dropdown from './Dropdown';

function CategoryList() {
  const [itemList, setItemList] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);

  const addCost = (name, total) => {
    let temp = itemList;
    temp.map((item) => {
      if (item.Category === name) {
        item.Total += total;
      }
    });
    setItemList(temp);
    updateCost();
  };

  const updateCost = () => {
    let tempSum = 0;
    itemList.map((item) => {
      tempSum += item.Total;
    });
    setTotalSpent(tempSum);
  };

  useEffect(() => {
    setItemList(Catergories);
    updateCost();
  });

  return (
    <div class="grid grid-cols-2">
      <div class="flex flex-col justify-center items-center">
        <Dropdown itemList={itemList} addCost={addCost} />
      </div>
      <div class="grid-child m-6 bg-isabelline p-4 rounded-lg">
        <h1 class="text-lg text-center bg-beauBlue rounded-lg">Totals by Category</h1>
        {itemList.map((item) => {
          return (
            <div>
              <h4>{item.Category}: ${item.Total}</h4>
            </div>
          );
        })}
        <div>
          <h1 class="text-m text-center bg-aliceBlue rounded-lg">Total Amount Spent: ${totalSpent}</h1>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
