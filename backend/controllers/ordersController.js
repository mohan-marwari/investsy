const OrdersModel = require('../model/OrdersModel');

const createOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createOrder };
