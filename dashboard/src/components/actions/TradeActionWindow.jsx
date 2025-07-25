import React, { useState } from "react";
import axios from "axios";
import "./TradeActionWindow.css";

/**
 * Generic trade window for BUY / SELL actions.
 *
 * Props:
 *  - uid: string (stock symbol)
 *  - side: "BUY" | "SELL"
 *  - onClose: function
 *  - defaultQty: number
 *  - defaultPrice: number
 */
const TradeActionWindow = ({
  uid,
  side = "BUY",
  onClose,
  defaultQty = 1,
  defaultPrice = 0,
}) => {
  const [stockQuantity, setStockQuantity] = useState(defaultQty);
  const [stockPrice, setStockPrice] = useState(defaultPrice);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isBuy = side === "BUY";
  const actionLabel = isBuy ? "Buy" : "Sell";
  const windowClass = isBuy ? "buy-window" : "sell-window";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uid || !stockQuantity || !stockPrice) {
      setErrorMsg("Please fill all fields.");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      await axios.post("http://localhost:3002/api/orders", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: side,
      });
      onClose?.();
    } catch (error) {
      console.error("Order error:", error);
      setErrorMsg("Failed to place order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`container ${windowClass}`} draggable="true">
      <div className="regular-order">
        {errorMsg && <p className="error-text">{errorMsg}</p>}
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              min="0"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          {isBuy ? "Margin required" : "Proceeds"} ₹
          {(Number(stockQuantity) * Number(stockPrice)).toFixed(2)}
        </span>
        <div>
          <button
            className={`btn ${isBuy ? "btn-blue" : "btn-red"}`}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? `${actionLabel}ing...` : actionLabel}
          </button>
          <button className="btn btn-grey" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeActionWindow;
