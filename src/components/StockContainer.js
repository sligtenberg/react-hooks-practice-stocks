import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, buyStock }) {
  const stockComponents = stocks.map(stock =>
    <Stock
      key={stock.id}
      stock={stock}
      handleClick={() => buyStock(stock)}
    />)
  return (
    <div>
      <h2>Stocks</h2>
      {stockComponents}
    </div>
  );
}

export default StockContainer;
