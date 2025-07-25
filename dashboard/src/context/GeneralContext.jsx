import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [tradeDefaults, setTradeDefaults] = useState({ qty: 1, price: 0 });

  // BUY
  const openBuyWindow = (uid, qty = 1, price = 0) => {
    setIsSellWindowOpen(false);
    setSelectedStockUID(uid);
    setTradeDefaults({ qty, price });
    setIsBuyWindowOpen(true);
  };
  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // SELL
  const openSellWindow = (uid, qty = 1, price = 0) => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID(uid);
    setTradeDefaults({ qty, price });
    setIsSellWindowOpen(true);
  };
  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  // Derived
  const activeSide = isBuyWindowOpen ? "BUY" : isSellWindowOpen ? "SELL" : null;
  const closeActiveWindow = () => {
    if (activeSide === "BUY") closeBuyWindow();
    else if (activeSide === "SELL") closeSellWindow();
  };

  return (
    <GeneralContext.Provider
      value={{
        // state
        isBuyWindowOpen,
        isSellWindowOpen,
        selectedStockUID,
        tradeDefaults,
        // actions
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
        // derived
        activeSide,
        closeActiveWindow,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
