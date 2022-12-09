import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState("")
  const [filterBy, setFilterBy] = useState("") 

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(setStocks)
  }, [])

  function buyStock(stockToBuy) {
    if (!myStocks.includes(stockToBuy)) setMyStocks([...myStocks, stockToBuy])
  }

  function removeStock(stockToRemove) {
    setMyStocks(myStocks.filter(stock => stock.id === stockToRemove.id ? false : true))
  }

  const sortedStocks = () => {
    switch(sortBy) {
      case "Alphabetically": return stocks.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
      case "Price": return stocks.sort((a, b) => a.price > b.price ? 1 : -1)
      default: return stocks
    }
  }

  const filteredStocks = sortedStocks().filter(stock => {
    if (filterBy === "") {
      return true
    }
    else return stock.type === filterBy
  })

  return (
    <div>
      <SearchBar setSortBy={setSortBy} sortBy={sortBy} setFilterBy={setFilterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} removeStock={removeStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
