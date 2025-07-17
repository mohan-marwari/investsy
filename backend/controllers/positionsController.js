const PositionsModel = require('../model/PositionsModel');

const getAllPositions = async (req, res) => {
  try {
    const all = await PositionsModel.find({});
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllPositions };
