import React, { useState, useEffect } from "react";
import Category from "./Category";
// import Piechart from './Piechart';
import { PieChart, Pie, Cell } from "recharts";
import Catergories from "../data/Categories.json";
import Dropdown from "./Dropdown";

function CategoryList({ updateBudget }) {
  const [itemList, setItemList] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [chartList, setChartList] = useState([5]);
  const [chartUpdate, setChartUpdate] = useState(true);

  const updateChart = () => {
    setTimeout(() => {
      setChartUpdate(false);
    }, 500);
    setChartUpdate(true);
  };

  const addCost = (name, total) => {
    let temp = itemList;
    temp.map((item) => {
      if (item.Category === name) {
        item.Total += total;
      }
    });
    setItemList(temp);
    updateCost();
    updateBudget(total);
  };

  const updateCost = () => {
    let tempSum = 0;
    itemList.map((item) => {
      tempSum += item.Total;
    });
    setTotalSpent(tempSum);
    itemList.map((item) => {
      chartList.map((chartItem) => {
        if (item.Category === chartItem.category) {
          chartItem.amount = item.Total;
          const tempNum = item.Total / totalSpent;
          chartItem.percent = parseFloat(tempNum.toFixed(2));
        }
      });
    });
    console.log(chartList);
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];
  useEffect(() => {
    setItemList(Catergories);
    updateCost();
    let tempchartList = [
      {
        category: "Others",
        "amount:": 0.0,
        percent: 0.0,
      },
      {
        category: "Shopping & Entertainment",
        "amount:": 0.0,
        percent: 0.0,
      },
      {
        category: "Health",
        "amount:": 0.0,
        percent: 0.0,
      },
      {
        category: "Personal & Family Care",
        "amount:": 0.0,
        percent: 0.0,
      },
      {
        category: "Restaurants & Dining",
        "amount:": 0.0,
        percent: 0.0,
      },
    ];
    setChartList(tempchartList);
  }, []);

  return (
    <div class="grid grid-cols-2">
      <div class="flex flex-col justify-center items-center">
        <Dropdown itemList={itemList} addCost={addCost} />
      </div>
      <div class="grid-child m-6 bg-isabelline p-4 rounded-lg">
        <h1 class="text-2xl p-2 mb-2 text-center bg-beauBlue rounded-lg">
          Totals by Category
        </h1>
        {itemList.map((item) => {
          return (
            <div class="text-lg">
              <h4>
                {item.Category}: ${item.Total}
              </h4>
            </div>
          );
        })}
        <div>
          <h1 class="text-xl p-2 mt-2 text-center bg-aliceBlue rounded-lg">
            Total Amount Spent: ${totalSpent}
          </h1>
        </div>
      </div>
      <div>
        {chartUpdate ? (
          <div>
            <button
              onClick={() => {
                updateChart();
              }}
            >
              Refresh PieChart
            </button>
            <h2> </h2>
            <PieChart width={400} height={400}>
              <Pie
                data={chartList}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                nameKey={chartList.category}
                fill="#8884d8"
                label={true}
                dataKey="percent"
              >
                {chartList.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                updateChart();
              }}
            >
              Refresh PieChart
            </button>
            <PieChart width={400} height={400}>
              <Pie
                data={chartList}
                cx={200}
                cy={200}
                labelLine={false}
                outerRadius={80}
                nameKey={chartList.category}
                fill="#8884d8"
                label={true}
                dataKey="percent"
              >
                {chartList.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryList;
