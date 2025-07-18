import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  // Buy Window State
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // Sell Window State
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  // Open Buy Window
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // Close Buy Window
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // Open Sell Window
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  // Close Sell Window
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        // Buy
        isBuyWindowOpen,
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        // Sell
        isSellWindowOpen,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,

        // Selected Stock
        selectedStockUID,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
