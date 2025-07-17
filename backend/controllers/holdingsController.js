const HoldingsModel = require('../model/HoldingsModel');

const getAllHoldings = async (req, res) => {
  try {
    const all = await HoldingsModel.find({});
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllHoldings };
