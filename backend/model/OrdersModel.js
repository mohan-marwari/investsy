const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String, // "buy" or "sell"
});

const OrdersModel = mongoose.model("Order", OrderSchema);
module.exports = OrdersModel;
