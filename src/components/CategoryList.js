import React, { useState, useEffect } from 'react';
import Category from './Category';
import Catergories from '../data/Categories.json';
import { render } from 'react-dom';

function CategoryList() {
  const [itemList, setItemList] = useState([]);
  const [showTotals, setShowTotals] = useState(false);

  const addCost = (name, total) => {
    let temp = itemList;
    temp.map((item) => {
      if (item.Category === name) {
        item.Total += total;
      }
    });
    setItemList(temp);
  };

  useEffect(() => {
    if (itemList.length === 0) setItemList(Catergories);
  }, []);

  return (
    <>
      <div>
        {itemList.map((item) => {
          return (
            <div>
              <h1>{item.Category}</h1>
              <Category
                name={item.Category}
                total={item.Total}
                addCost={addCost}
              />
            </div>
          );
        })}
      </div>
      {!showTotals ? (
        <button onClick={() => setShowTotals(!showTotals)}>Show Totals</button>
      ) : (
        <div>
          <button onClick={() => setShowTotals(!showTotals)}>
            Hide Totals
          </button>
          <div>
            {itemList.map((item) => {
              return (
                <div>
                  <h4>{item.Category}</h4>
                  <h3>{item.Total}</h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default CategoryList;
