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
    <>
      <div>
        <Dropdown itemList={itemList} addCost={addCost} />
      </div>
      <div>
        <h1>Totals by Category</h1>
        {itemList.map((item) => {
          return (
            <div>
              <h4>{item.Category}</h4>
              <h3>${item.Total}</h3>
            </div>
          );
        })}
      </div>
      <div>
        <h1>Total amount spent</h1>
        <h3>${totalSpent}</h3>
      </div>
    </>
  );
}

export default CategoryList;
