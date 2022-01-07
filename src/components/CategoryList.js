import React, { useState, useEffect } from "react";
import Category from "./Category";
import { PieChart, Pie, Cell, Legend } from "recharts";
import Catergories from "../data/Categories.json";
import Chart from "../data/Chart.json";
import Dropdown from "./Dropdown";
import { stringify } from "querystring";

function CategoryList({ updateBudget }) {
  const [itemList, setItemList] = useState([]);
  const [totalSpent, setTotalSpent] = useState(0);
  const [chartList, setChartList] = useState([5]);
  const [chartUpdate, setChartUpdate] = useState(true);

  const chart = require("../data/Chart.json");

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
    let chartSum = 0;
    itemList.map((item) => {
      tempSum += item.Total;
    });
    setTotalSpent(tempSum);
    itemList.map((item) => {
      chartList.map((chartItem) => {
        if (item.Category === chartItem.category) {
          chartItem.amount = item.Total;
          const tempNum = item.Total / tempSum;
          chartItem.percent = parseFloat(tempNum.toFixed(2));
          for (var i = 0; i < Chart.pies.length; i++) {
            if (Chart.pies[i].category === chartItem.category) {
              let jsonSum = chartItem.amount;
              Chart.pies[i].amount = jsonSum;
              console.log(Chart.pies[i].amount);
            }
          }
        }
      });
    });
  };

  const COLORS = ["#1973D1", "#135CC5", "#0C3BAA", "#061993", "#010280"];
  useEffect(() => {
    setItemList(Catergories);
    updateCost();
    setChartList(Chart.pies);
    console.log({ chartList });
  }, []);

  return (
    <div class="grid grid-cols-3">
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
          <div class="text-center">
            <button
              type="button"
              class="px-6 py-2.5 bg-paleCerulean text-serif text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
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
                legendType="rect"
              >
                <Legend verticalAlign="bottom" height={50} />
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
          <div class="text-center">
            <button
              type="button"
              class="px-6 py-2.5 bg-paleCerulean text-serif text-white font-medium text-xl leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => {
                updateChart();
              }}
            >
              Refresh PieChart
            </button>
            <PieChart width={400} height={400}>
              <Pie
                data={chartList}
                cx={220}
                cy={200}
                labelLine={false}
                outerRadius={80}
                nameKey={chartList.category}
                fill="#8884d8"
                label={true}
                dataKey="percent"
                legendType="rect"
              >
                <Legend verticalAlign="bottom" height={50} />
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
