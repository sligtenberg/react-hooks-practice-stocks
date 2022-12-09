import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, removeStock }) {
  const stockComponents = myStocks.map(stock =>
    <Stock
      key={stock.id}
      stock={stock}
      handleClick={() => removeStock(stock)}
    />)
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockComponents
      }
    </div>
  );
}

export default PortfolioContainer;
